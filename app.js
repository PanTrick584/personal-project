// DOM
// HEADER
const headerContentDOM = document.querySelector('#headerContent');
// SECTION NAME
const nameDOM = document.querySelector('#name')
const nameHeaderDOM = document.querySelector("#nameHeader");
// SECTION STORY
const storyDOM = document.querySelector('#story');
const storyHeaderDOM = document.querySelector('#storyHeader');
// SECTION PROJECTS
const projectsDOM = document.querySelector('#projects')
const projectsBoxDOM = document.querySelectorAll('.projects__box');
const projectTrophyDOM = document.querySelector('#projectTrophy')
const pizzaBuilderDOM = document.querySelector('#pizzaBuilder');
// SECTION CONTACT
const contactDOM = document.querySelector('#contact');
const contactHeaderDOM = document.querySelector('#contactHeader');
const contactEmailDOM = document.querySelector('#contactEmail');
const contactPhoneDOM = document.querySelector('#contactPhone');
const contactLinkedInDOM = document.querySelector('#contactLinkedIn')
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
    '#cb7aa7',
    '#ffec7d',
    '#ffba4c',
    '#c88a17',
    '#b38dff',
    '#19fbff',
    '#75ffff',
    '#00c7cc'
];

// HEADER CONTENT INFOS
const generalInfo = '<div class="header-content-general-info">kliknij w kafelek aby dowiedzieć się więcej</div>';
const pizzaBuilderInfo = `<div class="header-content-pizza-builder">Pizza Builder to aplikacja, w której możesz stworzyć swoją własną pizzę wybierając spośród dostępnych składników. Aplikacja wyświetla w sposób poglądowy stworzoną pizzę oraz dynamicznie podlicza jej koszt. Link w kafelku.</div>`;
const projectTrophyInfo = '<div class="header-content-trophy">Jest to próba stworzenia webowej książki fotograficznej. W realizowanym tu projekcie opowiadam o moim dziadku, jak i o fenomenie trofeum. Ze względu na specyficzne wymagania technologiczne przy takim projekcie ciągle zostaje on w budowie. Link w kafelku.</div>'


const changeBackground = () => {
    colorsArrPrev = colorsArr;
    if(colorsArr.length !== 0) {
        fillDOM.forEach( fill => {
            let color = colorsArr[Math.floor(Math.random()*colorsArr.length)]
            fill.style.backgroundColor = color;
            let newColorsArr = colorsArr.filter( col => col !== color );
            colorsArr = newColorsArr
        })
    }
    colorsArr = colorsArrPrev;
}
// CONTAINER CONTENT CLICK EVENTS
reloadBackgroundsDOM.addEventListener('click', () => {
    setTimeout(() => changeBackground(), 200)
    setTimeout(() => changeBackground(), 500)
    setTimeout(() => changeBackground(), 800)
} )
contactEmailDOM.addEventListener('click', () => {
    headerContentDOM.innerHTML = `<div class="contact__content-li">chodacki.pc@gmail.com</div>`
})
contactPhoneDOM.addEventListener('click', () => {
    headerContentDOM.innerHTML = `<div class="contact__content-li">692 — 863 — 757</div>`
})
contactLinkedInDOM.addEventListener('click', () => {
    headerContentDOM.innerHTML = `<div class="contact__content-li"><a href="https://www.linkedin.com/in/patryk-chodacki-6465361a7/">https://www. linkedin. com/in/patryk-chodacki-6465361a7/</a></div>`
})
const setGeneralInfo = () => {
    setTimeout(() => headerContentDOM.innerHTML = generalInfo, 1200);
}
const nameMove = () => {
    nameDOM.classList.remove('left');
    nameDOM.classList.add('left-move');
    nameDOM.classList.remove('index-small');
    nameDOM.classList.add('index-huge');
    nameDOM.classList.add('color-blue');
    nameHeaderDOM.classList.add('color-blue');
}
const nameBack = () => {
    nameDOM.classList.remove('left-move');
    nameDOM.classList.add('left');
    nameDOM.classList.remove('index-huge');
    nameDOM.classList.add('index-small');
    nameDOM.classList.remove('color-blue');
    nameHeaderDOM.classList.remove('color-blue');
}
const projectTrophyMove = () => {
    projectTrophyDOM.classList.remove('bottom');
    projectTrophyDOM.classList.add('bottom-move');
    projectTrophyDOM.classList.remove('index-small');
    projectTrophyDOM.classList.add('index-huge');
    projectTrophyDOM.classList.add('color-green');
}
const projectTrophyBack = () => {
    projectTrophyDOM.classList.remove('bottom-move');
    projectTrophyDOM.classList.add('bottom');
    projectTrophyDOM.classList.remove('index-huge');
    projectTrophyDOM.classList.add('index-small');
    projectTrophyDOM.classList.remove('color-green');
}
const projectPizzaMove = () => {
    pizzaBuilderDOM.classList.remove('right');
    pizzaBuilderDOM.classList.add('right-move');
    pizzaBuilderDOM.classList.remove('index-small');
    pizzaBuilderDOM.classList.add('index-huge');
    pizzaBuilderDOM.classList.add('color-green');
}
const projectPizzaBack = () => {
    pizzaBuilderDOM.classList.remove('right-move');
    pizzaBuilderDOM.classList.add('right');
    pizzaBuilderDOM.classList.remove('index-huge');
    pizzaBuilderDOM.classList.add('index-small');
    pizzaBuilderDOM.classList.remove('color-green');
}
const storyMove = () => {
    storyDOM.classList.remove('top');
    storyDOM.classList.add('top-move');
    storyDOM.classList.remove('index-small');
    storyDOM.classList.add('index-huge')
    storyDOM.classList.add('color-rose')
    storyHeaderDOM.classList.add('color-rose');
}
const storyBack = () => {
    storyDOM.classList.remove('top-move');
    storyDOM.classList.add('top');
    storyDOM.classList.remove('index-huge');
    storyDOM.classList.add('index-small');
    storyDOM.classList.remove('color-rose')
    storyHeaderDOM.classList.remove('color-rose');
}
const contactMove = () => {
    contactDOM.classList.remove('right');
    contactDOM.classList.add('right-move');
    contactDOM.classList.remove('index-small');
    contactDOM.classList.add('index-huge')
    contactDOM.classList.add('color-orange')
    contactHeaderDOM.classList.add('color-orange');
};
const contactBack = () => {
    contactDOM.classList.remove('right-move');
    contactDOM.classList.add('right');
    contactDOM.classList.remove('index-huge');
    contactDOM.classList.add('index-small');
    contactDOM.classList.remove('color-orange')
    contactHeaderDOM.classList.remove('color-orange');
}

// EVENTS
// SECTION NAME
nameDOM.addEventListener( 'click', () => {
    console.log(nameDOM.style.left)
    if(nameDOM.classList.contains('left')) {
        storyBack();
        contactBack();
        projectPizzaBack();
        projectTrophyBack()
        nameMove();
        headerContentDOM.innerHTML = '';
    } else {
        nameBack();
    }
} )
// SECTION PROJECTS
projectTrophyDOM.addEventListener( 'click', () => {
    if(projectTrophyDOM.classList.contains('bottom')) {
        storyBack();
        nameBack();
        contactBack();
        projectPizzaBack();
        projectTrophyMove();
        headerContentDOM.innerHTML = projectTrophyInfo;
    } else {
        projectTrophyBack();
        setGeneralInfo();
    }
} )
pizzaBuilderDOM.addEventListener( 'click', () => {
    if(pizzaBuilderDOM.classList.contains('right')) {
        storyBack();
        nameBack();
        contactBack();
        projectTrophyBack();
        projectPizzaMove();
        headerContentDOM.innerHTML = pizzaBuilderInfo;
    } else {
        projectPizzaBack();
        setGeneralInfo();
    }
} )
// SECTION STORY
storyDOM.addEventListener( 'click', () => {
    if(storyDOM.classList.contains('top')) {
        projectTrophyBack();
        projectPizzaBack();
        nameBack();
        contactBack();
        storyMove();
        headerContentDOM.innerHTML = '';
    } else {
        storyBack();
        setGeneralInfo();
    }
} )
// SECTION STORY
contactDOM.addEventListener( 'click', () => {
    if(contactDOM.classList.contains('right')) {
        projectPizzaBack();
        projectTrophyBack();
        storyBack();
        nameBack();
        contactMove();
        headerContentDOM.innerHTML = '';
    } else {
        contactBack();
        setGeneralInfo();
    }
} )

// WINDOW ONLOAD
addEventListener("DOMContentLoaded", () => {
    changeBackground();
});

