document.addEventListener("DOMContentLoaded", function() {

    const perPage = 6;
    const pagination = document.getElementById("pagination");
    const searchInput = document.querySelector("input[name='search']");
    const clearFilters = document.getElementById("clearFiltersButton");

    let currentPage = 1;
    let allCards = Array.from(document.querySelectorAll(".searchable"));
    let totalPages = Math.ceil(allCards.length / perPage);
    let filteredCards = allCards.slice();

    let currentSearch = "";
    let currentFilter = "";
    let currentSort = "";

    function showPage(page) {

        currentPage = page;
        const start = (page - 1) * perPage;
        const end = start + perPage;

        allCards.forEach(card => card.style.display = "none");

        filteredCards.slice(start, end).forEach(card => {
            card.style.display = "block";
        });

        renderPagination();

    }

    function renderPagination() {

        // Remove old buttons, keep Prev/Next
        const items = pagination.querySelectorAll("li.page-item");
        items.forEach((item) => {
            const link = item.querySelector("a, span");
            if (!link) return;
            const label = link.textContent.trim();
            const isPrevNext = label === "Previous" || label === "Next";
            if (!isPrevNext) item.remove();
        });

        const insertBeforeNode = pagination.children[pagination.children.length - 1];
        const MAX_BUTTONS = window.innerWidth >= 500 ? 5 : 3;
        console.log(MAX_BUTTONS);

        const addPage = (n) => {
            const li = document.createElement("li");
            li.className = "page-item";
            if (n === currentPage) li.classList.add("active");

            const a = document.createElement("a");
            a.className = "page-link";
            a.href = "#";
            a.textContent = n;
            a.addEventListener("click", (e) => {
                e.preventDefault();
                showPage(n);
            });

            li.appendChild(a);
            pagination.insertBefore(li, insertBeforeNode);
        };

        const addEllipsis = (n) => {
            const li = document.createElement("li");
            li.className = "page-item";

            const a = document.createElement("a");
            a.className = "page-link";
            a.href = "#";
            a.textContent = "...";
            a.addEventListener("click", (e) => {
                e.preventDefault();
                showPage(n);
            });

            li.appendChild(a);
            pagination.insertBefore(li, insertBeforeNode);
        };

        if (totalPages <= MAX_BUTTONS) {
            for (let i = 1; i <= totalPages; i++) addPage(i);
            return;
        }

        // Compute a centered window of MAX_BUTTONS around currentPage
        let start = currentPage - Math.floor(MAX_BUTTONS / 2);
        if (start < 1) start = 1;
        let end = start + MAX_BUTTONS - 1;
        if (end > totalPages) {
            end = totalPages;
            start = end - MAX_BUTTONS + 1;
        }

        if (start > 1) addEllipsis(1);

        // Windowed page numbers
        for (let i = start; i <= end; i++) addPage(i);

        if (end < totalPages) addEllipsis(totalPages);

    }

    function applyFiltersAndSort() {

        filteredCards = allCards.filter(card => {

            const name = card.dataset.name.toLowerCase();
            const type = (card.dataset.type || "").toLowerCase();
            const role = (card.dataset.role || "").toLowerCase();
            const major = (card.dataset.major || "").toLowerCase();
            const classYear = (card.dataset.class || "").toLowerCase();
            const course = (card.dataset.course || "").toLowerCase();
            const overarching = (card.dataset.overarching || "").toLowerCase();

            const matchesSearch =
                name.includes(currentSearch) ||
                type.includes(currentSearch) ||
                role.includes(currentSearch) ||
                major.includes(currentSearch) ||
                classYear.includes(currentSearch) ||
                course.includes(currentSearch);

            const matchesFilter =
                currentFilter === "" || type.includes(currentFilter) || course.includes(currentFilter) || overarching.includes(currentFilter);

            return matchesSearch && matchesFilter;

        });

        if (currentSort.length > 0) {

            if (currentSort.includes("name")) {

                filteredCards.sort((a, b) => {
                    const nameA = a.dataset.name;
                    const nameB = b.dataset.name;
                    return currentSort === "name-asc"
                        ? nameA.localeCompare(nameB)
                        : nameB.localeCompare(nameA);
                });

            } else if (currentSort.includes("class")) {

                filteredCards.sort((a, b) => {
                    const nameA = a.dataset.class;
                    const nameB = b.dataset.class;
                    return currentSort === "class-asc"
                        ? nameA.localeCompare(nameB)
                        : nameB.localeCompare(nameA);
                });

            }

            const container = document.getElementById("card-list");
            filteredCards.forEach(card => {
                container.appendChild(card);
            });

        }

        totalPages = Math.ceil(filteredCards.length / perPage);
        showPage(1);

    }

    showPage(1);

    searchInput.addEventListener("input", function() {

        currentSearch = this.value.toLowerCase().trim();
        applyFiltersAndSort();

    });

    clearFilters.addEventListener("click", function() {

        currentSearch = "";
        searchInput.value = "";
        currentFilter = "";
        currentSort = "";
        applyFiltersAndSort();

    });

    document.querySelectorAll(".dropdown-item[data-sort]").forEach(item => {

        item.addEventListener("click", function (e) {
            e.preventDefault();
            currentSort = this.dataset.sort;
            applyFiltersAndSort();
        });

    });

    document.querySelectorAll(".dropdown-item[data-filter]").forEach(item => {

        item.addEventListener("click", function (e) {
            e.preventDefault();
            currentFilter = this.dataset.filter;
            applyFiltersAndSort();
        });

    });

    document.querySelector("#pagination a.page-link[href='#'][tabindex='-1']")
    .addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) showPage(currentPage - 1);
    });

    document.querySelector("#next-page a")
    .addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) showPage(currentPage + 1);
    });

});
