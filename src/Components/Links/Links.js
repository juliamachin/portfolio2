import "./Links.css";

const Links = () => {
  return (
    <div>
      <nav>
        <a href="/">
          <img src="" width="70" height="70" alt="home-icon" className="icon" />
        </a>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Links;
