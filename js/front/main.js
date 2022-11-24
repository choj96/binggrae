const header = document.querySelector(".header");
const header_main = document.querySelector(".header-main");
const btn_hamburger = document.querySelector(".header-hamburger");
const hamburger_menu = document.querySelector(".hamburger-menu");
const header_nav = document.querySelector(".header-nav");
const header_gnb = document.querySelector(".header-gnb");
const header_gnb_item = document.querySelectorAll(".header-gnb > li > a");
const header_gnb_depth2 = document.querySelectorAll(".header-gnb > li > .depth2");

// 햄버거 토글
let hamburgerToggle = false;
btn_hamburger.addEventListener("click", () => {
  if (hamburgerToggle === false) {
    hamburger_menu.classList.add("on");
    header_nav.classList.add("off");
    btn_hamburger.classList.add("hamburger-toggle");
    header_main.style.borderBottom = "none";
    hamburgerToggle = true;
  } else if (hamburgerToggle === true) {
    hamburger_menu.classList.remove("on");
    header_nav.classList.remove("off");
    btn_hamburger.classList.remove("hamburger-toggle");
    header_main.style.borderBottom = "1px solid #e7e7e7";
    hamburgerToggle = false;
  }
});

// 스크롤 시 헤더 색상
window.addEventListener("scroll", () => headerColor());

// for (i = 0; i < header_gnb_item.length; i++) {
//   header_gnb_item[i].addEventListener("mouseover", () => {
//     header.style.background = "#fff";
//     for (i = 0; i < header_gnb_item.length; i++) {
//       header_gnb_depth2[i].style.opacity = "1";
//       header_gnb_depth2[i].style.visibility = "visible";
//     }
//   });
// }
// header.addEventListener("mouseout", () => {
//   for (i = 0; i < header_gnb_item.length; i++) {
//     header_gnb_depth2[i].style.opacity = "0";
//     header_gnb_depth2[i].style.visibility = "hidden";
//   }
// });

function headerColor() {
  if (window.scrollY > 0) {
    header.style.background = "#fff";
  } else if (window.scrollY === 0) {
    header.style.background = "transparent";
  }
}
