let currentIndex = 0;

function moveCarousel(direction) {
  const images = document.querySelectorAll('.carousel-images1122 > div');
  const totalImages = images.length;

  // Calcular el nuevo índice
  if (direction >= 0 && direction < totalImages) {
    currentIndex = direction;
  }

  // Mover el carrusel a la imagen correspondiente
  const offset = -currentIndex * 100; // Moverse en función del índice actual
  document.querySelector('.carousel-images1122').style.transform = `translateX(${offset}%)`;
}
