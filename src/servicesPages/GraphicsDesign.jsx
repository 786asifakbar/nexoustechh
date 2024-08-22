import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Code, Brush, CheckCircleOutline } from '@mui/icons-material'; // Added Brush icon
import { motion } from 'framer-motion';

const GraphicsDesign = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <Grid container spacing={4} alignItems="center">
            {/* Graphics Design Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600">
              <Brush className="inline-block mr-2" />
              Graphics Design
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, our graphics design team brings your vision to life with stunning visuals and creative artistry. We specialize in logo design, branding, UI/UX design, and more, using tools like Adobe Photoshop, Illustrator, Figma, and Sketch to deliver eye-catching and impactful designs.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing tools */}
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/photoshop-icon.png" alt="Photoshop" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/illustrator-icon.png" alt="Illustrator" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/figma-icon.png" alt="Figma" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/sketch-icon.png" alt="Sketch" className="w-12" />
                </Card>
              </Grid>
              {/* Add more icons as needed */}
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Logo Design
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> UI/UX Design
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Branding
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Digital Art
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={0}>
              <CardMedia
                component="img"
                image="..\src\assets/graphics.png"
                alt="Graphics Design"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GraphicsDesign;