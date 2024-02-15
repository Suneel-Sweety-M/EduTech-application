import React from "react";
import "../styles/allcources.css";
import Heading from "../common/Heading";
import {online} from '../../data';

const OnlineCources = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val,index) => (
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="img"/>
                  <img src={val.hoverCover} alt="img" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCources;
