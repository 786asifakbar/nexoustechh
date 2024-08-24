import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <>
      <header className="bg-slate-100 text-black shadow-2xl shadow-gray-400">
        <nav className="container mx-auto flex items-center justify-between" data-aos="fade-down">
          <div className="text-xl font-bold">
            <NavLink to="/">
              <span className="text-3xl">N</span>EX
              <span className="text-3xl">O</span>US
              <span className="text-3xl">T</span>ECH
            </NavLink>
          </div>
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
            <ul className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
              <li className="hover:text-slate-300 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out">
                <NavLink to="/" data-aos="zoom-in">Home</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out">
                <NavLink to="/WhyUs" data-aos="zoom-in">Why Us</NavLink>
              </li>
              <li className="hover:text-blue-700 hover:border-b-2 hover:border-blue-700  font-bold p-2 transition duration-300 ease-in-out">
                <NavLink to="/ServicesPage" data-aos="zoom-in">Services</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out">
                <NavLink to="/overview" data-aos="zoom-in">Overview</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out">
                <NavLink to="/testimonials" data-aos="zoom-in">Testimonials</NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  className="bg-blue-700 hover:bg-blue-400 hover:text-blue-700 text-white font-bold py-2 px-2 rounded-md transition duration-300 ease-in-out"
                  data-aos="zoom-in"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;