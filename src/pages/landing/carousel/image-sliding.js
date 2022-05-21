const buttons = document.querySelectorAll("[data-carousel-button]");
const indicatorButtons = document.querySelectorAll("[data-carousel-indicator]");
const slides = document
  .querySelector("[data-carousel]")
  .querySelector("[data-slides]");
const indicators = document
  .querySelector("[data-carousel]")
  .querySelector("[data-indicators]");

var slideTimer;

window.onload = setTimer();

function setTimer() {
  slideTimer = setInterval(slideSelf, 6000);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const activeSlide = slides.querySelector("[data-active]");
    const activeIndicator = indicators.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    indicators.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activeIndicator.dataset.active;
    clearInterval(slideTimer);
    slideTimer = setInterval(slideSelf, 6000);
  });
});

indicatorButtons.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    const newIndex = indicator.dataset.carouselIndicator;
    const activeSlide = slides.querySelector("[data-active]");
    const activeIndicator = indicators.querySelector("[data-active]");

    if (activeIndicator.dataset.carouselIndicator != newIndex) {
      slides.children[newIndex].dataset.active = true;
      indicators.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
      delete activeIndicator.dataset.active;
      clearInterval(slideTimer);
      slideTimer = setInterval(slideSelf, 6000);
    }
  });
});

function slideSelf() {
  const activeSlide = slides.querySelector("[data-active]");
  const activeIndicator = indicators.querySelector("[data-active]");

  let newIndex = [...slides.children].indexOf(activeSlide) + 1;

  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  indicators.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
  delete activeIndicator.dataset.active;
}
