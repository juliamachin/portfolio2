import "./Portfolio.css";
import Data from './Data'

const Portfolio = () => {
  return (
    <div>
      {Data.map((slide, index) => {
        return (
        <img src={slide.image} alt="images" />
        )
      })}
    </div>
  );
};

export default Portfolio;
