const header = document.querySelector(".header");
const header_main = document.querySelector(".header-main");
const header_nav = document.querySelector(".header-nav");
const header_gnb = document.querySelector(".header-gnb");
const header_depth = document.querySelectorAll(".header-gnb > li > .depth2");
const header_bg = document.querySelector(".header-bg");
const btn_hamburger = document.querySelector(".header-hamburger");
const hamburger_menu = document.querySelector(".hamburger-menu");
const btn_lang = document.querySelector(".lang-button");
const lang_list = document.querySelector(".lang-list");

// 햄버거 토글
let hamburgerToggle = false;
btn_hamburger.addEventListener("click", () => {
  if (hamburgerToggle === false) {
    scrollTop();
    hamburger_menu.classList.add("on");
    header_nav.classList.add("off");
    btn_hamburger.classList.add("hamburger-toggle");
    closeDepth2();
    disableScroll();
    hamburgerToggle = true;
  } else if (hamburgerToggle === true) {
    scrollTop();
    hamburger_menu.classList.remove("on");
    header_nav.classList.remove("off");
    btn_hamburger.classList.remove("hamburger-toggle");
    enableScroll();
    hamburgerToggle = false;
  }
});

// 언어 토글
let langToggle = false;
btn_lang.addEventListener("click", () => {
  if (langToggle === false) {
    lang_list.classList.add("lang-list-on");
    langToggle = true;
  } else if (langToggle === true) {
    lang_list.classList.remove("lang-list-on");
    langToggle = false;
  }
});

// 스크롤 시 헤더 색상
window.addEventListener("scroll", () => headerColor());

// 헤더 네비게이션 온오프
header_gnb.addEventListener("mouseover", () => {
  header_bg.classList.add("header-bg-open");
  header_main.style.borderBottom = "1px solid #e7e7e7";
  for (i = 0; i < header_depth.length; i++) {
    header_depth[i].classList.add("depth2-on");
  }
});
header.addEventListener("mouseout", () => {
  header_bg.addEventListener("mouseout", () => {
    closeDepth2();
  });
});

// 헤더 색상
function headerColor() {
  if (window.scrollY > 0) {
    header.style.background = "#fff";
    header_main.style.borderBottom = "1px solid #e7e7e7";
  } else if (window.scrollY === 0) {
    header.style.background = "transparent";
    header_main.style.borderBottom = "none";
  }
}

// 네비 뎁스 닫기
function closeDepth2() {
  header_bg.classList.remove("header-bg-open");
  for (i = 0; i < header_depth.length; i++) {
    header_depth[i].classList.remove("depth2-on");
  }
  headerColor();
}

// 최상단 이동
function scrollTop() {
  window.scrollTo(0, 0);
}

// 스크롤 활성 비활성화
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "visible";
}
