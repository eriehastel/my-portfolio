import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaUser, FaPhone, FaEnvelope, FaBriefcase, FaProjectDiagram, FaHeadset, FaCode, FaVolleyballBall, FaFilm, FaGlobe } from "react-icons/fa";
import ProfileImg from "../assets/profile.png";

const Home = () => {
  return (
    <div id="container" className="container mx-auto">
              <div id="profile" className="profile-container min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-200/80 to-purple-200/80 py-16 px-8 md:px-24 lg:px-48">
                        
                        <div className="bg-gray-100 shadow-lg rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl relative">
                          
                          <div className="profile-details text-center md:text-left text-gray-900 flex-1 space-y-8">
                            
                            <div className="profile-details-name">
                              <span className="primary-text text-4xl font-extrabold">
                                Hello, I'M <span className="highlighted-text text-yellow-600">Eric</span>
                              </span>
                            </div>

                            <div className="profile-details-role">
                              <h1 className="text-5xl font-bold">
                                <Typewriter
                                  words={["Software Engineer", "Full Stack Developer", "MERN Stack Developer", "PHP Developer", "JavaScript Developer", "Backend Developer"]}
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
                          </div>
                          
                          <div className="profile-picture mt-12 md:mt-0 w-48 h-48 md:w-64 md:h-64">
                            <img 
                              src={ProfileImg} 
                              alt="Profile" 
                              className="w-full h-full rounded-full shadow-xl border-4 border-blue-600 bg-gray-500"
                            />
                          </div>
                    </div>

                    <div className="statistic-section bg-gray shadow-md rounded-xl p-4 flex justify-around items-center w-full max-w-3xl mt-6" 
                    style={{marginTop: "-40px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.74), 0 4px 6px -2px rgba(0, 0, 0, 0.18)",
                    zIndex: "10",
                    borderRadius: "5rem",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    backgroundColor: "darkgray",
                    padding: "1rem",
                    height: "auto",
                    width: "72%",
                    
                    }}>
                      <div className="statistic-box flex flex-col items-center text-gray-800 text-center p-3">
                        <FaBriefcase className="text-3xl text-blue-600 mb-2" />
                        <h2 className="text-xl font-bold">8+</h2>
                        <span className="text-sm">Years Experience</span>
                      </div>
                      <div className="statistic-box flex flex-col items-center text-gray-800 text-center p-3">
                        <FaProjectDiagram className="text-3xl text-green-600 mb-2" />
                        <h2 className="text-xl font-bold">500+</h2>
                        <span className="text-sm">Projects Completed</span>
                      </div>
                      <div className="statistic-box flex flex-col items-center text-gray-800 text-center p-3">
                        <FaHeadset className="text-3xl text-purple-600 mb-2" />
                        <h2 className="text-xl font-bold">Support</h2>
                        <span className="text-sm">Online 24/7</span>
                      </div>
                    </div>
              </div>

              <div className="about-section bg-gray-100 py-16 px-8 md:px-24 lg:px-48">
                                <div className="about-me-section bg-white shadow-md rounded-xl p-10 flex flex-col md:flex-row items-center justify-between mt-12 w-full max-w-5xl">
                                  
                                  <div className="about-image w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                                    <img src={ProfileImg} alt="Profile" className="w-full h-full rounded-xl shadow-xl object-cover" />
                                  </div>

                                  <div className="about-content text-gray-900 flex-1 mt-8 md:mt-0 md:ml-10 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-blue-700">About Me</h2>
                                    <p className="text-lg text-gray-700 mt-4">
                                      Passionate software engineer who enjoys problem-solving and building scalable applications. Always eager to learn and grow.
                                    </p>
                                    
                                    <div className="contact-info mt-6 space-y-3">
                                      <p className="flex items-center text-gray-700">
                                        <FaUser className="text-blue-500 mr-2" /> <strong>Name:</strong> Eric Mugendi
                                      </p>
                                      <p className="flex items-center text-gray-700">
                                        <FaPhone className="text-green-500 mr-2" /> <strong>Phone:</strong> +254-703-668-825
                                      </p>
                                      <p className="flex items-center text-gray-700">
                                        <FaEnvelope className="text-red-500 mr-2" /> <strong>Email:</strong> mugendieric13@gmail.com
                                      </p>
                                    </div>

                                    <div className="my-interests mt-6">
                                      <h3 className="text-xl font-semibold text-gray-800">My Interests</h3>
                                      <div className="flex flex-wrap justify-center md:justify-start space-x-3 space-y-2 mt-2">
                                        <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                                          <FaCode className="mr-2" /> Technology
                                        </span>
                                        <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                                          <FaVolleyballBall className="mr-2" /> Volleyball
                                        </span>
                                        <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                                          <FaFilm className="mr-2" /> Movies
                                        </span>
                                        <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                                          <FaGlobe className="mr-2" /> Travel
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                </div>
              </div>
    </div>
    
  );
};

export default Home;
