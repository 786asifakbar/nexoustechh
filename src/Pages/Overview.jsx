import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Info, Build, Description } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <>
   <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <Typography variant="h2" className="text-blue-600 font-bold mb-6 text-center">
          <Info className="inline-block mr-2" />
          Software & Services Overview
        </Typography>

        {/* Overview Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <Typography variant="h4" className="text-blue-600 font-semibold mb-4">
            <Build className="inline-block mr-2" />
            Our Software Solutions
          </Typography>
          <Typography className="text-gray-700 mb-4">
            At Logic Tech, we offer a range of software solutions tailored to meet your business needs. Our expertise includes custom software development, enterprise applications, and integrated systems that enhance productivity and efficiency.
          </Typography>
          <Typography className="text-gray-700 mb-4">
            Our development process is driven by innovation and focuses on delivering high-quality, scalable, and secure software solutions. We leverage the latest technologies to ensure that our software meets industry standards and client expectations.
          </Typography>
        </div>

        {/* Services Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Typography variant="h4" className="text-blue-600 font-semibold mb-4">
            <Description className="inline-block mr-2" />
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card elevation={0} className="shadow-md">
                  <CardMedia
                    component="img"
                    image="/path/to/service1.png"
                    alt="Service 1"
                    className="w-full h-40 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6" className="font-semibold">
                      Service 1
                    </Typography>
                    <Typography className="text-gray-700 mt-2">
                      Description of service 1. Explain what this service does and how it benefits the client.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card elevation={0} className="shadow-md">
                  <CardMedia
                    component="img"
                    image="/path/to/service2.png"
                    alt="Service 2"
                    className="w-full h-40 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6" className="font-semibold">
                      Service 2
                    </Typography>
                    <Typography className="text-gray-700 mt-2">
                      Description of service 2. Highlight the key features and advantages of this service.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card elevation={0} className="shadow-md">
                  <CardMedia
                    component="img"
                    image="/path/to/service3.png"
                    alt="Service 3"
                    className="w-full h-40 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6" className="font-semibold">
                      Service 3
                    </Typography>
                    <Typography className="text-gray-700 mt-2">
                      Description of service 3. Discuss how this service can solve client problems or meet their needs.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    </>
  );
};

export default Overview;
