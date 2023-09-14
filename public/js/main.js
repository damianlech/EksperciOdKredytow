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

const reviewBtn = document.getElementById("pop-reviews-popup");
const reviewsPopup = document.getElementById("reviews-popup");

const voucherBtn = document.getElementById("voucherBtn");
const voucher = document.getElementById("voucher");
const voucherWrapper = document.getElementById("side__voucher-wrapper");

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
        document
          .querySelector(href)
          .scrollIntoView({ top: 149, behavior: "smooth" });
        if (showMenu === true) {
          toggleMenu();
        }
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
  setTimeout(function () {
    voucher.showModal();
  }, 3000);
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

reviewBtn.addEventListener("click", () => {
  reviewsPopup.showModal();
});

voucherBtn.addEventListener("click", () => {
  voucher.showModal();
});

voucher.addEventListener("click", (event) => {
  voucher.close();
});

voucherWrapper.addEventListener("click", (event) => event.stopPropagation());

const slider = document.querySelectorAll(".hero-background__item");

let slideCount = 0;

function sliderRun() {
  if (slideCount < 3) {
    slider[slideCount].style.opacity = 0;
    slider[slideCount + 1].style.opacity = 1;
    slideCount++;
  } else {
    slider[slideCount].style.opacity = 0;
    slider[0].style.opacity = 1;
    slideCount = 0;
  }
}

setInterval(sliderRun, 10000);
