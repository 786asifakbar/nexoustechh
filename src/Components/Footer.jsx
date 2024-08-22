// src/components/Footer.js
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
<>
<footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          <NavLink to="/">Logo</NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
          <li className="hover:text-gray-400">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-gray-400">
            <NavLink
              to="/whyus"
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Why Us
            </NavLink>
          </li>
          <li className="hover:text-gray-400">
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Services
            </NavLink>
          </li>
          <li className="hover:text-gray-400">
            <NavLink
              to="/overview"
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Overview
            </NavLink>
          </li>
          <li className="hover:text-gray-400">
            <NavLink
              to="/testimonials"
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Testimonials
            </NavLink>
          </li>
          <li className="hover:text-gray-400">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a8.75 8.75 0 01-2.52.69 4.4 4.4 0 001.92-2.42 8.84 8.84 0 01-2.79 1.07 4.37 4.37 0 00-7.46 3.98A12.4 12.4 0 013.14 4.86a4.37 4.37 0 001.35 5.84 4.34 4.34 0 01-1.98-.55v.06a4.37 4.37 0 003.5 4.29 4.38 4.38 0 01-1.97.07 4.37 4.37 0 004.08 3.03A8.78 8.78 0 012 19.51a12.37 12.37 0 006.72 1.97c8.07 0 12.49-6.68 12.49-12.48v-.57a8.94 8.94 0 002.19-2.28z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.36 2.64A10.32 10.32 0 005.64 2.64C2.4 5.89 2.4 11.68 5.64 14.92c1.36 1.36 3.04 2.28 4.88 2.52-.08-.28-.12-.56-.12-.84 0-2.16 1.76-3.92 3.92-3.92 1.12 0 2.12.44 2.84 1.16.24-.08.48-.16.72-.28-.08.24-.16.48-.28.72.72.72 1.16 1.72 1.16 2.84 0 2.16-1.76 3.92-3.92 3.92-.64 0-1.24-.16-1.8-.4.12.16.28.28.4.4C16 21.6 19.12 20.4 20.68 18.64A10.33 10.33 0 0022.64 5.36c-1.72 1.56-3.96 2.68-6.28 2.84.08-.28.12-.56.12-.84C16.48 3.36 13.04 2.04 18.36 2.64z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 5.64a8.75 8.75 0 01-2.52.69 4.4 4.4 0 001.92-2.42 8.84 8.84 0 01-2.79 1.07 4.37 4.37 0 00-7.46 3.98A12.4 12.4 0 013.14 4.86a4.37 4.37 0 001.35 5.84 4.34 4.34 0 01-1.98-.55v.06a4.37 4.37 0 003.5 4.29 4.38 4.38 0 01-1.97.07 4.37 4.37 0 004.08 3.03A8.78 8.78 0 012 19.51a12.37 12.37 0 006.72 1.97c8.07 0 12.49-6.68 12.49-12.48v-.57a8.94 8.94 0 002.19-2.28z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
     </>
  );
};

export default Footer;