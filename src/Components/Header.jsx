import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <>
      <header className={`${darkMode ? 'bg-blue-700 text-sate-200' : 'bg-slate-100 text-black'} shadow-2xl  shadow-gray-400`}>
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <NavLink to="/"><span className='text-3xl'>N</span>EX<span className='text-3xl'>O</span>US<span className='text-3xl'>T</span>ECH</NavLink>
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
              <li className="hover:text-slate-300 hover:bg-blue-500 font-bold p-2 ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:bg-blue-500 font-bold p-2">
              <NavLink to="/WhyUs">Why Us</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:bg-blue-500 font-bold p-2">
                <NavLink to="/ServicesPage">Services</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:bg-blue-500 font-bold p-2">
                <NavLink to="/overview">Overview</NavLink>
              </li>
              <li className="hover:text-slate-300 hover:bg-blue-500 font-bold p-2">
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  className="bg-blue-700  hover:bg-blue-400 hover:text-blue-700 text-white font-bold  py-2 px-2 rounded-md"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button
              onClick={toggleDarkMode}
              className="m-4 p-2 rounded-full bg-blue-700 text-white hover:text-blue-700 hover:bg-white focus:outline-double"
            >
              {darkMode ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.25a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V4a.75.75 0 01.75-.75zm5.66 1.54a.75.75 0 011.06 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 010-1.06zm-9.6 0a.75.75 0 010 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53a.75.75 0 011.06 0zm9.6 9.6a.75.75 0 010 1.06.75.75 0 01-1.06 0l-.53-.53a.75.75 0 111.06-1.06l.53.53zm-10.66 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 011.06-1.06zm7.07 2.12a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM10 14a4 4 0 100-8 4 4 0 000 8zm6-4a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75A.75.75 0 0116 10zm-12 0a.75.75 0 01.75-.75H5a.75.75 0 010 1.5h-.75A.75.75 0 014 10z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;