import React from "react";

const Hero = () => {
  return (
    <div className="flex-1 ml-1 mr-10 bg-white">
      {/* Hero Section */}
      <div className="mt-7 h-[350px] bg-[#40BFFF] w-[850px] flex items-center justify-between px-10 rounded-l">
        {/* Left Content */}
        <div className="text-[#ffffff] max-w-md w-[390px] h-[137px]">
          <h1 className="font-poppins font-medium text-[30px] leading-[100%] text-white">
            Adidas Men Running <br /> Sneakers
          </h1>
          <p className="font-poppins font-normal text-sm leading-none text-white">
            Performance and design. Taken right to the edge.
          </p>

          <button className="mt-6 font-medium text-white relative inline-block">
            <span className="whitespace-nowrap">SHOP NOW</span>
            <span className="absolute left-0 -bottom-1 w-12 h-[2px] bg-white"></span>
          </button>
        </div>

        {/* Right Shoe Image */}
        <div className="w-[442px] h-[221px] flex justify-center items-center">
          <img
            src="/shoes.png"
            alt="Adidas Running Shoe"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
