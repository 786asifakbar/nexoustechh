import { Typography, Grid, Card, CardContent , CardMedia } from '@mui/material';
import { Code, CheckCircleOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const WebAppDevelopment = () => {
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
              <Code className="inline-block mr-2" />
              Web And Native App Development
            </Typography>
            <Typography className="text-gray-700 my-4">
              Experience the artistry of web and native app development at Logic Tech, where creativity meets functionality. Our skilled team harnesses the power of Django, Node.js, Express, React, Next.js, Vue.js, and MongoDB to craft immersive digital solutions. From dynamic web applications to seamless native experiences, we transform ideas into reality.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing technologies */}
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/django-icon.png" alt="Django" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/nodejs-icon.png" alt="Node.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/react-icon.png" alt="React" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/ts-icon.png" alt="TypeScript" className="w-12" />
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
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Full Stack Development
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> API Development
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Mobile Apps Development
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Frontend Development
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Hybrid/Native Apps Development
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Backend Development
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
                image="..\src\assets/code.png"
                alt="Web Development"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WebAppDevelopment;