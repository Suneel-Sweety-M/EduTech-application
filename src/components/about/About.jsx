import React from 'react';
import '../styles/about.css';
import AboutCard from './AboutCard';
import Back from '../common/Back';

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard />
    </>
  )
}

export default About;