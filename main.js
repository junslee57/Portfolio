'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const nvabarheight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > nvabarheight) {
    navbar.classList.add('navbar--dark');
}else {
    navbar.classList.remove('navbar--dark');
}
})