let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");

burger.onclick = function () {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
};