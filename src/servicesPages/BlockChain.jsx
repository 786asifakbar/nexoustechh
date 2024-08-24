import React, { useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { CheckCircleOutline, Layers } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const BlockChain = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="..\src\assets/block.png" alt="Blockchain Illustration" className="w-full max-h-96" />
          </motion.div>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} data-aos="fade-left">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600">
              <Layers className="inline-block mr-2" />
              Blockchain Development
            </Typography>
            <Typography className="text-gray-700 my-4">
              Embark on a revolutionary journey with our blockchain development services, where we specialize in crafting decentralized solutions using cutting-edge technologies. Our expertise extends to Solidity for Ethereum, Rust for Substrate, ensuring robust and secure smart contract development.
            </Typography>

            <Box className="space-y-2">
              <Typography className="flex items-center" data-aos="fade-up">
                <CheckCircleOutline className="text-blue-600 mr-2" /> Solidity
              </Typography>
              <Typography className="flex items-center" data-aos="fade-up" data-aos-delay="100">
                <CheckCircleOutline className="text-blue-600 mr-2" /> Rust
              </Typography>
              <Typography className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                <CheckCircleOutline className="text-blue-600 mr-2" /> Ethereum
              </Typography>
              <Typography className="flex items-center" data-aos="fade-up" data-aos-delay="300">
                <CheckCircleOutline className="text-blue-600 mr-2" /> Polkadot
              </Typography>
              <Typography className="flex items-center" data-aos="fade-up" data-aos-delay="400">
                <CheckCircleOutline className="text-blue-600 mr-2" /> Substrate
              </Typography>
            </Box>

            {/* <Box className="mt-6">
              <Button variant="contained" color="primary" className="mr-4">
                Learn More
              </Button>
              <Button variant="outlined" color="primary">
                Contact Us
              </Button>
            </Box> */}
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlockChain;
