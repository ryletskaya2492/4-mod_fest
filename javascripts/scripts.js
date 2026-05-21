let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let bask = document.querySelector(".bask");

burger.onclick = function () {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  bask.classList.toggle("hide");
};