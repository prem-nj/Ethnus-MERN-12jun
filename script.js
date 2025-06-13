// script.js

const images = [
  "background1.jpg",
  "background2.jpg",
  "background3.jpg",
//   "background4.jpg"
];

let currentIndex = 0;
const body = document.body;

function setBackgroundImage(index) {
  body.style.backgroundImage = `url(${images[index]})`;
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  setBackgroundImage(currentIndex);
}, 5000);

// Initial load
setBackgroundImage(currentIndex);

// Optional: left/right buttons
const leftArrow = document.querySelectorAll('.button_arrow')[0];
const rightArrow = document.querySelectorAll('.button_arrow')[1];

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  setBackgroundImage(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  setBackgroundImage(currentIndex);
});
