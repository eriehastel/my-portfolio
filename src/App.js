import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} />} />
          <Route path="/about" element={<About isOpen={isOpen} />} />
          <Route path="/projects" element={<Projects isOpen={isOpen} />} />
          <Route path="/contact" element={<Contact isOpen={isOpen} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
