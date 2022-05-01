const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) { // Close Hamburger Menu
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(element => {
        element.classList.add('fade-out');
        element.classList.remove('fade-in');
    })
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    } else { // Open Hamburger Menu
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElems.forEach(element => {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    } )
    }
})