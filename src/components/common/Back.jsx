import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/back.css';

const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <div className="hero">
        <img
          src="https://thumbs.dreamstime.com/b/dark-blue-background-school-elements-back-to-concept-white-lineart-oil-texture-150284940.jpg"
          alt="hero"
        />
        <div className="text">
          <h3>Home / {location.pathname.split("/")[1]}</h3>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Back;
