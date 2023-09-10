
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const logo = document.querySelector(".header-logo");
const infobar = document.querySelector(".infobar");
const infobarContent = document.querySelector(".infobar__content");
const infoParagraph = document.querySelectorAll(".infoParagraph");
const showButtonAll = document.querySelectorAll(
  ".offer-content__items__item-button"
);
const showInsuranceButton = document.querySelectorAll(
  ".offer-popup__item-content__text-nav__link"
);

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
  const link = document.querySelectorAll(".link");

  link.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      if (href !== null && href !== "#") {
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  smoothScroll();
  showActive();
});

showButtonAll.forEach((el) =>
  el.addEventListener("click", () => {
    id = el.id.slice(5);
    const dialog = document.getElementById(id);
    dialog.showModal();
  })
);

showInsuranceButton.forEach((el) =>
  el.addEventListener("click", () => {
    document
      .querySelectorAll(".offer-popup__item-content__text-nav__link.active")[0]
      .classList.remove("active");

    document
      .querySelectorAll(".offer-popup__item-content__text-info.open")[0]
      .classList.remove("open");

    el.classList.add("active");

    id = el.id.slice(4);

    document.getElementById(id).classList.add("open");
  })
);
