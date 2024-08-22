import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { Cloud, CheckCircleOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const CloudSolutions = () => {
  return (
    <>
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
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/cloud-migration-icon.png" alt="Cloud Migration" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/infrastructure-management-icon.png" alt="Infrastructure Management" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/cloud-security-icon.png" alt="Cloud Security" className="w-12" />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Cloud Migration
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Infrastructure Management
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Cloud Security
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Scalability
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Cost Efficiency
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
                image="..\src\assets\cloud.png"
                alt="Cloud Solutions"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default CloudSolutions;