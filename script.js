/*var swiper = new Swiper(".mySwiper", {
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
}); */

//-----------------------------------------------------------------------------------------------

//Function för hamburgar meny
function navigation() {
  let navLinks = document.getElementById("listing");
  navLinks.classList.toggle("show");
}

function iconShift() {
  let icon = document.getElementById("navIcon");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");
}

//----------------------------------------------------------------------------------------------

// Function för bildgalleri
document.addEventListener("DOMContentLoaded", () => {
  const isMenuPage = document.body.id === "menu-page";
  if (!isMenuPage) return;

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll(".lightbox-image");
  let currentImageIndex = -1; 

  const leftArrow = document.createElement("div");
  leftArrow.innerHTML = "&#10094;"; 
  leftArrow.classList.add("arrow", "left-arrow");

  const rightArrow = document.createElement("div");
  rightArrow.innerHTML = "&#10095;"; 
  rightArrow.classList.add("arrow", "right-arrow");

  lightbox.appendChild(leftArrow);
  lightbox.appendChild(rightArrow);

  function showImage(index) {
    if (index < 0) {
      index = images.length - 1; 
    } else if (index >= images.length) {
      index = 0; 
    }

    currentImageIndex = index;
    const img = document.createElement("img");
    img.src = images[currentImageIndex].src;

    lightbox.innerHTML = "";
    lightbox.appendChild(leftArrow);
    lightbox.appendChild(rightArrow);
    lightbox.appendChild(img);
  }

  images.forEach((image, index) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      showImage(index);
    });
  });

  leftArrow.addEventListener("click", (e) => {
    showImage(currentImageIndex - 1);
  });

  rightArrow.addEventListener("click", (e) => {
    showImage(currentImageIndex + 1);
  });

  // Close lightbox when clicked outside of the image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
});


//-----------------------------------------------------------------------------------------------

// Funktion för tack-meddalande för "submit" knappen
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("applicationForm");
  const formContainer = document.getElementById("formContainer");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

  
    formContainer.style.display = "none";

   
    thankYouMessage.style.position = "static"; 
  });
});
