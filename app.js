// DOM
// header
const headerDOM = document.querySelector("#header");
// nav
const navDOM = document.querySelector("#nav");
const navBoxDOM = document.querySelector("#navBox");
const navMenuDOM = document.querySelector("#navMenu");


// FUNCTIONS

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

// EVENTS
addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        headerSlide();
        window.scroll(0, 0);
    }, 50);

    navMenuDisplay();
})