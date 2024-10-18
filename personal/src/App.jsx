import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {

  
  const [isIntersecting, setIsIntersecting] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as necessary
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
      console.log
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
   
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-800 selection:text-white">
      <div className="container mx-auto">  <Navbar isIntersecting={isIntersecting} /></div>

      {/* Pass the isIntersecting state to Navbar */}
     

      <div className="container mx-auto px-60 ">
        <Hero />
        {/* Pass the projectRef to the Projects component */}
        <Projects projectRef={projectRef} />
      </div>
    </div>

  );
};

export default App;
