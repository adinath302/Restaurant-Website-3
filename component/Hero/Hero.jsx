import React from "react";
import Leaf from "../../../assets/leaf.png";

const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* Text context here */}
          <div className="space-y-3">
            <h1 className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent">
              Yummy
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-0 right-0 "
              />
            </h1>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">
              BREAKFAST
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* Image here*/}
        </div>
      </div>
    </main>
  );
};

export default Hero;
