import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaDiscord,
  FaTelegram,
  FaInstagram,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen && !isHovered) {
      const timer = setTimeout(() => setIsOpen(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isHovered]);

  return (
    <div
      className="fixed top-1/3 left-0 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar */}
      <div
        className={`bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-4 rounded-r-lg shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-16" : "-translate-x-full w-0"
        }`}
      >
        <ul className="space-y-4">
          {/* GitHub */}
          <li>
            <a href="https://github.com/eriehastel" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-700 dark:hover:text-yellow-500 transition" />
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a href="https://linkedin.com/in/eric-mugendi-njoka/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700 dark:hover:text-yellow-500 transition" />
            </a>
          </li>

          {/* WhatsApp */}
          <li>
            <a href="https://wa.me/254703668825" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-green-500 dark:hover:text-yellow-500 transition" />
            </a>
          </li>

          {/* Email */}
          <li>
            <a href="mailto:mugendieric13@gmail.com">
              <FaEnvelope className="text-2xl hover:text-red-500 dark:hover:text-yellow-500 transition" />
            </a>
          </li>

          {/* Discord */}
          <li>
            <a href="https://discord.com/invite/erikoh5050" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-2xl hover:text-blue-500 dark:hover:text-yellow-500 transition" />
            </a>
          </li>

          {/* Telegram */}
          <li>
            <a href="https://t.me/eriehastel" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-2xl hover:text-blue-400 dark:hover:text-yellow-500 transition" />
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a href="https://instagram.com/eriehastel" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500 dark:hover:text-yellow-500 transition" />
            </a>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className={`bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-2 rounded-r-lg shadow-md transition-all hover:bg-gray-400 dark:hover:bg-yellow-600 absolute ${
          isOpen ? "left-16" : "left-2"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
}

export default FloatingSocials;
