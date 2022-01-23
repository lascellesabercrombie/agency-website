/* Responsive menu */

let navMenu = document.querySelector(".menu");
let hamburgerIcon = document.querySelector(".menu-icon");
let menuItems = document.querySelectorAll("li");

function responsiveMenu() {
    hamburgerIcon.classList.add("active");
    navMenu.classList.add("active");
}

function closeMenu() {
    hamburgerIcon.classList.remove("active");
    navMenu.classList.remove("active");
}


hamburgerIcon.addEventListener("click", responsiveMenu);
menuItems.forEach(item => item.addEventListener("click", closeMenu));