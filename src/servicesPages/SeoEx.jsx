import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const SeoEx = () => {
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
              Search Engine Optimization (SEO)
            </Typography>
            <Typography className="text-gray-700 my-4">
              Our SEO experts at Logic Tech utilize the latest techniques to improve your website's visibility on search engines like Google. We focus on both on-page and off-page SEO strategies to enhance your rankings, drive organic traffic, and increase conversions.
            </Typography>

            <Typography className="text-gray-700 my-4">
              We start by conducting comprehensive keyword research to identify the most relevant and high-performing keywords for your business. Our team then optimizes your website's content, meta tags, and structure to align with these keywords, ensuring your site is search-engine-friendly.
            </Typography>

            <Typography className="text-gray-700 my-4">
              In addition to on-page optimization, we build high-quality backlinks and create compelling content that resonates with your target audience. Our goal is to establish your brand as an authority in your industry while boosting your search engine rankings.
            </Typography>

            <Typography className="text-gray-700 my-4">
              We also provide detailed analytics and reporting, giving you insight into your SEO performance and helping you make informed decisions for future marketing efforts.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing SEO technologies/services */}
              <Grid item xs={4} data-aos="fade-up">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.Zx_gLV0_bAixP2Tj4rUdFAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="SEO Optimization" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="100">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.KE7ptiArqRb_mAMSx1H4dgHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Keyword Research" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4} data-aos="fade-up" data-aos-delay="200">
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.ncOUIaKm4lRql9ZryXZPvgHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Backlink Building" className="w-12" />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="300">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> SEO Optimization
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="400">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Keyword Research
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="500">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Backlink Building
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="600">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Content Optimization
                </Typography>
              </Grid>
              <Grid item xs={6} data-aos="fade-up" data-aos-delay="700">
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Analytics & Reporting
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
                image="..\src\assets\seo.png"
                alt="SEO"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SeoEx;