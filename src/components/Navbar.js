import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/portfolio.png";

function Navbar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const navRef = useRef(null); // Ref for detecting outside clicks

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [setIsOpen]);

  // Close navbar on resize (with debounce)
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 768) setIsOpen(false);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  // Navigate home & close menu
  const goToHome = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-gray-300 shadow-lg fixed top-0 left-0 w-full z-50 transition-all">
      <div
        className="container mx-auto flex justify-between items-center p-4 navbar-container"
        ref={navRef}
      >
        {/* Logo / Home Button */}
        <button onClick={goToHome} className="flex items-center space-x-2">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto md:h-14 rounded-full transition-transform hover:scale-105 shadow-md"
          />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-300 text-2xl transition-transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-300 dark:bg-gray-800 md:flex space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block shadow-lg" : "hidden md:flex"
          }`}
        >
          {[
            { name: "Home", to: "/", action: goToHome },
            { name: "About", to: "/about" },
            { name: "Projects", to: "/projects" },
            { name: "Contact", to: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              {item.action ? (
                <button
                  className="block w-full md:w-auto px-4 py-2 md:p-2 text-lg font-medium bg-transparent hover:bg-blue-500 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-yellow-600 rounded transition-all"
                  onClick={item.action}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className="block w-full md:w-auto px-4 py-2 md:p-2 text-lg font-medium bg-transparent hover:bg-blue-500 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-yellow-600 rounded transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
