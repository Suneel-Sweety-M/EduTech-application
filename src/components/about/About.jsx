import React from "react";
import "../styles/about.css";
import AboutCard from "./AboutCard";
import Back from "../common/Back";
import Awrapper from "./Awrapper";

const About = () => {
  return (
    <>
      <Back title="About Us" />
      <div className="about-page">
        <div className="ap-left">
          <img
            src="https://www.hk.klinelogistics.com/wp-content/uploads/2015/12/About-us.jpg"
            alt=""
          />
        </div>
        <div className="ap-right">
          <h1 className="ap-r-title">About IIVEDA</h1>
          <p className="ap-r-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            expedita odio iste repellendus ipsum doloribus quos excepturi
            placeat ut possimus, libero debitis voluptatibus! Officiis,
            doloremque reiciendis cum sint dignissimos assumenda.
          </p>
          <p className="ap-r-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni
            odio facere nisi praesentium exercitationem aspernatur vitae
            molestias sequi reiciendis ducimus, doloremque eveniet et quaerat
            numquam architecto veniam consequuntur ipsa. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Cum, placeat sit necessitatibus,
            pariatur quam eos enim commodi iusto reiciendis repudiandae quaerat
            nisi expedita suscipit aliquam consequatur earum, ad nihil hic.
          </p>
          <p className="ap-r-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            placeat sit necessitatibus, pariatur quam eos enim commodi iusto
            reiciendis repudiandae quaerat nisi expedita suscipit aliquam
            consequatur earum, ad nihil hic.
          </p>
        </div>
      </div>
      <Awrapper/>
      <AboutCard />
    </>
  );
};

export default About;
