import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    
    <div>
      {/* <h1 data-aos="fade-up">My Animated Heading</h1>
      <p data-aos="fade-in">Some animated content here</p> */}
    </div>
  
);
};

export default MyComponent;
