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
});
