import { PROJECTS } from "../constants";
import React from "react";

const Projects = ({ projectRef }) => {
  return (
    <div ref={projectRef}>
      <button className="text-5xl mt-20 flex justify-center mb-20  ease-in duration-300 hover:scale-110 hover:-translate-y-2">
        <h1 className=" ">Work</h1>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 shadow-2xl">
        {PROJECTS.map((projects, index) => (
          <a className="flex flex-wrap" href={projects.link} target = "_blank">
            <div
              key={index}
              className="container  py-20  rounded-2xl  text-black bg-gray-400 text-5xl flex-wrap ease-in duration-300  hover:scale-110 " 
            >
              <div className=" container bg-slate-100 w-1/4"></div>

              <div className="w-full lg:w-1/2 ">
                <p className="mb-2 text-5xl  px-6">{projects.title}</p>
              </div>

              <div className="w-full max-w-xl lg:w-3/4 text-xl px-6">
                <h6 className="mb-2 ">{projects.description}</h6>

                <span className=" flex justify-start gap-7 text-2xl ">
                  {projects.technologies.map((tech, index) => {
                    let colorClass = "";

                    // Apply different colors based on the technology name
                    if (tech === "React") {
                      colorClass = "text-blue-500";
                    } else if (
                      tech.toLowerCase().includes("javascript") ||
                      tech.toLowerCase().includes("js")
                    ) {
                      colorClass = "text-red-500";
                    } else if (tech.includes("CSS")) {
                      colorClass = "text-green-500";
                    } else if (tech.includes("Node")) {
                      colorClass = "text-gray-500";
                    } else if (tech.includes("HTML")) {
                      colorClass = "text-white";
                    } else if (tech.includes("Tailwind")) {
                      colorClass = "text-cyan-300";
                    } else {
                      colorClass = "text-purple-200"; // Default color
                    }
                    console.log(colorClass);
                    return (
                      <div className="flex flex-wrap">
                        
                          <span
                            key={index}
                            className={`${colorClass} rounded-t-xl m-1`}
                          >
                            {tech}
                          </span>
                        
                      </div>
                    );
                  })}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
