import "./About.css";
import mySelfie from "../Images/IMG_4039.jpg";

const About = () => {
  return (
    <div>
      {/* <h2 className="title">About Me</h2> */}
      <img
        src={mySelfie}
        width="250"
        height="300"
        className="selfie"
        alt="portrait"
      />
      <p>
        A full-stack software developer with a background in performing arts and
        communications. Dedicated and passionate about creative problem-solving
        which has encouraged an abstract mindset that cultivates engaging web
        applications with the user in mind.
      </p>
    </div>
  );
};

export default About;
