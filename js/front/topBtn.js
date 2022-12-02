window.onload = function () {
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
