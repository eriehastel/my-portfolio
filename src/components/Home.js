import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const { text, count } = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "PHP Developer",
      "JavaScript Developer",
      "Backend Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    // Log the typewriter text and count to ensure it's being updated
    console.log("Typewriter text:", text);
    console.log("Typewriter count:", count);
  }, [text, count]);  // Add the dependencies to log on each update

  return (
    <div id="profile" className="profile-container">
      <div className="profile-parent flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-800 px-6 md:px-16">
        {/* Profile Details and Typewriter Effect */}
        <div className="profile-details text-center md:text-left text-white flex-1">
          {/* Social Links */}
          <div className="colz flex justify-center md:justify-start space-x-6 mb-6">
            <div className="colz-icon text-3xl">
              <a href="https://www.linkedin.com/in/eric-mugendi-njoka/" className="text-blue-600 hover:text-blue-400">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="mailto:mugendieric13@gmail.com" className="text-red-600 hover:text-red-400 mx-4">
                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/eriehastel" className="text-gray-900 hover:text-gray-600">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              <a href="tel:+254703668825" className="text-green-600 hover:text-green-400 mx-4">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Introduction */}
          <div className="profile-details-name mb-4">
            <span className="primary-text text-3xl font-bold">
              Hello, I'M <span className="highlighted-text text-yellow-500">Eric</span>
            </span>
          </div>

          {/* Typewriting Effect */}
          <div className="profile-details-role mb-6">
            <h1 className="text-4xl font-semibold">
              <span>{text}</span>
            </h1>
            <span className="profile-role-tagline text-lg text-gray-400">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          {/* Buttons */}
          <div className="profile-options flex justify-center md:justify-start space-x-4">
            <button className="btn primary-btn px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-white rounded-full transition">
              Hire Me
            </button>
            <a href="ERIC.pdf" download="CV ERIC.pdf">
              <button className="btn highlighted-btn px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full transition">
                Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="profile-picture mt-8 md:mt-0 relative w-40 h-40 md:w-60 md:h-60">
          <div className="profile-picture-background bg-gray-500 rounded-full shadow-lg absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
