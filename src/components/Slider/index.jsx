import { ChevronRight, ChevronLeft } from "@ricons/fa";
import { useState } from "react";

export default function Slider({ slides }) {
  const [currentSlide, setCurrent] = useState(0);
  const slideLenght = slides.length;

  function nextSlide() {
    setCurrent(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1);
  }

  function previousSlide() {
    setCurrent(currentSlide === 0 ? 0 : currentSlide - 1);
  }

  console.log(currentSlide);

  return slides.length > 1 ? (
    <section className="slider">
      {slides.length > 1}
      <ChevronLeft className="slider__left-arrow" onClick={previousSlide} />
      <ChevronRight className="slider__right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => (
        <div
          className={index === currentSlide ? "slide-active" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <img src={slide} alt="Images de l'appartment" />
          )}
        </div>
      ))}
    </section>
  ) : (
    <section className="slider">
      {slides.map((slide) => (
        <img src={slide} alt="Images de l'appartment" />
      ))}
    </section>
  );
}
