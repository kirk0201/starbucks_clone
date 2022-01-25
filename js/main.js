const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// lodash를 이용하여 자체부하를 만들어 함수 남용 방지
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // 애니메이션 라이브러리 gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
      //   badgeEl.style.display = "none";
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //   버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0, // 이동할 위치
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fade, index) => {
  gsap.to(fade, 1, {
    // 0.7 1.4 2.1 2.7
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// Notice Swiper
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// Promotion Swiper
new Swiper(".promotion .swiper", {
  //   direction: "horizontal", 기본값이므로 생략 가능
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보임
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// AWARDS
new Swiper(".awards .swiper", {
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// Toggle-Promotion
const toggleEl = document.querySelector(".notice .toggle-promotion");
const promotionEl = document.querySelector(".notice .promotion");
let isHidePromotion = false;
toggleEl.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// Floating

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// gsap easing http://greensock.com

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축 이동
    repeat: -1, // 무한반복
    yoyo: true, // 제자리 이동
    ease: Power1.easeInOut, // 부드러운 효과를 위한 설정 http://greensock.com 참조
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
