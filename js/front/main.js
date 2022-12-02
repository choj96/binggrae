window.onload = () => {
  const header = document.querySelector(".header");
  const header_main = document.querySelector(".header-main");
  const header_nav = document.querySelector(".header-nav");
  const header_gnb = document.querySelector(".header-gnb");
  const header_depth = document.querySelectorAll(".header-gnb > li > .depth2");
  const header_bg = document.querySelector(".header-bg");
  const btn_hamburger = document.querySelector(".header-hamburger");
  const btn_hamburger_mobile = document.querySelector(".hamburger-off");
  const hamburger_menu = document.querySelector(".hamburger-menu");
  const btn_lang = document.querySelector(".lang-button");
  const lang_list = document.querySelector(".lang-list");
  const hamburger_gnb_item = document.querySelectorAll(".hamburger-gnb > li > a");
  const hamburger_gnb_depth2 = document.querySelectorAll(".hamburger-gnb > li > .depth2");

  let hamburgerMobileToggle = [];
  for (i = 0; i < hamburger_gnb_item.length; i++) {
    hamburgerMobileToggle.push(false);
  }

  for (let i = 0; i < hamburger_gnb_item.length; i++) {
    hamburger_gnb_depth2[i].classList.remove("on");
    hamburger_gnb_item[i].addEventListener("click", () => {
      hamburger_gnb_depth2.forEach((element) => element.classList.remove("on"));
      hamburgerMobileToggle.forEach((element) => (element = false));
      if (hamburgerMobileToggle[i] === false) {
        hamburger_gnb_depth2[i].classList.add("on");
        hamburgerMobileToggle[i] = true;
      } else if (hamburgerMobileToggle[i] === true) {
        hamburger_gnb_depth2[i].classList.remove("on");
        hamburgerMobileToggle[i] = false;
      }
    });
  }

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

  btn_hamburger_mobile.addEventListener("click", () => {
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

  //top 버튼 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    console.log(event);
    console.log(this.tagName);
    if (this.tagName === "A") {
      event.preventDefault();
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 화살표 이미지 회전
  function scrollRotate() {
    const topBtnImg = document.getElementById("top-btn-img");
    topBtnImg.classList.add("up");
    // 클래스를 추가하여 스크롤시 지속회전되는것 방지
  }
  window.addEventListener("scroll", scrollRotate);

  //top 도달시 화살표 이미지 회전 초기화
};
