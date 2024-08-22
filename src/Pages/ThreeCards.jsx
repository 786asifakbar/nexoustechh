import Card from './Card'; // Import the Card component
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Services = () => {
  return (
    <> 
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  p-10  ">
        <Card  
          icon={SpeedIcon} 
          title="Efficiency" 
          description="Delivering fast and optimized solutions to meet your needs."
        />
        <Card 
          icon={VerifiedIcon} 
          title="Reliability" 
          description="Ensuring consistent performance and dependability."
        /> 
        
        <Card 
          icon={LightbulbIcon} 
          title="Innovation" 
          description="Bringing creative and forward-thinking ideas to life."
        />
      </div>
    </div>
    </>
  );
};

export default Services;
