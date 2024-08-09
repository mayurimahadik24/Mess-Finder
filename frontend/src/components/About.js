import React from "react";

import AboutImg from "./about-img.jpeg";
import './signup.css';

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes us special?</h3>
            <p>
              We help our consumers to connect with mess service providers according to their budget.
              Consumers will also be able to locate all the near by mess services through us.
            </p>
            <p>
              We display places which are trustworthy and tested.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
