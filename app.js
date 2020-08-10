// DOM
// header
const headerDOM = document.querySelector("#header");
const headerBtnDOM = document.querySelector("#headerBtn");
// nav
const navDOM = document.querySelector("#nav");
const navBoxDOM = document.querySelector("#navBox");
const navMenuDOM = document.querySelector("#navMenu");
//nav li
const navhomeDOM = document.querySelector("#navHome");
const navAboutDOM = document.querySelector("#navAbout");
const navProjectsDOM = document.querySelector("#navProjects");
const navContactDOM = document.querySelector("#navContact");
//section story
const storySectionDOM = document.querySelector("#storySection")
const storyDOM = document.querySelector('#story');
const storyParagraphDOM = document.querySelector('#storyP');

// check if in veiwport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 
        &&
        rect.left >= 0
         &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// FUNCTIONS

const slideEvents = () => {
    setTimeout( ()=>{
        storyDOM.classList.remove("story__off");
        storyDOM.classList.add("story__on");
    }, 200);
    setTimeout( ()=>{
        storyParagraphDOM.classList.remove("off");
        storyParagraphDOM.classList.add("on");
    }, 400);
   
}    
// header slide onload
const headerSlide = () => {
    headerDOM.classList.remove("header__off");
    headerDOM.classList.add("header__on");
}

//nav appear after click
const navMenuDisplay = () => {
    navBoxDOM.addEventListener("click", ()=> {
        if(navMenuDOM.classList.contains("nav__menu-off")){

            navMenuDOM.classList.remove("nav__menu-off");
            navMenuDOM.classList.add("nav__menu-on");

            //nav box rotate
            navBoxDOM.classList.remove("nav__box-off");
            navBoxDOM.classList.add("nav__box-on");
        }
        else if(navMenuDOM.classList.contains("nav__menu-on")){

            navMenuDOM.classList.remove("nav__menu-on");
            navMenuDOM.classList.add("nav__menu-off");

            //nav box rotate
            navBoxDOM.classList.remove("nav__box-on");
            navBoxDOM.classList.add("nav__box-off");
        }
    })
}

const checkViewport = () => {
    isInViewport(storySectionDOM) ? console.log("yep") : console.log("nope");
    // slideEvents() : console.log("nope");
}
// EVENTS

// header button
headerBtnDOM.addEventListener('click', () => {
    let storySection = storySectionDOM.getBoundingClientRect();
    let scrollOptions = {
      left: storySection.left,
      top: storySection.top,
      behavior: 'smooth'
    }
  
    window.scrollTo(scrollOptions);
    slideEvents();
  });

// window onload
addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        headerSlide();
        window.scroll(0, 0);
    }, 50);

    navMenuDisplay();
    checkViewport();
})