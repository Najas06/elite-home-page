import React from "react";
import herobg from "../assets/herobg.png";
import logo from "../assets/logo.png";
import building from "../assets/buildings.png";
import star from "../assets/star.png";
import circle from "../assets/circle.png";
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
const Hero = () => {
  return (
    <section className="max-w-[1920px] mx-auto p-5 relative bg-black bg-opacity-10 ">
      <div className="relative max-sm:min-h-[80vh]   ">
        <img
          src={herobg}
          alt="herobg"
          className="w-full h-full blur-2xl absolute inset-0 -z-10 object-cover max-sm:min-h-[80vh] max-2xl:max-h-[70vh]"
        />
        {/* logo  */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-16 md:w-24" />
          <div>
            <p className="text-xl tracking-wider md:text-3xl">ELITE</p>
            <p className="text-xs tracking-wider md:text-xl">BUILDING</p>
          </div>
        </div>

        {/* hero content  */}
        <div className="flex flex-col justify-center items-center mt-10 gap-5 text-[#cd1310] xl:flex-row  ">
          <div className="flex flex-col justify-center items-center gap-5 xl:items-start xl:text-left xl:gap-10  xl:mx-10">
            <h2 className="text-5xl font-semibold tracking-wider md:text-7xl xl:text-9xl">
              "INSIGNA"
            </h2>
            <p className="flex gap-3 items-center text-xl md:text-2xl xl:text-3xl">
              <FaLocationDot /> Patturaikkal, Thrissur, Kerala
            </p>
            <button className="bg-[#cd1310] text-white px-5 py-2 rounded-full flex items-center gap-2 md:text-2xl xl:text-3xl">
              Sample Appartment Ready <GoArrowUpRight />
            </button>
            <p className="text-sm text-neutral-700 md:text-xl xl:text-2xl">
              Closer To Thrissur’s Prominent <br /> Places and Conveniences
            </p>
          </div>
          <div className="">
            <img
              src={building}
              alt=""
              className="mt-10 
              
              "
            />
          </div>
        </div>
        <img src={star} alt="star" className="absolute -right-5 top-14 w-[6%]" />
        <img
          src={circle}
          alt=" circle"
          className="absolute -left-[15%] -bottom-[15%] max-xl:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
