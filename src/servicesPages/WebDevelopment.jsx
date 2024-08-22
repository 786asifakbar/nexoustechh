import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Code, CheckCircleOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const WebDevelopment = () => {
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
                image="..\src\assets\webdev.png"
                alt="Web Development"
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
              <Code className="inline-block mr-2" />
              Web Development
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, we specialize in building powerful, responsive, and user-friendly websites. Our expertise spans across modern frameworks and libraries like React, Vue.js, and Next.js, enabling us to create dynamic and interactive web experiences. Whether it's an e-commerce platform, a corporate website, or a custom web solution, we deliver exceptional quality tailored to your needs.
            </Typography>

            <Typography className="text-gray-700 my-4">
              Our approach to web development is centered around performance, scalability, and security. We integrate back-end technologies like Node.js, Express, and Django to ensure your website performs seamlessly, regardless of user load or complexity.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing technologies */}
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/react-icon.png" alt="React" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/nextjs-icon.png" alt="Next.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/vuejs-icon.png" alt="Vue.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/nodejs-icon.png" alt="Node.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/express-icon.png" alt="Express.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/django-icon.png" alt="Django" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/mongodb-icon.png" alt="MongoDB" className="w-12" />
                </Card>
              </Grid>
              {/* Add more icons as needed */}
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Responsive Design
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> SEO Optimization
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> CMS Integration
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> E-commerce Development
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Custom Web Solutions
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Performance Optimization
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>        
      </Grid>
    </div>
  );
};

export default WebDevelopment;