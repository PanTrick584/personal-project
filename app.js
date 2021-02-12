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
const reloadBackgroundsDOM = document.querySelector('#reloadBackgrounds');
const brokenCellDOM = document.querySelector('#brokenCell');
const brokenCellHDOM = document.querySelector('#brokenCellH');

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
const generalInfo = 'kliknij w kafelek aby dowiedzieć się więcej...';
const pizzaBuilderInfo = `Pizza Builder to aplikacja, w której możesz stworzyć swoją własną pizzę wybierając spośród dostępnych składników. Aplikacja wyświetla w sposób poglądowy stworzoną pizzę oraz dynamicznie podlicza jej koszt. Link w kafelku.`;
const projectTrophyInfo = 'Jest to próba stworzenia webowej książki fotograficznej. W realizowanym tu projekcie opowiadam o moim dziadku, jak i o fenomenie trofeum. Ze względu na specyficzne wymagania technologiczne przy takim projekcie ciągle zostaje on w budowie. Link w kafelku.';
const aboutMeInfo = [`
        Pracowałem jeszcze w czasach szkoły średniej, głównie przez wakacje. Po jej ukończeniu wyjechałem do Krakowa, gdzie zamieszkałem, pracowałem i przygotowywałem się do egzaminów wstępnych na Akademię Sztuk Pięknych.`,
        `Udało mi się za pierwszy podejściem i pomimo dziennego trybu studiów kontynuowałem pracę.`,
        `Na trzecim roku podczas pilnowania wystawy końcoworocznej zauważyłem nie bez zawodu, iż odbiór prac studentów jest niewielki, żeby nie powiedzieć żaden.`,
        `Zainteresowało mnie, czy część rzeczy mogła by zostać przeniesiona do inetrnetu, żeby zwiększyć dostęp do prac.`,
        `Nie miałem wiele wolnego czasu, lecz gdy go znalazłem, uczyłem się programowani, które okazało się niesamowicie przyjemne.`
];
const nameImgs = `<div class="name-container">
                    <div class="name-container-box" ><span class="letter-white">d</span>Użo<img src="./img/img-books.png" /></div>
                    <div class="name-container-box" >czĘ<img src="./img/img-brush.png" />s<span class="letter-white">t</span>O</div>
                    <div class="name-container-box" ><img src="./img/img-foot.png" /><span class="letter-white">l</span>aTem</div>
                    <div class="name-container-box" >pó<img src="./img/img-movie.png" />źnO</div>
                    <div class="name-container-box" ><span class="letter-white">S</span>łuCh<img src="./img/img-music.png" />a<span class="letter-white">m</span></div>
                    <div class="name-container-box" >n<span class="letter-white">e</span>rD<img src="./img/img-pc.png" /></div>
                    <div class="name-container-box" >c<span class="letter-white">za</span><img src="./img/img-photo.png" />sEm</div>
                    <div class="name-container-box" >wCi<span class="letter-white">n</span>am<img src="./img/img-rice.png" /></div>
                </div>`;
const contactInfo = `<div class="contact-info" >Kliknij który wolisz ;)</div>`;

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
let brokenCellCounter = 0;
brokenCellDOM.addEventListener('click', () => {
    brokenCellCounter++;
    if(brokenCellCounter === 3) {
        brokenCellHDOM.innerHTML = 'Przestań mnie klikać!'
    }
})
reloadBackgroundsDOM.addEventListener('click', () => {
    setTimeout(() => changeBackground(), 200)
    setTimeout(() => changeBackground(), 500)
    setTimeout(() => brokenCellHDOM.innerHTML = 'ten kafelek nie działa', 600)
    brokenCellCounter = 0;
    setTimeout(() => changeBackground(), 800);
    nameBack();
    storyBack();
    contactBack();
    projectTrophyBack();
    projectPizzaBack();
    setGeneralInfo();
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
const setTextDecoration = ( string ) => {
    let letters = [...string];
    if(letters.length > 80) {
        for(let i = 0; i < 10; i++) {
            let newLetters = letters;
            let letterNum = Math.floor(Math.random()*letters.length)
            let letter = letters[letterNum];
            let letterShell = `<span class="letter">${letter}</span>`;
            letters[letterNum] = letterShell;
            letters = newLetters
        }
        return letters.join('');
    }
    if(letters.length <= 80 && letters.length >= 10 ) {
        for(let i = 0; i < 4; i++) {
            let newLetters = letters;
            let letterNum = Math.floor(Math.random()*letters.length)
            let letter = letters[letterNum];
            let letterShell = `<span class="letter">${letter}</span>`;
            letters[letterNum] = letterShell;
            letters = newLetters
        }
        return letters.join('');
    }
    if(letters.length < 10) {
        let newLetters = letters;
            let letterNum = Math.floor(Math.random()*letters.length)
            let letter = letters[letterNum];
            let letterShell = `<span class="letter">${letter}</span>`;
            letters[letterNum] = letterShell;
            letters = newLetters
    }
}
const setGeneralInfo = () => {
    console.log(generalInfo)
   return setTimeout(() => headerContentDOM.innerHTML = `<div class="header-content-general-info">${setTextDecoration(generalInfo)}</div>`, 1000);
}
const setAboutMeInfo = () => {
    let num = 0;
    headerContentDOM.classList.remove('header-content-normal-display')
    headerContentDOM.classList.add('header-content-story-display')
    headerContentDOM.innerHTML = `<div class="story-info"><p>${setTextDecoration(aboutMeInfo[num])}</p></div>
                                    <button class="story-btn">
                                        <p>d</p><p>A</p><p>l</p><p>e</p><p>j</p>
                                    </button>`
    const aboutMeBtnDOM = document.querySelector('.story-btn');
    aboutMeBtnDOM.addEventListener('click', () => {
        num++;
        num < aboutMeInfo.length ? document.querySelector('.story-info').innerHTML = `<p>${setTextDecoration(aboutMeInfo[num])}</p>` : '';
        num === aboutMeInfo.length ? aboutMeBtnDOM.style.visibility = 'hidden' : '';
    })
}
const resetAboutMeInfo = () => {
    headerContentDOM.classList.remove('header-content-story-display')
    headerContentDOM.classList.add('header-content-normal-display')
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
    if(nameDOM.classList.contains('left')) {
        storyBack();
        contactBack();
        projectPizzaBack();
        projectTrophyBack()
        nameMove();
        resetAboutMeInfo()
        headerContentDOM.innerHTML = nameImgs;
    } else {
        nameBack();
        setGeneralInfo();
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
        resetAboutMeInfo()
        headerContentDOM.innerHTML = `<div class="header-content-trophy">${setTextDecoration(projectTrophyInfo)}</div>`
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
        resetAboutMeInfo()
        headerContentDOM.innerHTML = `<div class="header-content-pizza-builder">${setTextDecoration(pizzaBuilderInfo)}</div>` ;
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
        setAboutMeInfo();
    } else {
        resetAboutMeInfo();
        setGeneralInfo();
        storyBack();
    }
} )
// SECTION STORY
contactDOM.addEventListener( 'click', () => {
    if(contactDOM.classList.contains('right')) {
        projectPizzaBack();
        projectTrophyBack();
        storyBack();
        nameBack();
        resetAboutMeInfo()
        contactMove();
        headerContentDOM.innerHTML = contactInfo;
    } else {
        contactBack();
        setGeneralInfo();
    }
} )

// WINDOW ONLOAD
addEventListener("DOMContentLoaded", () => {
    changeBackground();
    setGeneralInfo();
});

