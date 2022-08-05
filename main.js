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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
const target = event.target;
const link = target.dataset.link;
if(link == null){
    return;
}
console.log(event.target.dataset.link);
const scrollto = document.querySelector(link);
scrollto.scrollIntoView({behavior:'smooth'});
});