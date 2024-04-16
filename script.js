const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter = (counter - 1 + slides.length) % slides.length;
  slideImage();
  console.log("Goprev");
};

const goNext = () => {
  counter = (counter + 1) % slides.length;
  slideImage();
  console.log("goNext");
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  console.log("SlideImage");
};
