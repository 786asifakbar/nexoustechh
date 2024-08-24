import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // For navigation

const services = [
  {
    title: 'Web Development',
    icon: <CodeIcon fontSize="inherit" />,
    description: 'We build robust and scalable web applications using the latest technologies to enhance your online presence.',
    link: '/WebDevelopment' // Redirect link
  },
  {
    title: 'Graphic Designing',
    icon: <DesignServicesIcon fontSize="inherit" />,
    description: 'Our creative team designs visually stunning graphics that effectively communicate your brand message.',
    link: '/GraphicsDesign' // Redirect link
  },
  {
    title: 'Digital Marketing',
    icon: <TrendingUpIcon fontSize="inherit" />,
    description: 'Boost your business with our strategic digital marketing solutions, including SEO, PPC, and social media marketing.',
    link: '/DigitalMarketing' // Redirect link
  },
  {
    title: 'SEO',
    icon: <SearchIcon fontSize="inherit" />,
    description: 'Increase your website’s visibility and ranking on search engines with our expert SEO services.',
    link: '/SeoEx' // Redirect link
  },
  {
    title: 'ERP',
    icon: <StorageIcon fontSize="inherit" />,
    description: 'Streamline your business operations with our customized ERP solutions that cater to your specific needs.',
    link: '/ErpEx' // Redirect link
  },
  {
    title: 'Cloud Solutions',
    icon: <CloudIcon fontSize="inherit" />,
    description: 'Leverage the power of cloud computing with our tailored cloud solutions, ensuring scalability and security.',
    link: '/CloudSolutions' // Redirect link
  },
  {
    title: 'AWS',
    icon: <CloudIcon fontSize="inherit" />,
    description: 'Optimize your cloud infrastructure with our AWS services, offering reliability, flexibility, and cost-effectiveness.',
    link: '/AwsEx' // Redirect link
  },
  {
    title: 'Web & Mobile Development',
    icon: <PhoneIphoneIcon fontSize="inherit" />,
    description: 'We create responsive and user-friendly web and mobile applications to enhance user experience and engagement.',
    link: '/WebAppDevelopment' // Redirect link
  },
  {
    title: 'Blockchain Development',
    icon: <LockIcon fontSize="inherit" />,
    description: 'Innovate with our blockchain development services, offering secure and decentralized solutions for your business.',
    link: '/Blockchain' // Redirect link
  },
  {
    title: 'POS Solutions',
    icon: <PaymentIcon fontSize="inherit" />,
    description: 'Optimize your retail operations with our advanced POS systems, designed for efficiency and reliability.',
    link: '/PosEx' // Redirect link
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-up',
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <> 
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-down">
            Services
          </h1>
          <p className="text-center text-gray-800 mb-12" data-aos="fade-down">
            Elevate your business with our comprehensive suite of innovative and reliable software solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card flex flex-col items-center text-center p-6 bg-white rounded-lg border-y-4 border-x-4 shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: 'blue', color: '#ffffff'}}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ duration: 2.5, delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 1200}
              >
                <div className="icon-container text-6xl mb-4 text-blue-500 hover:text-white">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="mb-4">
                  {service.description}
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-4 focus:outline-none"
                  style={{ backgroundColor: 'white', color: '#1e3a8a' }}
                  onClick={() => navigate(service.link)}
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;