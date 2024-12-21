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
let currentIndex = 0;

// Dragging Logic
scroller.addEventListener('mousedown', (e) => {
    mouseClickStartPosition = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
    isCliked = true;
    scroller.style.cursor = 'grabbing'; // Add visual feedback
});

scroller.addEventListener('mousemove', (e) => {
    if (!isCliked) return;
    e.preventDefault();
    const mouseMovedDistance = e.pageX - mouseClickStartPosition;
    scroller.scrollLeft = scrollLeft - mouseMovedDistance;
});

scroller.addEventListener('mouseup', () => {
    isCliked = false;
    scroller.style.cursor = 'grab';
});

scroller.addEventListener('mouseout', () => {
    isCliked = false;
    scroller.style.cursor = 'grab';
});

// Button Navigation Logic
next.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        scrollToCard(currentIndex);
    }else if (currentIndex == cards.length - 1){
        currentIndex = 0;
        scrollToCard(currentIndex);
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToCard(currentIndex);
    }else if (currentIndex == 0){
        currentIndex++;
        scrollToCard(currentIndex);
    }
});

function scrollToCard(index) {
    const card = cards[index];
    const cardOffset = card.offsetLeft - scroller.offsetLeft;
    scroller.scrollTo({
        left: cardOffset,
        behavior: 'smooth',
    });
};

document.querySelectorAll('.no-select').forEach(elem => {
    elem.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevents text selection
    });  
})
