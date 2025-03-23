document.addEventListener("DOMContentLoaded", function () {
  const carrossel1 = document.querySelector("#carrossel1");
  const images1 = carrossel1.querySelectorAll(".carrossel-img");
  const prevButton1 = carrossel1.querySelector(".btn-nav.prev");
  const nextButton1 = carrossel1.querySelector(".btn-nav.next");
  const imageCounter1 = carrossel1.querySelector(".contador");
  let currentIndex1 = 0;

  function showImage1(index) {
    if (index < 0) {
      currentIndex1 = images1.length - 1;
    } else if (index >= images1.length) {
      currentIndex1 = 0;
    } else {
      currentIndex1 = index;
    }

    imageCounter1.textContent = `${currentIndex1 + 1} / ${images1.length}`;

    images1.forEach((img, i) => {
      img.style.display = i === currentIndex1 ? "block" : "none";
    });
  }

  function nextImage1() {
    showImage1(currentIndex1 + 1);
  }

  function prevImage1() {
    showImage1(currentIndex1 - 1);
  }

  nextButton1.addEventListener("click", nextImage1);
  prevButton1.addEventListener("click", prevImage1);

  showImage1(currentIndex1);

  const carrossel2 = document.querySelector("#carrossel2");
  const images2 = carrossel2.querySelectorAll(".carrossel-img");
  const prevButton2 = carrossel2.querySelector(".btn-nav.prev");
  const nextButton2 = carrossel2.querySelector(".btn-nav.next");
  const imageCounter2 = carrossel2.querySelector(".contador");
  let currentIndex2 = 0;

  function showImage2(index) {
    if (index < 0) {
      currentIndex2 = images2.length - 1;
    } else if (index >= images2.length) {
      currentIndex2 = 0;
    } else {
      currentIndex2 = index;
    }

    imageCounter2.textContent = `${currentIndex2 + 1} / ${images2.length}`;

    images2.forEach((img, i) => {
      img.style.display = i === currentIndex2 ? "block" : "none";
    });
  }

  function nextImage2() {
    showImage2(currentIndex2 + 1);
  }

  function prevImage2() {
    showImage2(currentIndex2 - 1);
  }

  nextButton2.addEventListener("click", nextImage2);
  prevButton2.addEventListener("click", prevImage2);

  showImage2(currentIndex2);
});
