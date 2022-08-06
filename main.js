'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const nvabarheight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > nvabarheight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open')
    scrollIntoView(link);
});

//Navbar toggle button for screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
navbarMenu.classList.toggle('open');
})

// Handle click on "contact me" button on home
const homecontactbtn = document.querySelector('.home__contact');
homecontactbtn.addEventListener('click', () => {
    scrollIntoView('#contact')
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show"arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});
// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home')
})

// Projects
const workbtncontainer = document.querySelector('.work__categories');
const projectcontainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workbtncontainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    //Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    if (active != null) {
      active.classList.remove('selected');
    }
    e.target.classList.add('selected');



    projectcontainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter ==='*' ||filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }  
        });
        projectcontainer.classList.remove('anim-out');  
    },300);
});

function scrollIntoView(selector) {
    const scrollto = document.querySelector(selector);
    scrollto.scrollIntoView({ behavior: 'smooth' });
}

