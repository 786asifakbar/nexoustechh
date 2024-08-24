import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // duration of the animation
      offset: 200, // offset (in px) from the original trigger point
      easing: 'ease-in-out', // easing option
      delay: 100, // delay between consecutive animations
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <> 
      <section className="py-20 px-5 md:px-20 lg:px-40 text-justify">
        <div className="container mx-auto text-gray-900">
          <h2 
            className="text-4xl font-bold text-center mb-8" 
            data-aos="fade-up"
          >
            Why Us
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div 
              className="md:w-1/2 mb-8 md:mb-0"
              data-aos="fade-right"
            >
              <img
                src="../../src/assets/pic.png"
                alt="About Us"
                className="rounded-lg size-auto"
              />
            </div>
            <div 
              className="text-gray-900 md:w-1/2 md:pl-10"
              data-aos="fade-left"
            >
              <p className="text-lg leading-relaxed mb-6 text-justify">
                Welcome to NexOusTech, where innovation meets excellence. We are a 
                dedicated team of developers, designers, and strategists, committed to 
                delivering top-tier software solutions tailored to your business needs. 
                With years of experience in the industry, we specialize in creating custom 
                web and mobile applications, ensuring that our solutions are not only functional 
                but also scalable and user-friendly.
              </p>
              <p className="text-lg leading-relaxed">
                At NexOusTech, we believe in a client-first approach. Our process is collaborative, 
                transparent, and driven by a passion for technology. Whether you are a startup looking 
                to make a mark or an established business aiming to innovate, we are here to help you 
                achieve your goals with cutting-edge technology and unparalleled expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;