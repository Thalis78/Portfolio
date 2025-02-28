document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carrossel-img');
    const prevButton = document.querySelector('.btn-nav.prev');
    const nextButton = document.querySelector('.btn-nav.next');
    const imageCounter = document.querySelector('.contador');
    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) {
        currentIndex = images.length - 1;
      } else if (index >= images.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;

      images.forEach((img, i) => {
        img.style.display = i === currentIndex ? 'block' : 'none';
      });
    }

    function nextImage() {
      showImage(currentIndex + 1);
    }

    function prevImage() {
      showImage(currentIndex - 1);
    }

    nextButton.addEventListener('click', nextImage);

    prevButton.addEventListener('click', prevImage);

    showImage(currentIndex);
});
