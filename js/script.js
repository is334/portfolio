// regarding the teeth
const slider = document.getElementById('whitening-slider');
const afterImage = document.getElementById('after-image');
const beforeImage = document.querySelector('.teeth-before');
const percentage = document.querySelector('.percentage');

slider.addEventListener('input', function() {
  const value = this.value;
  
  // Smoothly transition between images using opacity
  afterImage.style.opacity = value / 100;
  
  // Update percentage text
  percentage.textContent = `${value}% Whitened`;
  
  // Apply additional effects to the before image
  const brightness = 100 + (value * 0.3);
  const contrast = 100 + (value * 0.2);
  beforeImage.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
  
  // Update slider background gradient
  slider.style.background = `linear-gradient(to right, 
    #e6c789 ${value}%, 
    #ffffff ${value}%
  )`;
});

//sticky navbar
//navbar in mobile responsive
// Sticky navbar
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 100);
});

// Navbar in mobile responsive
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); // Toggle the menu icon class
  navbar.classList.toggle('active'); // Correct class for navbar
};
