import React, { useEffect } from 'react';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
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
    <div className="min-h-screen flex items-center justify-center" data-aos="fade-up">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-down">Contact Us</h1>
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                We are here to help. Feel free to reach out to us.
              </p>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Phone className="text-blue-500 mr-2" />
                  <span className="text-gray-700">+123 456 7890</span>
                </div>
                <div className="flex items-center mb-2">
                  <Email className="text-blue-500 mr-2" />
                  <span className="text-gray-700">info@example.com</span>
                </div>
                <div className="flex items-start">
                  <LocationOn className="text-blue-500 mr-2 mt-1" />
                  <span className="text-gray-700">
                    123 Example Street, City, Country
                  </span>
                </div>
              </div>
              <div className="h-64 w-full rounded-lg overflow-hidden mt-4">
                <iframe
                  title="map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890!2d-122.4194154846814!3d37.77492927975969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a2d5e9f%3A0xa2d5e9f123456789!2sExample+Address!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    className="mb-4"
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    className="mb-4"
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    className="mb-4"
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;