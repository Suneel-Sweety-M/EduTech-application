import React from "react";
import Heading from "../common/Heading";
import PriceCard from '../pricing/PriceCard';
import '../styles/pricing.css';

const Hprice = () => {
  return (
    <>
      {" "}
      <section className="hprice padding">
        <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
