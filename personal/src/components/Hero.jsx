import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="  pb-4 lg:mb-35 mt-72 ease-in duration-300 ">
      <div className="flex flex-wrap">
        <div className="flex flex-col items-start">
          <h1 className="  pb-6  text-6xl font-bold tracking-tight lg:mt-16 lg:text:8xl  
          bg-gradient-to-r opacity-90 from-lime-300 via-lime-100 to-cyan-300 bg-clip-text   text-transparent m-0 shadow-2xl">
            justin lam
          </h1>
        
          <span className=" font-medium bg-white bg-clip-text text-5xl tracking-tight text-transparent ">
         hello!
          </span>
          
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter mb-96">
            {HERO_CONTENT}
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
