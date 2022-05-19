const buttons = document.querySelectorAll("[data-carousel-button]");
const indicatorButtons = document.querySelectorAll("[data-carousel-indicator]");
const slides = document
  .querySelector("[data-carousel]")
  .querySelector("[data-slides]");
const indicators = document
  .querySelector("[data-carousel]")
  .querySelector("[data-indicators]");

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
  });
});

indicatorButtons.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    const selectedIndicator = indicator.dataset.carouselIndicator;
    const activeSlide = slides.querySelector("[data-active]");
    const activeIndicator = indicators.querySelector("[data-active]");

    slides.children[selectedIndicator].dataset.active = true;
    indicators.children[selectedIndicator].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activeIndicator.dataset.active;
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

var intervalId = window.setInterval(function () {
  slideSelf();
}, 6000);
