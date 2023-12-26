//About.js
import React from 'react';
import './About.scss';
import Banner from '../Banner/Banner';
import aboutBannerImage from '../assets/img/kalen.png'; 

const About = () => {
  return (
    <div className='about-banner'> 
      <Banner backgroundImg={aboutBannerImage} />
    </div>
  );
};

export default About;
