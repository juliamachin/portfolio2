import "./Portfolio.css";
import Data from "./Data";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Portfolio = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left" />
      <FaArrowAltCircleRight className="right" />
      {Data.map((slide, index) => {
        return <img src={slide.image} alt="images" className="image" />;
      })}
    </section>
  );
};

export default Portfolio;
