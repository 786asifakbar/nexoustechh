import HeroSection from "./HeroSection";
import ServicesPage from "./ServicesPage";
import ThreeCards from "./ThreeCards";
import PagesBus from './PagesBus'
import MyComponent from "./MyComponent";
// import 'aos/dist/aos.css';
import Testimonials from "./Testimonials"
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs"

const Home = () => {
    return (
      <> 
       <HeroSection/>
       <ThreeCards />
       <WhyUs/>
       <PagesBus />
       <MyComponent/>
      <ServicesPage/>
      <Testimonials />
      <ContactUs />
      </>
    );
    
  };
  
  export default Home;