import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#fff]">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute left-0 top-0 h-full w-full bg-black/30"></div>

      <div className="relative md:leading-[50px]">
        <h1 className="px-2 text-center font-italiana text-6xl font-[400] uppercase leading-[80%] text-[#eee] md:mt-8 md:text-9xl">
          MANNA <br />{" "}
          <span className="text-4xl md:text-8xl">CORNER HOUSE</span>
        </h1>
        {/* <h1 className="px-2 text-center font-italiana text-3xl font-[400] uppercase text-[#eee] md:mt-8 md:text-8xl">
          
        </h1> */}
      </div>
    </section>
  );
};

export default Hero;
