import React from "react";
import Heading from "../common/Heading";
import { homeAbout } from "../../data";
import "../styles/about.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="ha-title">
          <Heading
            subtitle="LEARN ANYTHING"
            title="Benefits About Online Learning Expertise"
          />
        </div>
        <div className="ha-items">
          {homeAbout.map((val, index) => {
            return (
              <div className="ha-item" key={index}>
                <div className="ha-i-img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="ha-i-text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AboutCard;
