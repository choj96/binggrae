window.onload = function () {
  // 헤더 js
  {
    // 햄버거 토글
    const headerNav = document.querySelector(".header-nav");
    const btnHamburger = document.querySelector(".header-hamburger");
    const btnHamburgerMobile = document.querySelector(".hamburger-off");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    let hamburgerToggle = false;
    btnHamburger.addEventListener("click", () => {
      if (hamburgerToggle === false) {
        scrollTop();
        hamburgerMenu.classList.add("on");
        headerNav.classList.add("off");
        btnHamburger.classList.add("hamburger-toggle");
        closeDepth2();
        disableScroll();
        hamburgerToggle = true;
      } else if (hamburgerToggle === true) {
        scrollTop();
        hamburgerMenu.classList.remove("on");
        headerNav.classList.remove("off");
        btnHamburger.classList.remove("hamburger-toggle");
        enableScroll();
        hamburgerToggle = false;
      }
    });
    btnHamburgerMobile.addEventListener("click", () => {
      if (hamburgerToggle === false) {
        scrollTop();
        hamburgerMenu.classList.add("on");
        headerNav.classList.add("off");
        btnHamburger.classList.add("hamburger-toggle");
        closeDepth2();
        disableScroll();
        hamburgerToggle = true;
      } else if (hamburgerToggle === true) {
        scrollTop();
        hamburgerMenu.classList.remove("on");
        headerNav.classList.remove("off");
        btnHamburger.classList.remove("hamburger-toggle");
        enableScroll();
        hamburgerToggle = false;
      }
    });

    // 모바일 햄버거 메뉴
    const hamburgerGnbItem = document.querySelectorAll(
      ".hamburger-gnb > li > a"
    );
    const hamburgerGnbDepth = document.querySelectorAll(
      ".hamburger-gnb > li > .depth2"
    );
    let hamburgerMobileToggle = [];
    for (let i = 0; i < hamburgerGnbItem.length; i++) {
      hamburgerMobileToggle.push(false);
    }
    for (let i = 0; i < hamburgerGnbItem.length; i++) {
      hamburgerGnbDepth[i].classList.remove("on");
      hamburgerGnbItem[i].addEventListener("click", () => {
        hamburgerGnbDepth.forEach((element) => element.classList.remove("on"));
        hamburgerMobileToggle.forEach((element) => (element = false));
        if (hamburgerMobileToggle[i] === false) {
          hamburgerGnbDepth[i].classList.add("on");
          hamburgerMobileToggle[i] = true;
        } else if (hamburgerMobileToggle[i] === true) {
          hamburgerGnbDepth[i].classList.remove("on");
          hamburgerMobileToggle[i] = false;
        }
      });
    }

    // 언어 토글
    const btnLang = document.querySelector(".lang-button");
    const listLang = document.querySelector(".lang-list");
    let langToggle = false;
    btnLang.addEventListener("click", () => {
      if (langToggle === false) {
        listLang.classList.add("on");
        langToggle = true;
      } else if (langToggle === true) {
        listLang.classList.remove("on");
        langToggle = false;
      }
    });

    // 헤더 네비게이션 온오프
    const header = document.querySelector(".header");
    const headerGnb = document.querySelector(".header-gnb");
    const headerDepth = document.querySelectorAll(".header-gnb > li > .depth2");
    const headerMain = document.querySelector(".header-main");
    const headerBg = document.querySelector(".header-bg");
    headerGnb.addEventListener("mouseover", () => {
      headerBg.classList.add("on");
      headerMain.classList.add("lineon");
      for (let i = 0; i < headerDepth.length; i++) {
        headerDepth[i].classList.add("on");
      }
    });
    header.addEventListener("mouseout", () => {
      headerBg.addEventListener("mouseout", () => {
        closeDepth2();
      });
    });

    // 스크롤 시 헤더 색상
    window.addEventListener("scroll", () => headerColor());

    // 네비 뎁스 닫기
    function closeDepth2() {
      headerBg.classList.remove("on");
      for (let i = 0; i < headerDepth.length; i++) {
        headerDepth[i].classList.remove("on");
      }
      headerColor();
    }

    // 스크롤 헤더 색상
    function headerColor() {
      let scrollPos = document.documentElement.scrollTop;
      if (scrollPos > 0) {
        header.classList.add("bgon");
        headerMain.classList.add("lineon");
      } else if (scrollPos === 0) {
        header.classList.remove("bgon");
        headerMain.classList.remove("lineon");
      }
    }
    headerColor();
  }

  // 프로덕트 js
  {
    const swProductTop = new Swiper(".pt-slide", {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        prevEl: ".product .prev-arrow",
        nextEl: ".product .next-arrow",
      },
    });
    const swProductBottm = new Swiper(".pb-slide", {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        prevEl: ".product .b-prev-arrow",
        nextEl: ".product .b-next-arrow",
      },
    });
  }

  //고정 버튼 js
  {
    //top 버튼 기능
    const topBtn = document.getElementById("top-btn");
    topBtn.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // 화살표 이미지 회전
    const topBtnImg = document.getElementById("top-btn-img");
    window.addEventListener("scroll", function (scTop) {
      scTop = document.documentElement.scrollTop;
      if (scTop > 0) {
        topBtnImg.classList.add("up");
      } else {
        topBtnImg.classList.remove("up");
      }
    });
  }

  // 공통 js
  {
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
  }
};
