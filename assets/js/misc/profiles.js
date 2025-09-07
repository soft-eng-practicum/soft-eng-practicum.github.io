document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.js-collapsible-list');
    let uid = 0;

    sections.forEach(section => {
        const limit = 10;
        const itemSelector = '.js-movable';
        const list = section.querySelector('[data-role="list"]');

        let toggle = section.querySelector('[data-role="toggle"]');
        let collapse = section.querySelector('[data-role="collapse"]');
        let inner = section.querySelector('[data-role="collapse-inner"]');

        // Collect items (exclude the toggle itself if it sits in the list)
        const items = Array.from(list.querySelectorAll(itemSelector))
          .filter(el => el !== toggle);

        if (items.length > limit) {
            // Move overflow items into the collapse inner container
            const overflow = items.slice(limit);
            overflow.forEach(el => inner.appendChild(el));
            const hidden = overflow.length;

            // Reveal toggle and wire label changes
            toggle.textContent = `See ${hidden} more`;
            toggle.classList.remove('d-none');

            collapse.addEventListener('show.bs.collapse', () => { toggle.textContent = 'See Less'; });
            collapse.addEventListener('hide.bs.collapse', () => { toggle.textContent = `See ${hidden} more`; });
        } else {
            toggle.classList.add('d-none');
        }
    });
});
