import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';

const HeroSection = () => {
  return (
    <> 
      <div className="relative"> 
        {/* Shape Background */}
      
         <div data-aos="fade-up" 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("")`, // Update the path to where your image is located
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1, // Ensure the shape is behind other contents
      
          }}
        />

        {/* Hero Section */}
        <section className="relative h-screen flex flex-col md:flex-row items-center justify-center ml-16">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="text-center md:text-left md:w-1/2 px-6 md:px-12"
          >
            <h2 className="text-4xl md:text-3xl font-bold mb-4 mx-8">
              Welcome To
            </h2>
            <h1 className="text-3xl md:text-3xl font-bold mb-4 mx-8 ">
              <span className='text-5xl'>N</span>EX<span className='text-5xl'>O</span>US<span className='text-5xl'>T</span>ECH
            </h1>
            <p className="text-lg md:text-xl mb-8 mx-8">
              Explore the world of web development with cutting-edge technologies and innovative solutions.
            </p>
            <div className="flex flex-col items-center md:items-start mx-8 space-y-4">
              <Button variant="contained" href="ContactUs" 
                className="focus:outline-double shadow-md border-y-2 shadow-gray-200  bg-blue-700 text-white hover:bg-white hover:text-gray-700 font-bold">
                Get Started
              </Button>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="text-blue-700 hover:text-blue-900" />
                </a>

                <a href="https://www.Whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="text-green-500 hover:text-green-900" />
                </a>
              
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="text-blue-500 hover:text-blue-700" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="text-blue-800 hover:text-blue-900" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="text-pink-500 hover:text-pink-700" />
                </a>

              </div>
            </div>
          </motion.div>
          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 2.0 }}
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
          >
            <div 
              className="relative rounded-lg overflow-hidden w-full h-full md:w-96 md:h-80 transform transition-transform duration-300 hover:scale-105">
              <img
                src="../src/assets/gg.png"
                alt="Web Development"
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
