const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const logo = document.querySelector(".header-logo");
const infobar = document.querySelector(".infobar");
const infobarContent = document.querySelector(".infobar__content");
const infoParagraph = document.querySelectorAll(".infoParagraph");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    logo.classList.add("open");
    infobar.classList.add("open");
    infobarContent.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    infoParagraph.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    logo.classList.remove("open");
    infobar.classList.remove("open");
    infobarContent.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    infoParagraph.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

function smoothScroll() {
  const link = document.querySelectorAll(".link, .menu-nav__link");

  link.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      if (href !== null && href !== "#") {
        document
          .querySelector(href)
          .scrollIntoView({ top: 149, behavior: "smooth" });
      }
    });
  });
}

function showActive() {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".menu-nav__link");

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 500;

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (
            section.getAttribute("id") ===
            link.getAttribute("href").substring(1)
          ) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  smoothScroll();
  showActive();
});
