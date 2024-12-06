

let currentSlide = 0;
const slides = document.querySelectorAll('.imagenroter-item3');
const track = document.querySelector('.imagenroter-track6');

setInterval(() => {
  currentSlide = (currentSlide + 1 ) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 50 / slides.length}%)`;
}, 2000);

