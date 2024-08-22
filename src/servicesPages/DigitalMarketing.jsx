import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const DigitalMarketing = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
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
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/seo-icon.png" alt="SEO" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/ppc-icon.png" alt="PPC" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/social-media-icon.png" alt="Social Media Marketing" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/content-marketing-icon.png" alt="Content Marketing" className="w-12" />
                </Card>
              </Grid>
              {/* Add more icons as needed */}
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> SEO Optimization
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> PPC Campaigns
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Social Media Management
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Content Marketing
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Email Marketing
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
      </Grid>
    </div>
  );
};

export default DigitalMarketing;