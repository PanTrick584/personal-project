// DOM
// container
const containerDOM = document.querySelector(".container");
// header
const headerDOM = document.querySelector("#header");
const headerOneDOM = document.querySelector("#headerOne");
const headerTwoDOM = document.querySelector("#headerTwo");
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
const storySectionDOM = document.querySelector("#storySection");
const storyDOM = document.querySelector('#story');
const storyOneDOM = document.querySelector('#storyHeaderOne');
const storyParagraphDOM = document.querySelector('#storyP');
// node lists
const findHeaderDOM = document.querySelectorAll(".findHeader");
const findParagraphDOM = document.querySelectorAll(".findParagraph");

// FUNCTIONS
// header slide onload
const headerSlide = () => {
    // HEADER ONE SLIDE UP
    headerOneDOM.classList.remove("off__up");
    headerOneDOM.classList.add("on__up");
    // HEADER TWO SLIDE RIGHT
    headerTwoDOM.classList.remove("off__right");
    headerTwoDOM.classList.add("on__right");
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

const slideHeader = (header) => {

    setTimeout( ()=>{
        header.classList.remove("off__right");
        header.classList.add("on__right");
    }, 200);
} 
const slideParagraph = (paragraph) => {
    
    setTimeout( ()=>{
        paragraph.classList.remove("off__right");
        paragraph.classList.add("on__right");
    }, 400);
} 

// check if in veiwport
function checkElementPosition(element) {

    //Get element properties
    let rect = element.getBoundingClientRect();
    // GET SCREEN HEIGHT
    let wHeight = document.documentElement.clientHeight;
    //Check if in view    
    let isVisible = (rect.top <= wHeight);
    //Return 
    return isVisible;
  }

const checkViewport = () => {
    findHeaderDOM.forEach( header => {
        checkElementPosition( header) ? slideHeader( header ) : "";
    })
    findParagraphDOM.forEach( paragraph => {
        checkElementPosition( paragraph ) ? slideParagraph( paragraph ) : "";
    })
    
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
});

// window onload
addEventListener("DOMContentLoaded", () => {

    // HEADER SLIDE
    setTimeout(() => {
        headerSlide();
        window.scroll(0, 0);
    }, 50);

    navMenuDisplay();

    // SECTIONS SLIDE AFTER HEADER LOADED
    setTimeout(() => {
        window.addEventListener("scroll", checkViewport);
    }, 100);
    
});