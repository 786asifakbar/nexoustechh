import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card'; // Import the Card component
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <> 
      <div className="threeCards container mx-auto px-4 py-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          <div data-aos="fade-up">
            <Card  
              icon={SpeedIcon} 
              title="Efficiency" 
              description="Delivering fast and optimized solutions to meet your needs."
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <Card 
              icon={VerifiedIcon} 
              title="Reliability" 
              description="Ensuring consistent performance and dependability."
            />
          </div> 
          <div data-aos="fade-up" data-aos-delay="1200">
            <Card 
              icon={LightbulbIcon} 
              title="Innovation" 
              description="Bringing creative and forward-thinking ideas to life."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;