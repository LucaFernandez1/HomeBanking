const buttons = document.querySelectorAll("[data-carousel-button]");
const indicators = document.querySelectorAll("[data-carousel-indicator]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const indicators = button
      .closest("[data-carousel]")
      .querySelector("[data-indicators]");

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

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    const selectedIndicator = indicator.dataset.carouselIndicator; //0 1 2
    const slides = indicator
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const indicators = indicator
      .closest("[data-carousel]")
      .querySelector("[data-indicators]");

    const activeSlide = slides.querySelector("[data-active]");
    const activeIndicator = indicators.querySelector("[data-active]");

    slides.children[selectedIndicator].dataset.active = true;
    indicators.children[selectedIndicator].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activeIndicator.dataset.active;
  });
});
