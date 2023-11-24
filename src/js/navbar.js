var navBar = document.querySelector(".navbar");
function navbarColor() {
    const viewportWidth = window.innerWidth;
    if (window.scrollY > 0 || viewportWidth < 992) {
        navBar.classList.add("navbar-custom-trans", "shadow");
        navBar.classList.remove("navbar-custom");
    }
    else if (window.scrollY === 0 && viewportWidth > 992) {
        navBar.classList.remove("navbar-custom-trans", "shadow");
        navBar.classList.add("navbar-custom");
    }
}

window.addEventListener('resize', function () {
    navbarColor()
});
navbarColor()