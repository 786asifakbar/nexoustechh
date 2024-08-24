import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const ErpEx = () => {
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
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600">
              <TrendingUp className="inline-block mr-2" />
              Enterprise Resource Planning (ERP)
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, we provide comprehensive ERP solutions to streamline your business operations. Our ERP systems integrate various functions, including finance, HR, supply chain, and more, into a single cohesive platform. This integration helps you manage and analyze business processes efficiently.
            </Typography>

            <Typography className="text-gray-700 my-4">
              We customize ERP solutions to meet your specific business needs, ensuring that your ERP system supports your strategic goals and operational requirements. Our approach includes detailed planning, implementation, and ongoing support to ensure seamless integration and optimal performance.
            </Typography>

            <Typography className="text-gray-700 my-4">
              Our ERP solutions offer real-time data insights, enabling you to make informed decisions and drive business growth. We focus on enhancing productivity, reducing costs, and improving overall business efficiency through our advanced ERP technology.
            </Typography>

            <Typography className="text-gray-700 my-4">
              With our ERP systems, you can expect enhanced data accuracy, better collaboration, and improved scalability, helping your business stay competitive in a rapidly changing market.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing ERP technologies/services */}
              <Grid item xs={4} data-aos="fade-up">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.XmNyNKcscIzAKGYNPxHXXwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Finance" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="100">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP.zArF9Ts1D9taILeluJTP4wHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7" alt="HR" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="200">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://cdn-icons-png.flaticon.com/512/12141/12141380.png" alt="Supply Chain" className="w-12" />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="300">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Finance Management
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="400">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> HR Management
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="500">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Supply Chain Management
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="600">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Inventory Management
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="700">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Reporting & Analytics
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={0}>
              <CardMedia
                component="img"
                image="..\src\assets\erp.png"
                alt="ERP"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ErpEx;