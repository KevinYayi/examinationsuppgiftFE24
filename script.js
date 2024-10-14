var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  freemode: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function navigation() {
  let navLinks = document.getElementById("listing");
  navLinks.classList.toggle("show");
}

function iconShift() {
  let icon = document.getElementById("navIcon");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");
}
