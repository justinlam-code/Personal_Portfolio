import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl mt-20 flex justify-center">Work</h1>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{projects.title}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              
              <h6 className="mb-2 font-semibold">
                
                {projects.description} 
                <span className="text-sm text-purple-100">
                  
                  {projects.technologies}
                </span>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
