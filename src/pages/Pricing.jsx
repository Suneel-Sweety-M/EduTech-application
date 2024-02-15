import React from "react";
import Faq from "../components/pricing/Faq";
import Back from "../components/common/Back";
import PriceCard from "../components/pricing/PriceCard";
import "../components/styles/pricing.css";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
