import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaUser, FaPhone, FaEnvelope, FaBriefcase, FaProjectDiagram, FaHeadset, FaCode, FaVolleyballBall, FaFilm, FaGlobe, FaLaptopCode, FaGraduationCap  } from "react-icons/fa";
import ProfileImg from "../assets/profilephoto.jpeg";
import { useState } from "react";
import emailjs from "@emailjs/browser";


import logoImage from "../assets/logo.jpeg";
import valdaTechImage from "../assets/valdatechcomputers.png";
import portfolioImage from "../assets/portfolio.png";
import valdaTechHubImage from "../assets/valdatechhub.png";
import houseFurnitureImage from "../assets/housefurniture.png";
import healHouseImage from "../assets/healhouse.png";
import stVeronicaImage from "../assets/stveronica.png";
import hhHospitalImage from "../assets/hhhospital.jpg";
import kelvinImage from "../assets/kelvin.jfif";
import muchinaImage from "../assets/muchina.jfif";
import zacImage from "../assets/zac.jfif";

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

const testimonials = [
  { name: "Kelvin ", text: "Eric is an outstanding developer! His work is top-notch.", image: kelvinImage },
  { name: "Muchina", text: "Highly skilled and professional. I highly recommend!", image: muchinaImage },
  { name: "Zac", text: "Fantastic experience working with Eric. 10/10!", image: zacImage },
];



const Home = ({isOpen}) => {


  const [activeTab, setActiveTab] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  // Contact Form handling
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_fk1701q", //  EmailJS Service ID
        "template_cutflbw", //  EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "eR3O-kbgmZ7JJHILO" //  EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully! 🎉");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setSuccessMessage("Something went wrong, please try again.");
          setIsSubmitting(false);
        }
      );
  };

  

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-all duration-300">
    <div id="container" className="container mx-auto " style={{ paddingTop: isOpen ? "17.5rem" : "5rem" }}>   
    
              {/* Hero section */}
              <div id="profile" className="profile-container min-h-screen flex flex-col items-center 
              transition-all duration-300 
              bg-gradient-to-r from-blue-200/80 to-purple-200/80  
              dark:bg-black">                       
              {/* Profile Card */}
              <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl relative">
                
                {/* Left Side - Text */}
                <div className="profile-details text-center md:text-left text-gray-900 dark:text-white flex-1 space-y-8">
                  
                  <div className="profile-details-name">
                    <span className="primary-text text-4xl font-extrabold">
                      Hello, I'M <span className="highlighted-text text-yellow-600 dark:text-yellow-400">Eric</span>
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
                    <span className="profile-role-tagline text-lg text-gray-700 dark:text-gray-300">
                      Turning complex problems into elegant, high-performance software solutions.
                    </span>
                  </div>
                </div>
                
                {/* Right Side - Profile Picture */}
                <div className="profile-picture mt-12 md:mt-0 w-48 h-48 md:w-64 md:h-64">
                  <img 
                    src={ProfileImg} 
                    alt="Profile" 
                    className="w-full h-full rounded-full shadow-xl border-4 border-blue-600 dark:border-blue-400 bg-gray-500 dark:bg-gray-700"
                      style={{width: "20px",objectFit: "cover"}}
                  />
                </div>
              </div>

              {/* Statistics Section */}
              <div className="statistic-section bg-gray-200 dark:bg-gray-800 shadow-md rounded-xl p-4 flex justify-around items-center w-full max-w-3xl mt-6" 
                  style={{
                    marginTop: "-35px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.74), 0 4px 6px -2px rgba(0, 0, 0, 0.18)",
                    zIndex: "10",
                    borderRadius: "5rem",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "1rem",
                    height: "auto",
                    width: "72%"
                  }}>
                
                <div className="statistic-box flex flex-col items-center text-gray-900 dark:text-white text-center p-4">
                  <FaBriefcase className="text-4xl text-blue-600 dark:text-blue-400 mb-2" />
                  <h2 className="text-2xl font-semibold">8+</h2>
                  <span className="text-base text-gray-700 dark:text-gray-300">Years of Experience</span>
                </div>

                <div className="statistic-box flex flex-col items-center text-gray-900 dark:text-white text-center p-4">
                  <FaProjectDiagram className="text-4xl text-green-600 dark:text-green-400 mb-2" />
                  <h2 className="text-2xl font-semibold">500+</h2>
                  <span className="text-base text-gray-700 dark:text-gray-300">Completed Projects</span>
                </div>

                <div className="statistic-box flex flex-col items-center text-gray-900 dark:text-white text-center p-4">
                  <FaHeadset className="text-4xl text-purple-600 dark:text-purple-400 mb-2" />
                  <h2 className="text-2xl font-semibold">24/7</h2>
                  <span className="text-base text-gray-700 dark:text-gray-300">Customer Support</span>
                </div>

              </div>
              </div>


              
              {/* About Section */}
              <div className="about-section bg-white py-16 px-8 md:px-24 lg:px-48 relative dark:bg-gray-900 dark:text-white transition-all duration-300">
                  <div className="about-me-section bg-gray-100 shadow-md rounded-xl p-10 flex flex-col md:flex-row items-center justify-between mt-12 w-full max-w-5xl relative dark:bg-gray-600">
                      
                      {/* Heading Positioned Absolutely */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white px-4 py-2 rounded-lg shadow-md 
                      dark:bg-black transition-all duration-300"
                      style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
                          <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400">About Me</h2>
                      </div>

                      {/* Profile Image */}
                      <div className="about-image w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mt-12">
                          <img src={ProfileImg} alt="Profile" className="w-full h-full rounded-xl shadow-xl object-cover" />
                      </div>

                      {/* About Content */}
                      <div className="about-content text-gray-900 flex-1 mt-8 md:mt-0 md:ml-10 text-center md:text-left dark:text-white">
                          
                          <p className="text-lg text-gray-700 mt-4 dark:text-gray-300">
                              Passionate software engineer who enjoys problem-solving and building scalable applications. Always eager to learn and grow.
                          </p>
                          
                          {/* Contact Info */}
                          <div className="contact-info mt-6 space-y-3">
                              <p className="flex items-center text-gray-700 dark:text-gray-300">
                                  <FaUser className="text-blue-500 mr-2" /> <strong>Name:</strong> Eric Mugendi
                              </p>
                              <p className="flex items-center text-gray-700 dark:text-gray-300">
                                  <FaPhone className="text-green-500 mr-2" /> <strong>Phone:</strong> +254-703-668-825
                              </p>
                              <p className="flex items-center text-gray-700 dark:text-gray-300">
                                  <FaEnvelope className="text-red-500 mr-2" /> <strong>Email:</strong> mugendieric13@gmail.com
                              </p>
                          </div>

                          {/* Interests */}
                          <div className="my-interests mt-6">
                              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">My Interests</h3>
                              <div className="flex flex-wrap justify-center md:justify-start space-x-3 space-y-2 mt-2">
                                  <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                                      <FaCode className="mr-2" /> Technology
                                  </span>
                                  <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                                      <FaVolleyballBall className="mr-2" /> Volleyball
                                  </span>
                                  <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                                      <FaFilm className="mr-2" /> Movies
                                  </span>
                                  <span className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                                      <FaGlobe className="mr-2" /> Travel
                                  </span>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>


              {/* My Expertise Section */}
              <div id="expertise" className="expertise-section bg-gradient-to-r from-blue-200/80 to-purple-200/80 py-16 px-6 md:px-16 lg:px-32 relative dark:bg-gray-900 dark:text-white transition-all duration-300">
                  
                  {/* Section Heading */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white px-6 py-3 rounded-lg shadow-md w-fit 
                  dark:bg-black transition-all duration-300"
                  style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center">
                          My Expertise Area
                      </h2>
                  </div>

                  {/* Expertise Skills */}
                  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                      {[
                          { skill: "JavaScript", level: "95%" },
                          { skill: "React.js", level: "95%" },
                          { skill: "Node.js", level: "90%" },
                          { skill: "PHP", level: "95%" },
                          { skill: "MongoDB", level: "85%" },
                          { skill: "MySQL", level: "95%" },
                          { skill: "Express.js", level: "85%" },
                          { skill: "RESTful APIs & OAuth", level: "85%" },
                          { skill: "Tailwind CSS", level: "92%" },
                          { skill: "AWS", level: "72%" },
                          { skill: "WebSockets", level: "80%" },
                          { skill: "Docker", level: "70%" }
                      ].map((item, index) => (
                          <div key={index} className="space-y-2">
                              
                              {/* Skill Name & Percentage */}
                              <div className="flex justify-between text-gray-800 font-semibold dark:text-gray-300">
                                  <span>{item.skill}</span>
                                  <span>{item.level}</span>
                              </div>
                              
                              {/* Progress Bar */}
                              <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: item.level }}></div>
                              </div>

                          </div>
                      ))}
                  </div>
              </div>


              {/* Awesome Journey */}
              <div className="journey-section bg-white py-16 px-6 md:px-16 lg:px-32 relative mt-16 dark:bg-gray-900 dark:text-white transition-all duration-300">
                  
                  {/* Title */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-gray-100 px-6 py-3 rounded-lg shadow-lg w-fit flex items-center space-x-2 
                  dark:bg-black transition-all duration-300"
                  style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center">
                          🚀 My Journey
                      </h2>
                  </div>

                  {/* Education & Experience Container */}
                  <div className="max-w-5xl mx-auto bg-gray-50 shadow-lg rounded-xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300 
                  dark:bg-gray-600 dark:shadow-md">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          
                          {/* Education Section */}
                          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 
                          dark:bg-gray-900 dark:text-gray-300">
                              <h3 className="text-2xl font-semibold text-blue-700 dark:text-yellow-400 flex items-center mb-4">
                                  <FaGraduationCap className="mr-2 text-blue-500 dark:text-yellow-400" /> Education
                              </h3>
                              <ul className="space-y-4">
                                  {[
                                      { title: "BSc in Information Technology", place: "Karatina University", year: "(2018 - 2022)" },
                                      { title: "Full Stack Development Certification", place: "Online Course", year: "(2022)" },
                                      { title: "Full Stack Development", place: "Alison", year: "" },
                                      { title: "Self-Taught Programmer", place: "Continuous Learning", year: "" }
                                  ].map((edu, index) => (
                                      <li key={index} className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-md shadow-sm 
                                      dark:bg-gray-700 dark:border-yellow-400">
                                          <strong>{edu.title}</strong> - <span className="text-gray-600 dark:text-gray-300">{edu.place} {edu.year}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          {/* Experience Section */}
                          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 
                          dark:bg-gray-900 dark:text-gray-300">
                              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 flex items-center mb-4">
                                  <FaLaptopCode className="mr-2 text-green-500 dark:text-green-400" /> Experience
                              </h3>
                              <ul className="space-y-4">
                                  {[
                                      { title: "IT Manager", company: "ValdaTech Computers", status: "(Current)" },
                                      { title: "Freelance Developer", company: "Remote", status: "(Ongoing)" },
                                      { title: "Software Developer", company: "Mobirevo", status: "(Previous)" },
                                      { title: "Intern", company: "Muva Tech", status: "(Previous)" }
                                  ].map((exp, index) => (
                                      <li key={index} className="p-4 border-l-4 border-green-500 bg-green-50 rounded-md shadow-sm 
                                      dark:bg-gray-700 dark:border-green-400">
                                          <strong>{exp.title}</strong> - <span className="text-gray-600 dark:text-gray-300">{exp.company} {exp.status}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>

                      </div>
                  </div>

              </div>



              {/* What I Offer */}
              <section id="offer" className="py-16 bg-gradient-to-r from-blue-200/80 to-purple-200/80 relative dark:bg-gray-900 dark:text-white transition-all duration-300">
                  
                  <div className="max-w-6xl mx-auto text-center px-4">
                      
                      {/* Section Title */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white px-6 py-3 rounded-lg shadow-md w-fit 
                      dark:bg-black transition-all duration-300"
                      style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
                          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center tracking-wide">
                              My Expertise Area
                          </h2>
                      </div>

                      {/* Subtitle */}
                      <p className="text-black text-lg mt-16 text-center px-4 dark:text-gray-300">
                          Bringing your ideas to life with my expertise
                      </p>
                  </div>

                  {/* Expertise Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto px-4">
                      {[
                          { title: "Full Stack Development", desc: "Building robust web applications.", icon: "💻" },
                          { title: "Backend Development", desc: "Efficient APIs and server-side logic.", icon: "⚙️" },
                          { title: "React & UI Development", desc: "Modern, interactive user interfaces.", icon: "🎨" },
                          { title: "WordPress & CMS", desc: "Custom themes, plugins & optimization.", icon: "📝" },
                          { title: "Database Management", desc: "MySQL, MongoDB, scalable handling.", icon: "🗄️" },
                          { title: "System Development", desc: "Tailored solutions for businesses.", icon: "🚀" }
                      ].map((service, index) => (
                          <div key={index} className="bg-white p-5 shadow-md border border-gray-200 rounded-lg text-center hover:shadow-xl transition w-full sm:w-60 mx-auto 
                          dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300">
                              <span className="text-3xl mb-2 block">{service.icon}</span>
                              <h3 className="text-lg font-semibold text-blue-700 dark:text-yellow-400 mt-2">{service.title}</h3>
                              <p className="text-gray-600 text-sm mt-1 dark:text-gray-400">{service.desc}</p>
                          </div>
                      ))}
                  </div>

              </section>




              {/* Projects Section */}
              <section className="projects-section bg-gray-100 py-16 px-6 md:px-16 lg:px-32 shadow-lg rounded-lg relative mt-16 
              dark:bg-gray-600 dark:text-white transition-all duration-300 ">

                  <div className="max-w-6xl mx-auto text-center relative">
                      
                      {/* Section Title */}
                      <div className="absolute top-[-9.5rem] left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-md w-fit 
                      dark:bg-black dark:text-yellow-400 transition-all duration-300"
                      style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center">
                              Recent Works
                          </h2>
                      </div>

                      {/* Subtitle */}
                      <p className="text-black text-lg mt-16 text-center dark:text-gray-300">
                          Showcasing some of my best projects
                      </p>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex justify-center flex-wrap space-x-2 md:space-x-4 mt-6">
                      {["All", "PHP", "JS", "React JS", "WordPress"].map((tab, index) => (
                          <button
                              key={index}
                              onClick={() => setActiveTab(tab)}
                              className={`px-4 py-2 rounded-full text-sm font-semibold transition w-full sm:w-auto 
                              ${activeTab === tab 
                                  ? "bg-blue-700 text-white shadow-md" 
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                              }`}
                          >
                              {tab}
                          </button>
                      ))}
                  </div>

                  {/* Projects Grid */}
                  <div id="projectsGrid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
                      {projects
                          .filter((project) => activeTab === "All" || project.category === activeTab) // Filter by category
                          .slice(0, showAll ? projects.length : 3) // Limit to 3 unless showAll is true
                          .map((project, index) => (
                              <div
                                  key={index}
                                  className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-2xl hover:border-blue-500 transition transform hover:-translate-y-1 cursor-pointer 
                                  dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400"
                                  onMouseEnter={() => setHoveredProject(project)}
                                  onMouseLeave={() => setHoveredProject(null)}
                              >
                                  <img src={project.image} alt={project.title} className="h-50 object-cover rounded-md transition-transform duration-300 hover:scale-105" />
                                  <h3 className="text-lg font-semibold text-gray-800 dark:text-yellow-400 mt-3">
                                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-yellow-400 hover:underline">
                                          {project.title}
                                      </a>
                                  </h3>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                                  {hoveredProject === project && (
                                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 rounded-lg 
                                      dark:bg-gray-900 dark:bg-opacity-80">
                                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white dark:text-yellow-300 text-lg font-bold hover:underline">
                                              View Project
                                          </a>
                                      </div>
                                  )}
                              </div>
                          ))}
                  </div>

                  {/* Show More / Show Less Button */}
                  <div className="text-center mt-6">
                      <button 
                          onClick={() => setShowAll(!showAll)} 
                          className="px-6 py-2 bg-blue-700 text-white rounded-md font-semibold transition hover:bg-blue-800 
                          dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-600"
                      >
                          {showAll ? "Show Less" : "Show More"}
                      </button>
                  </div>

              </section>

              

              
             {/* Testimonials Section */}
            <section id="testimonials" className="testimonials-section bg-gradient-to-r from-blue-200/80 to-purple-200/80 relative py-16 px-6 md:px-16 lg:px-32 shadow-lg rounded-lg mt-16 
            dark:bg-gray-900 dark:text-white transition-all duration-300">

                <div className="max-w-6xl mx-auto text-center px-4">
                    
                    {/* Section Title */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white px-6 py-3 rounded-lg shadow-md w-fit 
                    dark:bg-black dark:text-yellow-400 transition-all duration-300"
                    style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center tracking-wide">
                            Testimonials
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="text-black text-lg mt-16 text-center px-4 dark:text-gray-300">
                        What my clients say about me
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} 
                        className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-full md:w-1/3 
                        dark:bg-gray-800 dark:text-gray-300 dark:shadow-lg">
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-blue-500 dark:border-yellow-400" />
                            <p className="text-gray-700 italic dark:text-gray-400">"{testimonial.text}"</p>
                            <h4 className="text-lg font-semibold text-blue-700 dark:text-yellow-400 mt-2">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>

            </section>




              {/* Get in Touch Section */}
              <section className="contact-section bg-gray-100 py-16 px-6 md:px-16 lg:px-32 shadow-lg rounded-lg mt-16 relative 
              dark:bg-gray-600 dark:text-white transition-all duration-300">

                  <div className="max-w-6xl mx-auto text-center px-4">
                      {/* Section Title */}
                      <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white px-6 py-3 rounded-lg shadow-md w-fit 
                          dark:bg-black dark:text-yellow-400 transition-all duration-300"
                          style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}
                      >
                          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center tracking-wide">
                              Get in Touch
                          </h2>
                      </div>

                      {/* Subtitle */}
                      <p className="text-black text-lg mt-16 text-center px-4 dark:text-gray-300">
                          Have a project in mind? Let's work together!
                      </p>
                  </div>

                  {/* Contact Form */}
                  <form
                      onSubmit={handleSubmit}
                      className="mt-8 max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-200 
                      dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  >
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Name</label>
                          <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              placeholder="Your Name"
                              required
                          />
                      </div>

                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Email</label>
                          <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              placeholder="Your Email"
                              required
                          />
                      </div>

                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Message</label>
                          <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              placeholder="Your Message"
                              required
                          />
                      </div>

                      {/* Submit Button */}
                      <button
                          type="submit"
                          className={`w-full py-3 text-white rounded-lg font-semibold transition 
                          ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 dark:bg-yellow-500 dark:hover:bg-yellow-600"}`}
                          disabled={isSubmitting}
                      >
                          {isSubmitting ? "Sending..." : "Send Message"}
                      </button>

                      {/* Success Message */}
                      {successMessage && <p className="text-green-600 text-center mt-4 dark:text-green-400">{successMessage}</p>}
                  </form>

              </section>




    </div>
    </div>
    
          



    
    
    
  );
};

export default Home;
