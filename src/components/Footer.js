import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 text-center p-6 mt-10">
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-600 transition-transform transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-600 transition-transform transform hover:scale-110"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Quick Links */}
      <nav className="mb-4">
        <ul className="flex justify-center space-x-6 text-sm">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-500 dark:hover:text-yellow-600 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-500 dark:hover:text-yellow-600 transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-yellow-500 dark:hover:text-yellow-600 transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-500 dark:hover:text-yellow-600 transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Copyright */}
      <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="mt-4 bg-gray-700 dark:bg-gray-800 text-gray-300 p-2 rounded-full hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-all"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
}

export default Footer;
