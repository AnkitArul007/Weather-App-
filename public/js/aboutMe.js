const navListSelector = document.getElementsByClassName('nav-li-selector');
let targetSectionNavigator
var interval;
function sectionScroll(targetSection){
    if (targetSectionNavigator.getBoundingClientRect().top <= 0){
        clearInterval(interval)
        return;
    }
    window.scrollBy(0, 50);
}

for (let i=0; i<navListSelector.length; i++){
    navListSelector[i].addEventListener('click', (event)=>{
        event.preventDefault();
        let targetSectionID = navListSelector[i].textContent.trim().toLowerCase();
        targetSectionNavigator = document.getElementById(targetSectionID);
        interval = setInterval(sectionScroll, 10, targetSectionNavigator);
    });
}

//Working For the skill bar animation::

const skillSec = document.querySelectorAll('.animatedBars');
const skillCont = document.getElementById('skills');
window.addEventListener('scroll', scrollPage);
let animationFlag = false;

function initialBars(){
    for (let i=0; i<skillSec.length; i++){
        skillSec[i].style.width = 0 + '%';
    }
}



function fillBars(){
    for (let i=0; i<=skillSec.length; i++){
        let targetWidth = skillSec[i].getAttribute('target-width');
        let currentWidth = 0;
        let interval = setInterval(()=>{
            if (currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            skillSec[i].style.width = targetWidth + '%';
        }, 50);
    }
}

function scrollPage(){
    let skillContCordinates = skillCont.getBoundingClientRect();
    if (!animationFlag && skillContCordinates.top <= window.innerHeight){
        animationFlag = true;
        
        fillBars();
    }else if (skillContCordinates.top > window.innerHeight){
        animationFlag = false;
        initialBars();
    }
}

