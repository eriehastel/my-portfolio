import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg"; // Update path if needed

const Home = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center">
          
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 px-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Hello, I'M <span className="text-orange-500">Eric</span></h2>
          <h1 className="text-4xl font-bold mt-2">
            <Typewriter
              words={["A Web Developer", "A Software Engineer", "A Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="mt-4 text-gray-300">
            Knack of building applications with front and back-end operations.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">Hire Me</button>
            <button className="bg-orange-500 px-6 py-2 rounded-full text-white shadow-lg hover:bg-orange-600">Get Resume</button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300">
          <img src={profilePic} alt="Eric" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Home;
