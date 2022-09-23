/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/niks.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Nikhil Gautam</h6>
            <h3>Web Developer</h3>
            <p>
            I’m a software developer who loves making things.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
