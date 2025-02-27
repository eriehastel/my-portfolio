import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";
import FloatingSocials from "./components/FloatingSocials";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content: Pushes Footer to Bottom */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} />} />
          <Route path="/about" element={<About isOpen={isOpen} />} />
          <Route path="/projects" element={<Projects isOpen={isOpen} />} />
          <Route path="/contact" element={<Contact isOpen={isOpen} />} />
        </Routes>
      </div>

      {/* Floating Socials & Dark Mode Toggle */}
      <FloatingSocials />
      <DarkModeToggle />

      {/* Footer - Always at Bottom */}
      <Footer />
    </div>
  );
}

export default App;
