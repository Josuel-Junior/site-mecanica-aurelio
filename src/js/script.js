const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementsByClassName('loader');
  preloader[0].style.display = "none";
})


const target = document.querySelectorAll(".service-box");
const targetSection = document.querySelector(".services-container");

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
  target.forEach(function (element) {
    if ((windowTop) > targetSection.offsetTop) {
      element.classList.replace("old-in-left", "in-left");
    } else {
      element.classList.replace("in-left", "old-in-left");
    }
  })
}

animeScroll();
if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
    navbarColor()
  }, 100));
}

ScrollReveal({ reset: false });
ScrollReveal().reveal('.box-values', { duration: 2500 });
const btnBack = document.getElementById("btnTop")
btnBack.addEventListener("click", function () {
  window.scroll(0, 0)
})

document.addEventListener('scroll', btnHide)

function btnHide() {
  window.scrollY > 400 ? btnBack.classList.add('on') : btnBack.classList.remove('on')

}

