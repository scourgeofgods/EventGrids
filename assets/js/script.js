let nav = document.querySelector(".header__nav--links");
let burger = document.querySelector(".header__nav--hamburger");
let burgerFirstLine = document.querySelector(".line-1");
let burgerSecondLine = document.querySelector(".line-2");
let burgerThirdLine = document.querySelector(".line-3");

burger.addEventListener("click", function () {
  burgerFirstLine.classList.toggle("line-1-toggled");
  burgerSecondLine.classList.toggle("line-2-toggled");
  burgerThirdLine.classList.toggle("line-3-toggled");

  nav.classList.toggle("display-nav");
});
