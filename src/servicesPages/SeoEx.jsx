import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const SeoEx = () => {
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
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/seo-icon.png" alt="SEO Optimization" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/keyword-research-icon.png" alt="Keyword Research" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/backlink-icon.png" alt="Backlink Building" className="w-12" />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> SEO Optimization
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Keyword Research
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Backlink Building
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Content Optimization
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Analytics & Reporting
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} md={6}>
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