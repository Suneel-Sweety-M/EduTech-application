import React from "react";
import Hero from "../components/home/Hero";
import AboutCard from "../components/about/AboutCard";
import Habout from "../components/home/Habout";
import Hprice from '../components/home/Hprice';
import Testimonal from '../components/common/Testimonal';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Habout /> 
      <Testimonal/>
      <Hprice /> 
    </>
  );
};

export default Home;
