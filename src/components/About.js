import React from "react";
import profileImage from "../assets/profilephoto.jpeg";

const About = ({ isOpen }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <div 
        className="container mx-auto transition-all duration-300" 
        style={{ paddingTop: isOpen ? "17.5rem" : "5rem" }}
      >
        <section 
          className="bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-800 dark:to-gray-900 py-12 px-6 md:px-20 lg:px-40" 
        >
          <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col items-center backdrop-blur-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-yellow-400 dark:shadow-md dark:shadow-blue-500 mb-6">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 w-full">
              {/* Personal Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-white dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500 dark:px-4 dark:py-2 dark:rounded-lg dark:shadow-lg mb-4 text-center md:text-left">
                  Personal Skills
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Critical-thinking</li>
                  <li>Problem-solving</li>
                  <li>Oral and written communication</li>
                  <li>Leadership</li>
                  <li>Time management</li>
                  <li>Attention to detail</li>
                  <li>Adaptability & willingness to learn</li>
                  <li>Creativity & innovation</li>
                  <li>Patience & persistence</li>
                  <li>Collaboration & teamwork</li>
                  <li>Emotional intelligence</li>
                  <li>Self-motivation & discipline</li>
                  <li>Ability to work under pressure</li>
                </ul>
              </div>

              {/* Professional Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-white dark:bg-gradient-to-r dark:from-green-500 dark:to-teal-500 dark:px-4 dark:py-2 dark:rounded-lg dark:shadow-lg mb-4 text-center md:text-left">
                  Professional Skills
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Software Engineer</li>
                  <li>Full-Stack Developer</li>
                  <li>React.js / Node.js / Express.js / Socket.io</li>
                  <li>TypeScript / JavaScript / JSX</li>
                  <li>MySQL / MongoDB</li>
                  <li>PHP / JavaScript / C#</li>
                  <li>Responsive Web Developer</li>
                  <li>RESTful APIs & OAuth</li>
                  <li>Docker & AWS (Cloud Deployment)</li>
                  <li>Git & CI/CD Pipelines</li>
                  <li>Agile Development & Remote Team Collaboration</li>
                </ul>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="flex justify-center mt-8">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-48 h-48 rounded-full shadow-lg border-4 border-blue-400 dark:border-yellow-500" 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
