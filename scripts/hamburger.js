const hamburgerButton = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
let menuClosed = true

function toggleButton() {
    if (menuClosed) {
        navMenu.style.top = '0';
        hamburgerButton.classList.add('close')
        menuClosed = false
    } else {
        navMenu.style.top = '-100%';
        hamburgerButton.classList.remove('close');
        menuClosed = true;        
    }
}

function makeCross() {

}

hamburgerButton.addEventListener('click', toggleButton);