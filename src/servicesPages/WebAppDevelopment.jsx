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
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP._NzcNLPoXtlRoFJPyk7IXgHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7" alt="Django" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP.TPhsX2qJo5qcsy2I3An6qAHaFj?w=251&h=188&c=7&r=0&o=5&pid=1.7" alt="Node.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo?w=219&h=196&c=7&r=0&o=5&pid=1.7" alt="React" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="data:image/jpeg;base64,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" alt="TypeScript" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th/id/OIP.Ae6KuLbSCjSEbFBy2o2uiAHaHa?pid=ImgDet&w=192&h=192&c=7" alt="MongoDB" className="w-12" />
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