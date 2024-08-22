// import { SpeedIcon } from '@mui/icons-material/Speed';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Card = ({ icon: Icon, title, description }) => {
  return (
    <> 
    <div className="flex flex-col items-center p-6 bg-white hover:bg-blue-600 rounded-lg shadow-md border-y-2 border-x-2 hover:shadow-xltransition-shadow duration-500 hover:text-white ">
      <div className="text-blue-500 mb-4 hover:text-white">
        <Icon style={{ fontSize: 48 }} />
      </div>
      <h3 className="text-xl font-semibold mb-2 hover:text-white">{title}</h3>
      <p className="text-black-600 text-center hover:text-white">{description}</p>
    </div>
    </>
  );
};

export default Card;