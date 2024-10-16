import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div className="overflox-x-hidden text-neutral-300 antialiased slec selection:bg-slate-800 selection:text-white">
      <div className="flixed top-0 -z-10 h-full w-full">
      
       
      </div>

      <Navbar />
      <div className="container mx-auto px-8 py-4 ">
      
      <Hero />
      <Projects />
      </div>

      
    </div>
  );
};

export default App;
