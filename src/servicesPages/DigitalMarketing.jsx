import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const DigitalMarketing = () => {
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
        <Grid item xs={12} md={6} data-aos="fade-left">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={0}>
              <CardMedia
                component="img"
                image="..\src\assets\Degital.png"
                alt="Digital Marketing"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600">
              <TrendingUp className="inline-block mr-2" />
              Digital Marketing
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, we drive business growth with cutting-edge digital marketing strategies. Our services include SEO, PPC, social media marketing, and content creation, all tailored to increase your online presence and engagement. We leverage data-driven insights to maximize ROI and help you reach your target audience effectively.
            </Typography>

            <Typography className="text-gray-700 my-4">
              From creating compelling content to optimizing your digital campaigns, we ensure your brand stands out in the competitive online landscape. Let us help you transform your digital footprint and achieve your marketing goals.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing technologies/services */}
              <Grid item xs={4} data-aos="fade-up">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.HT_dM4CxmCGY_jMahzfNVwHaFL&w=298&h=209&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="SEO" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="100">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.TR0RcVIlq7kpmEFIE19XqQHaGM&w=273&h=228&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="PPC" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="200">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.IeUA9u-wtancSaVdM2hrUgHaFj&w=288&h=216&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Social Media Marketing" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="300">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP._VCVud3WJdqdG0hKleLXeAHaHv&w=244&h=255&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Content Marketing" className="w-12" />
                </Card>
              </Grid>
              {/* Add more icons as needed */}
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="400">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> SEO Optimization
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="500">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> PPC Campaigns
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="600">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Social Media Management
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="700">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Content Marketing
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="800">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Email Marketing
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="900">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Analytics & Reporting
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DigitalMarketing;
