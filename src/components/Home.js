import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ProfileImg from "../assets/profile.png";

const Home = () => {
  return (
    <div id="profile" className="profile-container min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200/80 to-purple-200/80 py-16 px-8 md:px-24 lg:px-48">

      {/* Content Box */}
      <div className="bg-gray-100 shadow-lg rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">

        {/* Profile Details and Typewriter Effect */}
        <div className="profile-details text-center md:text-left text-gray-900 flex-1 space-y-8">
          
          {/* Social Links */}
          <div className="colz flex justify-center md:justify-start space-x-6 mb-6">
            <div className="colz-icon text-4xl">
              <a href="https://www.linkedin.com/in/eric-mugendi-njoka/" className="text-blue-700 hover:text-blue-500">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="mailto:mugendieric13@gmail.com" className="text-red-600 hover:text-red-400 mx-4">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://github.com/eriehastel" className="text-gray-800 hover:text-gray-600">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="tel:+254703668825" className="text-green-700 hover:text-green-500 mx-4">
                <i className="fa fa-phone-square"></i>
              </a>
            </div>
          </div>

          {/* Introduction */}
          <div className="profile-details-name">
            <span className="primary-text text-4xl font-extrabold">
              Hello, I'M <span className="highlighted-text text-yellow-600">Eric</span>
            </span>
          </div>

          {/* Typewriter Effect */}
          <div className="profile-details-role">
            <h1 className="text-5xl font-bold">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "PHP Developer",
                  "JavaScript Developer",
                  "Backend Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <span className="profile-role-tagline text-lg text-gray-700">
              Turning complex problems into elegant, high-performance software solutions.
            </span>
          </div>

          {/* Buttons */}
          <div className="profile-options flex justify-center md:justify-start space-x-6 mt-6">
            <button className="btn primary-btn px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full transition shadow-md">
              Hire Me
            </button>
            <a href="ERIC.pdf" download="CV ERIC.pdf">
              <button className="btn highlighted-btn px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition shadow-md">
                Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="profile-picture mt-12 md:mt-0 w-48 h-48 md:w-64 md:h-64">
          <img 
            src={ProfileImg} 
            alt="Profile" 
            className="w-full h-full rounded-full shadow-xl border-4 border-blue-600 bg-gray-500"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
