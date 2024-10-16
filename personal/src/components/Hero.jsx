import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="border-b border-neutral-50 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="flex flex-col items-start">
          <h1 className=" pb-6  text-6xl font-bold tracking-tight lg:mt-16 lg:text:8xl  bg-gradient-to-r from-slate-950 via-slate-700 to-gray-800 bg-clip-text   text-transparent m-0">
            justin lam
          </h1>
          <span className=" font-medium bg-white bg-clip-text text-5xl tracking-tight text-transparent ">
            self-proclaimed pro dancer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            {HERO_CONTENT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
