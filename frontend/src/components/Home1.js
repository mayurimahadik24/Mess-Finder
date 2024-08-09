import React from "react";
import './signup.css';
import Navbar from "./Navbar";

const Home1 = () => {
  return (
    <>
    
      <section className="home" id="home">
      <Navbar/>
        <div className="content">
          <h3>
            mess that <span>tastes </span>best
          </h3>
          <p>
            Get to know about places that provide best food...
          </p>
          <a href="#" className="btn">
            for more info
          </a>
          
        </div>
      </section>
    </>
  );
};

export default Home1;