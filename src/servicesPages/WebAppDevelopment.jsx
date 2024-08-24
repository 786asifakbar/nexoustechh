import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { Code } from '@mui/icons-material';
import { motion } from 'framer-motion';

const WebAppDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of 1 second
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600" data-aos="fade-up">
              <Code className="inline-block mr-2" />
              Web And Native App Development
            </Typography>
            <Typography className="text-gray-700 my-4" data-aos="fade-up" data-aos-delay="200">
              Experience the artistry of web and native app development at Logic Tech, where creativity meets functionality. Our skilled team harnesses the power of Django, Node.js, Express, React, Next.js, Vue.js, and MongoDB to craft immersive digital solutions. From dynamic web applications to seamless native experiences, we transform ideas into reality.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing technologies */}
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="300">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP._NzcNLPoXtlRoFJPyk7IXgHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7" alt="Django" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="400">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP.TPhsX2qJo5qcsy2I3An6qAHaFj?w=251&h=188&c=7&r=0&o=5&pid=1.7" alt="Node.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="500">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo?w=219&h=196&c=7&r=0&o=5&pid=1.7" alt="React" className="w-12" />
                </Card>
              </Grid>
              {/* Add more items with AOS attributes as needed */}
            </Grid>
          </motion.div>
        </Grid>

        {/* Right Side (if needed) */}
        {/* Add other content here, potentially with AOS attributes */}
      </Grid>
    </div>
  );
};

export default WebAppDevelopment;