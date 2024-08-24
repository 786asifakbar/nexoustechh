import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline, Cloud } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AwsEx = () => {
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
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={0}>
              <CardMedia
                component="img"
                image="..\src\assets\aws.png"
                alt="AWS"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
                
        {/* Right Side */}
        <Grid item xs={12} md={6} data-aos="fade-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600">
              <TrendingUp className="inline-block mr-2" />
              AWS Solutions
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, we offer comprehensive AWS solutions to help your business leverage the power of the cloud. Our AWS services include cloud infrastructure setup, scalable storage solutions, and high-performance computing resources tailored to your needs.
            </Typography>

            <Typography className="text-gray-700 my-4">
              <Cloud className="inline-block mr-2" />
              We specialize in designing and implementing AWS architectures that enhance your operational efficiency, ensure high availability, and provide robust security measures. Our team is adept at utilizing AWS services to optimize performance and reduce costs.
            </Typography>

            <Typography className="text-gray-700 my-4">
              Our AWS solutions cover a range of services, from EC2 instances and S3 storage to Lambda functions and RDS databases. We work closely with you to understand your business requirements and implement AWS technologies that align with your goals.
            </Typography>

            <Typography className="text-gray-700 my-4">
              With our AWS expertise, you can expect scalable solutions that grow with your business, cost-effective cloud computing resources, and a reliable infrastructure to support your critical applications.
            </Typography>

            <Grid container spacing={2} className="my-4" data-aos="zoom-in">
              {/* Icons representing AWS technologies/services */}
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.dfEIFZvuNC7ljFy2QNurLAAAAA&w=254&h=162&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="EC2" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png" alt="S3" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.gxfOd1VfjLIXsuOgXVk-VAHaEK&w=333&h=187&c=8&rs=1&qlt=30&r=0&o=6&pid=3.1&rm=2" alt="Lambda" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.KqNnfYtaVshGXbuGUCTOQwHaEo&w=316&h=197&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="RDS" className="w-12" />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1} className="mt-6" data-aos="fade-up">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> EC2 Instances
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> S3 Storage
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Lambda Functions
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> RDS Databases
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Scalable Solutions
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Cost Optimization
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AwsEx;
