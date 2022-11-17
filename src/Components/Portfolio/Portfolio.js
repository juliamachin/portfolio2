import "./Portfolio.css";
import Data from "./Data";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Portfolio = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= +0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right" onClick={nextSlide} />
      {Data.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="images" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
