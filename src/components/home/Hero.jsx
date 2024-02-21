import React from "react";
import "../styles/hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Sdata } from "../../data";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <div className="hero">
        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <>
                <div className="hero-slide" key={index}>
                  <div className="hs-text">
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <button className="btn-primary">Visit Cource</button>
                  </div>
                  <img src={value.cover} alt="" className="hs-img" />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
