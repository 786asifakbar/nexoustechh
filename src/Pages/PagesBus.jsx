import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PagesBus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-up',
      delay: 300,
      once: true,
    });
  }, []);

  // Animation variants for the text and image
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <> 
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Left Side - Text Content */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="md:w-1/2"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black" data-aos="fade-up" >
            Manage & Push Your Business To The Next Level
          </h1>
          <p className="text-gray-900 mb-6 " data-aos="fade-up" data-aos-delay="400">
            Elevate your business with seamless management and dynamic growth. Harness innovative solutions to propel your enterprise to the next level, tailored to meet your unique goals and aspirations. Unlock success with our expertise as your trusted partner in advancement.
          </p>

          <div className="space-y-4 mb-6">
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: '#1e3a8a',
                color: '#ffffff',
                borderRadius: '10px',
                borderColor: '#ffffff',
                borderWidth: '2px',
                borderStyle: 'solid',
              }}
              className="flex items-center p-4 transition-all duration-300 ease-in-out" data-aos-delay="800"
              data-aos="fade-up"
            >
              <CheckCircleIcon className="text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Digital Consulting Strategy</h3>
                <p className="text-gray-600">
                  Empower your business with our digital consulting strategy—crafted for innovation and tailored to your goals.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: '#1e3a8a',
                color: '#ffffff',
                borderRadius: '10px',
                borderColor: '#ffffff',
                borderWidth: '2px',
                borderStyle: 'solid',
              }}
              className="flex items-center p-4 transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <CheckCircleIcon className="text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">24/7 Hours Support</h3>
                <p className="text-gray-600">
                  Experience dedicated support 24/7. Our team is committed to assisting you at any hour.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="../../src/assets/key.png" // Use the link to an image or a local path
            alt="Business Growth"
            className="w-full max-w-full h-max"
          />
        </motion.div>
      </div>
    </>
  );
};

export default PagesBus;