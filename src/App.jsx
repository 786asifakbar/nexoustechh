// src/App.js
import {Routes , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import WhyUs from './Pages/WhyUs';
import ServicesPage from './Pages/ServicesPage';
import Overview from './Pages/Overview';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import GraphicsDesign from './servicesPages/GraphicsDesign';
import BlockChain from "./servicesPages/BlockChain"
import WebAppDevelopment from './servicesPages/WebAppDevelopment';
import WebDevelopment from './servicesPages/WebDevelopment';
import DigitalMarketing from "./servicesPages/DigitalMarketing"
import SeoEx from "./servicesPages/SeoEx"
import ErpEx from './servicesPages/ErpEx';
import CloudSolutions from './servicesPages/CloudSolutions';
import AwsEx from "./servicesPages/AwsEx"
import PosEx from './servicesPages/PosEx';







function App() {


  return (
  
  <>
  
  
    <Header />
      <Routes>
        <Route Exact path="/" Component={Home} />,
        <Route Exact path="/WhyUs" Component={WhyUs } />,
        <Route Exact path="/ServicesPage" Component={ServicesPage } />,
        <Route Exact path="/GraphicsDesign" Component={GraphicsDesign } />,
        <Route Exact path="/BlockChain" Component={BlockChain } />,
        <Route Exact path="/WebAppDevelopment" Component={WebAppDevelopment} />,
        <Route Exact path="/WebDevelopment" Component={WebDevelopment} />,
        <Route Exact path="/DigitalMarketing" Component={DigitalMarketing} />,
        <Route Exact path="/SeoEx" Component={SeoEx} />,
        <Route Exact path="/ErpEx" Component={ErpEx} />,
        <Route Exact path="/CloudSolutions" Component={CloudSolutions } />,
        <Route Exact path="/AwsEx" Component={AwsEx } />,
        <Route Exact path="/PosEx" Component={PosEx } />,
        <Route Exact path="/Overview" Component={Overview } />,
        <Route Exact path="/Testimonials" Component={Testimonials } />,
        <Route Exact path="/ContactUs" Component={ContactUs} />,
        
      </Routes>
      <Footer />
 </>    

  );
}

export default App;