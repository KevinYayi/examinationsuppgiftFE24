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

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll('img');
  let currentImageIndex = -1; // To track the current image

  // Create navigation arrows
  const leftArrow = document.createElement('div');
  leftArrow.innerHTML = '&#10094;'; // Left arrow character
  leftArrow.classList.add('arrow', 'left-arrow');
  
  const rightArrow = document.createElement('div');
  rightArrow.innerHTML = '&#10095;'; // Right arrow character
  rightArrow.classList.add('arrow', 'right-arrow');

  lightbox.appendChild(leftArrow);
  lightbox.appendChild(rightArrow);

  // Function to show the image based on index
  function showImage(index) {
    if (index < 0) {
      index = images.length - 1; // Wrap to last image
    } else if (index >= images.length) {
      index = 0; // Wrap to first image
    }
    
    currentImageIndex = index;

    // Clear the lightbox content before adding the new image
    const img = document.createElement('img');
    img.src = images[currentImageIndex].src;
    
    lightbox.innerHTML = ''; // Clear everything first
    lightbox.appendChild(leftArrow);
    lightbox.appendChild(rightArrow);
    lightbox.appendChild(img);
  }

  // Event listener for image clicks
  images.forEach((image, index) => {
    image.addEventListener('click', e => {
      lightbox.classList.add('active');
      showImage(index); // Display clicked image
    });
  });

  // Event listeners for the arrows
  leftArrow.addEventListener('click', e => {
    showImage(currentImageIndex - 1); // Show previous image
  });

  rightArrow.addEventListener('click', e => {
    showImage(currentImageIndex + 1); // Show next image
  });

  // Close lightbox when clicked outside of the image
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return; // Prevent closing when clicking on the image itself
    lightbox.classList.remove('active');
  });
});
