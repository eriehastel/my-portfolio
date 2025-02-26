import React, { useState } from "react";
import { motion } from "framer-motion";

// Project images
import logoImage from "../assets/logo.jpeg";
import valdaTechImage from "../assets/valdatechcomputers.png";
import portfolioImage from "../assets/portfolio.png";
import valdaTechHubImage from "../assets/valdatechhub.png";
import houseFurnitureImage from "../assets/housefurniture.png";
import healHouseImage from "../assets/healhouse.png";
import stVeronicaImage from "../assets/stveronica.png";
import hhHospitalImage from "../assets/hhhospital.jpg";

const projects = [
  { title: "Alpha Pro Writers", category: "PHP", link: "https://alphaprowriters.com", image: logoImage, description: "Freelance writing platform built with PHP, JavaScript, AJAX, and MySQL." },
  { title: "ValdaTech Computers", category: "WordPress", link: "https://valdatechcomputers.co.ke", image: valdaTechImage, description: "IT solutions and computer sales website built with WordPress." },
  { title: "Eric Mugendi Portfolio", category: "React JS", link: "https://eric-mugendi.netlify.app", image: portfolioImage, description: "Personal developer portfolio built with React.js and Tailwind CSS." },
  { title: "ValdaTech Hub", category: "WordPress", link: "https://valdatechhub.netlify.app", image: valdaTechHubImage, description: "Tech hub website showcasing services and innovations." },
  { title: "House Furniture", category: "JS", link: "https://housefurniture.netlify.app", image: houseFurnitureImage, description: "Furniture e-commerce platform built with JavaScript and PHP." },
  { title: "Heal House Therapy", category: "WordPress", link: "https://healhousetherapy.com", image: healHouseImage, description: "Health and therapy service website built with WordPress." },
  { title: "St. Veronica Medicare", category: "WordPress", link: "https://stveronicamedicare.org", image: stVeronicaImage, description: "Medical center website developed using WordPress." },
  { title: "HH Hospital", category: "JS", link: "https://hhhospital.netlify.app", image: hhHospitalImage, description: "Hospital website built using templates and JavaScript." },
];

function Projects({isOpen}) {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="p-10" style={{ paddingTop: isOpen ? "17.5rem" : "5rem" }}>
      {/* Section Header */}
      <motion.div 
        className="text-center mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-blue-700">Recent Works</h2>
        <p className="text-gray-600 text-lg mt-2">Showcasing some of my best projects</p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap mt-6 gap-2">
        {["All", "PHP", "JS", "React JS", "WordPress"].map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
              activeTab === tab ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects
          .filter((project) => activeTab === "All" || project.category === activeTab)
          .slice(0, showAll ? projects.length : 6)
          .map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-500 transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-40 w-full object-contain rounded-lg"
              />

              <h3 className="text-lg font-bold text-gray-800 mt-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 text-sm mt-1">{project.description}</p>
              {/* Overlay Effect */}
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center text-white font-bold text-lg opacity-0 transition-all duration-300 hover:opacity-100 hover:bg-opacity-50"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
      </motion.div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-6">
        <motion.button 
          onClick={() => setShowAll(!showAll)} 
          className="px-6 py-2 bg-blue-700 text-white rounded-md font-semibold transition hover:bg-blue-800"
          whileHover={{ scale: 1.05 }}
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      </div>
    </div>
  );
}

export default Projects;
