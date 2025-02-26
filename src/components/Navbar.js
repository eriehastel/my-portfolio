import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/portfolio.png";

function Navbar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [setIsOpen]);

  // Handle Home button navigation
  const goToHome = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-400 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4 navbar-container">
        {/* home on click */}
        <button onClick={goToHome} className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto md:h-14 rounded-full transition-transform transform hover:scale-105"
          />
        </button>

        
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

       
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-400 md:flex space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block shadow-lg" : "hidden"
          } md:flex`}
        >
          <li>
            <button
              className="block w-full md:w-auto px-4 py-2 md:p-2 text-center hover:bg-blue-300 rounded transition-all"
              onClick={goToHome}
            >
              Home
            </button>
          </li>
          <li>
            <Link
              to="/about"
              className="block w-full md:w-auto px-4 py-2 md:p-2 text-center hover:bg-blue-300 rounded transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block w-full md:w-auto px-4 py-2 md:p-2 text-center hover:bg-blue-300 rounded transition-all"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block w-full md:w-auto px-4 py-2 md:p-2 text-center hover:bg-blue-300 rounded transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
