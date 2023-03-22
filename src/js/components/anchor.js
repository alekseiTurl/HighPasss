/* Anchor Link */
const anchors = document.querySelectorAll(".scroll-to");
const burgerMenu = document.querySelector(".menu-wrap");
const burger = document.querySelector(".burger");

function setAnchor() {
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href");

      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      console.log(burgerMenu);
      burgerMenu.classList.remove("is-opened");
      burger.classList.remove("is-opened");
      document.body.style.overflow = "visible";
    });
  }
}
setAnchor();
