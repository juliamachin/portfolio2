import "./Footer.css";
import myLink from "../Images/LinkedIn.png";
import myGitHub from "../Images/GitHub.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/julia-machin-305628239/">
        <img src={myLink} alt="in icon" className="link" id="in" />
      </a>
      <a href="https://github.com/juliamachin">
        <img src={myGitHub} alt="git icon" className="link" id="git" />
      </a>
    </footer>
  );
};

export default Footer;
