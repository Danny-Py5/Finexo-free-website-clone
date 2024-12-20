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
