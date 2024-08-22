import React from 'react';
import Slider from 'react-slick';
import { FaReact, FaNodeJs, FaAws, FaCss3Alt, FaHtml5, FaJsSquare, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Databases', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Skills</h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col items-center justify-center bg-blue-700 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;