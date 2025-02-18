const dropdownLI = document.querySelector('#dropdown');

dropdownLI.addEventListener('click', (event) => {
    event.stopPropagation();

    if (!dropdownLI.classList.contains('clicked')) {

        dropdownLI.classList.add('clicked');

    } else {

        dropdownLI.classList.remove('clicked');

    }
});

document.addEventListener('click', () => {

    dropdownLI.classList.remove('clicked');

})

const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
    iframe.addEventListener('touchstart', () => {
        dropdownLI.remove('clicked');
    });
});
