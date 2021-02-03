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

// FUNCTIONS

//  setTimeout(()=> nameDOM.style.justifyContent = 'flex-start', 2000)

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
        // Array.from( nameBoxDOM, box => box.classList.remove('off'))
        // Array.from( nameBoxDOM, box => box.classList.add('on'))
        
        // nameDOM.classList.add('name__grid')
        // setTimeout(()=> nameDOM.style.display = 'none', 300)
        
    } else {
        nameDOM.classList.remove('left-move');
        nameDOM.classList.add('left');
        nameDOM.classList.remove('index-huge');
        nameDOM.classList.add('index-small');
        nameDOM.classList.remove('color-blue');
        nameHeaderDOM.classList.remove('color-blue');
        // Array.from( nameBoxDOM, box => box.classList.remove('on'))
        // Array.from( nameBoxDOM, box => box.classList.add('off'))
        // nameDOM.classList.remove('name__grid')
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

        // Array.from( projectsBoxDOM, box => box.classList.remove('off'))
        // Array.from( projectsBoxDOM, box => box.classList.add('on'))
        
        // projectsDOM.classList.add('projects__grid')
    } else {
        projectsDOM.classList.remove('bottom-move');
        projectsDOM.classList.add('bottom');
        projectsDOM.classList.remove('index-huge');
        projectsDOM.classList.add('index-small');
        projectsDOM.classList.remove('color-green');
        projectsHeaderDOM.classList.remove('color-green');
        // Array.from( projectsBoxDOM, box => box.classList.remove('on'))
        // Array.from( projectsBoxDOM, box => box.classList.add('off'))
        // projectsDOM.classList.remove('projects__grid')
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
        storyHeaderDOM.classList.add('color-rose')
        // Array.from( storyBoxDOM, box => box.classList.remove('off'))
        // Array.from( storyBoxDOM, box => box.classList.add('on'))
        
        // storyDOM.classList.add('story__grid')
    } else {
        storyDOM.classList.remove('top-move');
        storyDOM.classList.add('top');
        storyDOM.classList.remove('index-huge');
        storyDOM.classList.add('index-small');
        storyDOM.classList.remove('color-rose')
        storyHeaderDOM.classList.remove('color-rose')
        // Array.from( storyBoxDOM, box => box.classList.remove('on'))
        // Array.from( storyBoxDOM, box => box.classList.add('off'))
        // storyDOM.classList.remove('story__grid')
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
        contactHeaderDOM.classList.add('color-orange')

        // Array.from( storyBoxDOM, box => box.classList.remove('off'))
        // Array.from( storyBoxDOM, box => box.classList.add('on'))
        
        // storyDOM.classList.add('story__grid')
    } else {
        contactDOM.classList.remove('right-move');
        contactDOM.classList.add('right');
        contactDOM.classList.remove('index-huge');
        contactDOM.classList.add('index-small');
        contactDOM.classList.remove('color-orange')
        contactHeaderDOM.classList.remove('color-orange')
        // Array.from( storyBoxDOM, box => box.classList.remove('on'))
        // Array.from( storyBoxDOM, box => box.classList.add('off'))
        // storyDOM.classList.remove('story__grid')
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
    
});