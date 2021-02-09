// DOM
// SECTION NAME
const nameDOM = document.querySelector('#name')
const nameHeaderDOM = document.querySelector("#nameHeader");
const nameBoxDOM = document.querySelectorAll('#nameBox')
// SECTION STORY
const storyDOM = document.querySelector('#story');
const storyBoxDOM = document.querySelectorAll('.story__box');
const storyHeaderDOM = document.querySelector('#storyHeader');
// SECTION PROJECTS
const projectsSectionDOM = document.querySelector('#projectsSection')
const projectsDOM = document.querySelector('#projects')
const projectsHeaderDOM = document.querySelector('#projectsHeader')
const projectsBoxDOM = document.querySelectorAll('.projects__box')
// SECTION CONTACT
const contactDOM = document.querySelector('#contact');
const contactHeaderDOM = document.querySelector('#contactHeader')
// FILL
const fillDOM = document.querySelectorAll('.fill');
const reloadBackgroundsDOM = document.querySelector('#reloadBackgrounds')

let colorsArr = [
    '#555555',
    '#818181',
    '#2c2c2c',
    '#086972',
    '#4997a0',
    '#003e47',
    '#ff9671',
    '#ffc8a0',
    '#c86745',
    '#84ffa3',
    '#b9ffd5',
    '#4ecb73',
    '#ffaad9',
    '#ffdcff',
    '#cb7aa7',
    '#ffec7d',
    '#ffba4c',
    '#c88a17',
    '#b38dff',
    '#e7beff',
    '#805fcb',
    '#19fbff',
    '#75ffff',
    '#00c7cc'
]

const changeBackground = () => {
    colorsArrPrev = colorsArr;
    if(colorsArr.length !== 0) {
        fillDOM.forEach( fill => {
            let color = colorsArr[Math.floor(Math.random()*colorsArr.length)]
            fill.style.backgroundColor = color;
            let newColorsArr = colorsArr.filter( col => col !== color );
            colorsArr = newColorsArr
            console.log(colorsArr, color)
        })
    }
    colorsArr = colorsArrPrev;
}
reloadBackgroundsDOM.addEventListener('click', changeBackground)
// //nav appear after click
// const navMenuDisplay = () => {
//     navBoxDOM.addEventListener("click", ()=> {
//         if(navMenuDOM.classList.contains("nav__menu-off")){

//             navMenuDOM.classList.remove("nav__menu-off");
//             navMenuDOM.classList.add("nav__menu-on");

//             //nav box rotate
//             navBoxDOM.classList.remove("nav__box-off");
//             navBoxDOM.classList.add("nav__box-on");
//         }
//         else if(navMenuDOM.classList.contains("nav__menu-on")){

//             navMenuDOM.classList.remove("nav__menu-on");
//             navMenuDOM.classList.add("nav__menu-off");

//             //nav box rotate
//             navBoxDOM.classList.remove("nav__box-on");
//             navBoxDOM.classList.add("nav__box-off");
//         }
//     })
// }

// const slideHeader = (header) => {

//     setTimeout( ()=>{
//         header.classList.remove("off__right");
//         header.classList.add("on__right");
//     }, 200);
// } 
// const slideParagraph = (paragraph) => {
    
//     setTimeout( ()=>{
//         paragraph.classList.remove("off__right");
//         paragraph.classList.add("on__right");
//     }, 400);
// } 

// // check if in veiwport
// function checkElementPosition(element) {

//     //Get element properties
//     let rect = element.getBoundingClientRect();
//     // GET SCREEN HEIGHT
//     let wHeight = document.documentElement.clientHeight;
//     //Check if in view    
//     let isVisible = (rect.top <= wHeight);
//     //Return 
//     return isVisible;
//   }

// const checkViewport = () => {
//     findHeaderDOM.forEach( header => {
//         checkElementPosition( header) ? slideHeader( header ) : "";
//     })
//     findParagraphDOM.forEach( paragraph => {
//         checkElementPosition( paragraph ) ? slideParagraph( paragraph ) : "";
//     })
    
// }
// EVENTS
// SECTION NAME
nameDOM.addEventListener( 'click', () => {
    console.log(nameDOM.style.left)
    if(nameDOM.classList.contains('left')) {
        nameDOM.classList.remove('left');
        nameDOM.classList.add('left-move');
        nameDOM.classList.remove('index-small');
        nameDOM.classList.add('index-huge');
        nameDOM.classList.add('color-blue');
        nameHeaderDOM.classList.add('color-blue');
        
    } else {
        nameDOM.classList.remove('left-move');
        nameDOM.classList.add('left');
        nameDOM.classList.remove('index-huge');
        nameDOM.classList.add('index-small');
        nameDOM.classList.remove('color-blue');
        nameHeaderDOM.classList.remove('color-blue');
    }
} )
// SECTION PROJECTS
projectsDOM.addEventListener( 'click', () => {
    if(projectsDOM.classList.contains('bottom')) {
        projectsDOM.classList.remove('bottom');
        projectsDOM.classList.add('bottom-move');
        projectsDOM.classList.remove('index-small');
        projectsDOM.classList.add('index-huge');
        projectsDOM.classList.add('color-green');
        projectsHeaderDOM.classList.add('color-green');
    } else {
        projectsDOM.classList.remove('bottom-move');
        projectsDOM.classList.add('bottom');
        projectsDOM.classList.remove('index-huge');
        projectsDOM.classList.add('index-small');
        projectsDOM.classList.remove('color-green');
        projectsHeaderDOM.classList.remove('color-green');
    }
} )
// SECTION STORY
storyDOM.addEventListener( 'click', () => {
    if(storyDOM.classList.contains('top')) {
        storyDOM.classList.remove('top');
        storyDOM.classList.add('top-move');
        storyDOM.classList.remove('index-small');
        storyDOM.classList.add('index-huge')
        storyDOM.classList.add('color-rose')
        storyHeaderDOM.classList.add('color-rose');
    } else {
        storyDOM.classList.remove('top-move');
        storyDOM.classList.add('top');
        storyDOM.classList.remove('index-huge');
        storyDOM.classList.add('index-small');
        storyDOM.classList.remove('color-rose')
        storyHeaderDOM.classList.remove('color-rose');
    }
} )
// SECTION STORY
contactDOM.addEventListener( 'click', () => {
    if(contactDOM.classList.contains('right')) {
        contactDOM.classList.remove('right');
        contactDOM.classList.add('right-move');
        contactDOM.classList.remove('index-small');
        contactDOM.classList.add('index-huge')
        contactDOM.classList.add('color-orange')
        contactHeaderDOM.classList.add('color-orange');
    } else {
        contactDOM.classList.remove('right-move');
        contactDOM.classList.add('right');
        contactDOM.classList.remove('index-huge');
        contactDOM.classList.add('index-small');
        contactDOM.classList.remove('color-orange')
        contactHeaderDOM.classList.remove('color-orange');
    }
} )
// IMPORTANT MAY BE USEFULL LATER
// headerBtnAboutDOM.addEventListener('click', () => {
//     let storySection = storySectionDOM.getBoundingClientRect();
//     let scrollOptions = {
//       left: storySection.left,
//       top: storySection.top,
//       behavior: 'smooth'
//     }
  
//     window.scrollTo(scrollOptions);
// });

// window onload
addEventListener("DOMContentLoaded", () => {
    changeBackground()
});

