import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          src="https://gosrx.com/wp-content/uploads/2020/03/AdobeStock_298890723-2048x1365.jpeg"
          alt="hero-img"
        />
        <div className="h-text">
          <h1>WELCOME TO IIVEDA</h1>
          <p>THE BEST ONLINE EDUCATION & LEARNING PLATFORM FOR YOU!</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
