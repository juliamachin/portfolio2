import { Component } from "react";
import myIcon from "../Images/Icon 2.png";
import "./Links.css";

class Links extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <nav>
          <a href="/portfolio2/">
            <img
              src={myIcon}
              width="55"
              height="55"
              alt="home-icon"
              className="icon"
            />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="/portfolio2/">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio2/about">About</a>
              </li>
              <li>
                <a href="/portfolio2/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/portfolio2/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Links;
