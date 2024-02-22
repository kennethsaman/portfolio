

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const modal = document.querySelector(".modal");

// const fs = require('fs');

// HAMBURGER MENU HANDLER

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))




// MODAL IMAGE HANDLER

// function setSource (imgsrc) {
//   document.querySelector(".modal-image").src = imgsrc;
//   console.log(imgsrc + "from setSource function");
// }

// document.querySelectorAll(".item").forEach(n => n.addEventListener("click", () => {
//   img = n.getElementsByTagName("img");
//   console.log(img[0].src);
//   setSource (img[0].src);
//   modal.classList.toggle("active");
//   modal.addEventListener("click", () => {
//     modal.classList.remove("active");
//   })
// }))



