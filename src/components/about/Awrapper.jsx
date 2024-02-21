import React from "react";
import { awrapper } from "../../data";

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="awrapper-items">
          {awrapper.map((val,index) => {
            return (
              <div className="awrapper-item" key={index}>
                <div className="awrapper-item-img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="awrapper-item-text">
                  <h1>{val.data}</h1> 
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
