const header = document.getElementById('header');
const navBar = header.querySelector('.header__nav');
const menu = header.querySelector('.header__menu');

menu.addEventListener('click', toggleNavBar);

let isToggled = false;
function toggleNavBar(){
    isToggled = !isToggled;
    if (isToggled){
        menu.classList.add('clicked');
        navBar.classList.add('show');
    } else {
        showNavOndesktop();
    }
}

function showNavOndesktop(){
    menu.classList.remove('clicked');
    navBar.classList.remove('show');
}

window.addEventListener('resize', (e) => {
    if (e.target.innerHeight < 700){
        showNavOndesktop();
        isToggled = !isToggled;
    }
});



const scroller = document.querySelector('.testimonial__scroller');
const cards = document.querySelectorAll('.testimonial__card');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let isCliked = false;
let mouseClickStartPosition = undefined;
let scrollLeft = undefined;

document.addEventListener('mousedown', (e) => {
    mouseClickStartPosition = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
    isCliked = true;
})
document.addEventListener('mousemove', (e) => {
    if (!isCliked) return; 
    e.preventDefault();
    const mouseMovedDistance = e.pageX - mouseClickStartPosition;
    scroller.scrollLeft = scrollLeft - mouseMovedDistance;
});
document.addEventListener('mouseup', (e) => {
    isCliked = false;
});
document.addEventListener('mouseout', (e) => {
    isCliked = false;
});

let currentIndex = 0;

next.addEventListener('click', () => {
    if (currentIndex < cards.length - 1){
        currentIndex++;
        cards[currentIndex].scrollIntoView({
            behavior: 'smooth', block: 'nearest', inline: 'start' 
        });
    }
});



