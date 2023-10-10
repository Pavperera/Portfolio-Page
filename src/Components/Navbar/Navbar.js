import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              zoomAndPan="magnify"
              viewBox="0 0 375 374.999991"
              height="36"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="cefe02ecdc">
                  <path
                    d="M 18.75 0 L 356.25 0 L 356.25 311 L 18.75 311 Z M 18.75 0 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#cefe02ecdc)">
                <path
                  fill="#d9d9d9"
                  d="M 240.453125 278.972656 C 306.0625 267.164062 356.25 209.453125 356.25 140.597656 C 356.25 63.277344 292.972656 0.015625 215.628906 0.015625 L 18.75 0.015625 L 75 56.25 L 215.628906 56.25 C 262.035156 56.25 300 94.207031 300 140.601562 C 300 186.992188 262.035156 224.949219 215.628906 224.949219 L 187.503906 224.949219 L 187.503906 310.800781 L 243.753906 278.335938 C 242.660156 278.558594 241.5625 278.769531 240.453125 278.972656 Z M 240.453125 278.972656 "
                  fill-opacity="1"
                  fill-rule="evenodd"
                />
              </g>
              <path
                fill="#38fff9"
                d="M 131.253906 281.175781 C 131.253906 243.691406 131.253906 206.203125 131.253906 168.714844 L 215.625 168.714844 C 231.097656 168.714844 243.75 156.066406 243.75 140.601562 C 243.75 125.132812 231.097656 112.484375 215.625 112.484375 L 75 112.484375 C 75 168.714844 75 224.949219 75 281.175781 L 75 375.734375 L 131.25 343.269531 L 131.25 281.175781 Z M 131.253906 281.175781 "
                fill-opacity="1"
                fill-rule="evenodd"
              />
            </svg>
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="#profile" class="nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
