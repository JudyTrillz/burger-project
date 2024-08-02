/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu");
const navClose = document.getElementById("nav__close");
const navToggle = document.getElementById("nav__toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    const navMenu = document.getElementById("nav__menu");
    navMenu.classList.remove("show-menu");
  })
);
/*=============== ADD SHADOW HEADER ===============*/

const headerAction = () => {
  const header = document.getElementById("header");
  window.scrollY > 50
    ? header.classList.add("bg__header")
    : header.classList.remove("bg__header");
};

window.addEventListener("scroll", headerAction);
/*=============== SHOW SCROLL UP ===============*/
const scrollBtn = document.getElementById("scroll-up");
const scrollAction = () => {
  window.scrollY > 300
    ? scrollBtn.classList.add("show-scroll")
    : scrollBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollAction);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data, .footer");
sr.reveal(".home__dish", { delay: 500, distance: "100px", origin: "bottom" });
sr.reveal(".home__burger", { delay: 1500, distance: "100px", duration: 1500 });
sr.reveal(".home__ingredient", { delay: 1600, interval: 100 });
sr.reveal(
  ".recipe__image, .delivery__image, .contact__image, .contact__sticker-2",
  {
    origin: "left",
  }
);
sr.reveal(
  ".recipe__data, .delivery__data, .contact__data, .contact__sticker-1",
  {
    origin: "right",
  }
);
sr.reveal(".popular__card", { interval: 100 });
