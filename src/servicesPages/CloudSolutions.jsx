import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { Cloud, CheckCircleOutline } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import AwsEx from "./AwsEx";

const CloudSolutions = () => {
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
    <>
      <div className="bg-blue-50 min-h-screen p-8">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" className="font-bold text-blue-600">
                <Cloud className="inline-block mr-2" />
                Cloud Solutions
              </Typography>
              <Typography className="text-gray-700 my-4">
                At Logic Tech, we offer innovative cloud solutions designed to enhance your business’s efficiency and scalability. Our cloud services provide flexible, secure, and cost-effective solutions that allow you to focus on your core operations while we handle your IT infrastructure.
              </Typography>

              <Typography className="text-gray-700 my-4">
                We provide a range of cloud solutions including cloud migration, infrastructure management, and cloud security. Our team ensures a seamless transition to the cloud, optimizing your IT resources to meet your business needs.
              </Typography>

              <Typography className="text-gray-700 my-4">
                With our cloud solutions, you can benefit from increased agility, improved collaboration, and scalable resources that grow with your business. We also offer ongoing support and management to keep your cloud environment running smoothly.
              </Typography>

              <Typography className="text-gray-700 my-4">
                Let us help you harness the power of the cloud to drive innovation and achieve your business goals efficiently.
              </Typography>

              <Grid container spacing={2} className="my-4">
                {/* Icons representing Cloud Solutions technologies/services */}
                <Grid item xs={4} data-aos="fade-up">
                  <Card elevation={0}>
                    <CardMedia component="img" image="https://th.bing.com/th/id/OIP.6kw2mL32XFerpOiKKIxE0wHaGB?w=233&h=189&c=7&r=0&o=5&pid=1.7" alt="Cloud Migration" className="w-12" />
                  </Card>
                </Grid>
                <Grid item xs={4} data-aos="fade-up" data-aos-delay="100">
                  <Card elevation={0}>
                    <CardMedia component="img" image='https://th.bing.com/th?id=OIP.f2MaqMz48EbhuJWwfqH93QHaE_&w=304&h=205&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2' alt="Infrastructure Management" className="w-12" />
                  </Card>
                </Grid>
                <Grid item xs={4} data-aos="fade-up" data-aos-delay="200">
                  <Card elevation={0}>
                    <CardMedia component="img" image="https://th.bing.com/th/id/OIP.MDowa2JwCXvjFzARJzuzugHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7" alt="Cloud Security" className="w-12" />
                  </Card>
                </Grid>
              </Grid>

              <Grid container spacing={1} className="mt-6">
                <Grid item xs={6} data-aos="fade-up" data-aos-delay="300">
                  <Typography className="flex items-center">
                    <CheckCircleOutline className="text-blue-600 mr-2" /> Cloud Migration
                  </Typography>
                </Grid>
                <Grid item xs={6} data-aos="fade-up" data-aos-delay="400">
                  <Typography className="flex items-center">
                    <CheckCircleOutline className="text-blue-600 mr-2" /> Infrastructure Management
                  </Typography>
                </Grid>
                <Grid item xs={6} data-aos="fade-up" data-aos-delay="500">
                  <Typography className="flex items-center">
                    <CheckCircleOutline className="text-blue-600 mr-2" /> Cloud Security
                  </Typography>
                </Grid>
                <Grid item xs={6} data-aos="fade-up" data-aos-delay="600">
                  <Typography className="flex items-center">
                    <CheckCircleOutline className="text-blue-600 mr-2" /> Scalability
                  </Typography>
                </Grid>
                <Grid item xs={6} data-aos="fade-up" data-aos-delay="700">
                  <Typography className="flex items-center">
                    <CheckCircleOutline className="text-blue-600 mr-2" /> Cost Efficiency
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image="..\src\assets\cloud.png"
                  alt="Cloud Solutions"
                  className="w-full"
                />
              </Card>
            </motion.div>
          </Grid>
        </Grid>
        <AwsEx />
      </div>
    </>
  );
};

export default CloudSolutions;
