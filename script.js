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


/* Tagline slideshow */

let slideImages = document.querySelectorAll(".slideshow");

let slideIndex = 0;

function taglineSlider() {
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slideImages.length) {
        slideIndex = 1;
    }

    slideImages[slideIndex - 1].style.display = "block";

    setTimeout(taglineSlider, 8000);
}

taglineSlider();