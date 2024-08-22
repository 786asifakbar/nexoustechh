import { Typography, Grid, Card, CardMedia } from '@mui/material';
import { TrendingUp, CheckCircleOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const PosEx = () => {
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
              Point of Sale (POS) Solutions
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, we provide state-of-the-art POS solutions designed to streamline your retail operations. Our POS systems offer seamless integration with your inventory, sales, and customer management processes, enhancing your business efficiency.
            </Typography>

            <Typography className="text-gray-700 my-4">
              We offer customizable POS systems that cater to various industries including retail, hospitality, and services. Our solutions are equipped with features such as sales reporting, inventory tracking, and customer relationship management to help you optimize your operations.
            </Typography>

            <Typography className="text-gray-700 my-4">
              Our POS solutions are designed to be user-friendly and easily adaptable to your business needs. Whether you're looking for a simple register or a full-fledged system with advanced analytics, we provide solutions that can scale with your business growth.
            </Typography>

            <Typography className="text-gray-700 my-4">
              With our POS systems, you can expect improved transaction accuracy, faster checkouts, and better customer insights. We also offer ongoing support to ensure your system operates smoothly and efficiently.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing POS technologies/services */}
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/pos-register-icon.png" alt="POS Register" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/inventory-icon.png" alt="Inventory Management" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={0}>
                  <CardMedia component="img" image="/path/to/analytics-icon.png" alt="Sales Analytics" className="w-12" />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1} className="mt-6">
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> POS Register
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Inventory Management
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Sales Reporting
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Customer Management
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Receipt Printing
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="flex items-center">
                  <CheckCircleOutline className="text-blue-600 mr-2" /> Sales Analytics
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
                image="..\src\assets\pos.png"
                alt="POS"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PosEx;
