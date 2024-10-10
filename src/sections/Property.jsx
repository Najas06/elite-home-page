import React from "react";
import circle from "../assets/circle.png";
import prop1 from "../assets/prop1.webp";
import prop2 from "../assets/prop2.png";
import prop3 from "../assets/prop3.png";
import { FaLocationDot } from "react-icons/fa6";
import comp1 from "../assets/comp1.png";
import comp2 from "../assets/comp2.png";
import comp3 from "../assets/comp3.png";
import build from "../assets/tdesign_town.png";
import hospital from "../assets/fa-regular_hospital.png";
import train from "../assets/ic_outline-directions-railway.png";
import tape from "../assets/carbon_area-custom.png";
import bed from '../assets/mdi_guest-room-outline.png'
import { GoArrowUpRight } from "react-icons/go";
const Property = () => {
  return (
    <section className="max-w-[1920px] mx-auto overflow-x-hidden">
      <div className="relative ">
        <div className=" relative">
        <img src={circle} alt="circle" className="absolute top-0 -left-[5%]" />
          <div className="p-5 flex items-center max-lg:flex-col max-lg:gap-3 gap-36 justify-center">
            <div className=" relative flex flex-col items-center bg-[#FFDCDC] rounded-3xl">
              <img
                src={prop1}
                alt="prop1"
                className="max-w-[400px] rounded-lg h-[500px]"
              />
              <p className="flex items-center gap-2 text-center absolute bottom-0 bg-[#DC6B69] px-3 py-1  text-white font-semibold  rounded-b-lg w-[400px]">
                <FaLocationDot /> TRIVANDRUM
              </p>
              <p className="absolute bg-yellow-400 p-2 rounded-lg text-white font-semibold top-1">
                New Lunch
              </p>
            </div>
            <div className="flex gap-10 flex-col items-center">
              <img src={comp1} alt="" className="w-[200px]" />
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center ">
                  <img
                    src={build}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg "
                  />
                  <p className="text-center">
                    Trivandram Town
                    <br />
                    12.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={hospital}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    Medical College
                    <br />
                    12.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={train}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    Railway Station
                    <br />
                    16.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <img
                    src={tape}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    603-1223 Sq Ft
                    <br />
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <img
                    src={bed}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    1,2 & 3 BHK
                    <br />
                  </p>
                </div>
              </div>
                <button className="bg-[#cd1310] px-5 py-2 rounded-full text-white flex items-center text-xl">Enquire Now <GoArrowUpRight/></button>
            </div>
          </div>
        </div>
        <div className=" relative">
        <img
          src={circle}
          alt="circle"
          className="absolute -right-[5%] "
        />
          <div className="p-5 flex items-center max-lg:flex-col max-lg:gap-3 gap-36 justify-center flex-row-reverse my-20">
            <div className=" relative flex flex-col items-center bg-[#FFDCDC] rounded-3xl">
              <img
                src={prop2}
                alt="prop1"
                className="max-w-[400px] rounded-lg h-[500px]"
              />
              <p className="flex items-center gap-2 text-center absolute bottom-0 bg-[#DC6B69] px-3 py-1  text-white font-semibold  rounded-b-lg w-[400px]">
                <FaLocationDot /> TRIVANDRUM
              </p>
              <p className="absolute bg-yellow-400 p-2 rounded-lg text-white font-semibold top-1">
                New Lunch
              </p>
            </div>
            <div className="flex gap-10 flex-col items-center">
              <img src={comp2} alt="" className="w-[200px]" />
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center ">
                  <img
                    src={build}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg "
                  />
                  <p className="text-center">
                    Trivandram Town
                    <br />
                    12.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={hospital}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    Medical College
                    <br />
                    12.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={train}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    Railway Station
                    <br />
                    16.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <img
                    src={tape}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    603-1223 Sq Ft
                    <br />
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <img
                    src={bed}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    1,2 & 3 BHK
                    <br />
                  </p>
                </div>
              </div>
                <button className="bg-[#cd1310] px-5 py-2 rounded-full text-white flex items-center text-xl">Enquire Now <GoArrowUpRight/></button>
            </div>
          </div>
        </div>
        <div className=" relative">
        <img
          src={circle}
          alt="circle"
          className="absolute -left-[5%] bottom-0"
        />
          <div className="p-5 flex items-center max-lg:flex-col max-lg:gap-3 gap-36 justify-center">
            <div className=" relative flex flex-col items-center bg-[#FFDCDC] rounded-3xl">
              <img
                src={prop3}
                alt="prop1"
                className="max-w-[400px] rounded-lg h-[500px]"
              />
              <p className="flex items-center gap-2 text-center absolute bottom-0 bg-[#DC6B69] px-3 py-1  text-white font-semibold  rounded-b-lg w-[400px]">
                <FaLocationDot /> TRIVANDRUM
              </p>
              <p className="absolute bg-yellow-400 p-2 rounded-lg text-white font-semibold top-1">
                New Lunch
              </p>
            </div>
            <div className="flex gap-10 flex-col items-center">
              <img src={comp3} alt="" className="w-[200px]" />
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center ">
                  <img
                    src={build}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg "
                  />
                  <p className="text-center">
                    Trivandram Town
                    <br />
                    12.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={hospital}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    Medical College
                    <br />
                    12.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={train}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    Railway Station
                    <br />
                    16.3 Km
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <img
                    src={tape}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    603-1223 Sq Ft
                    <br />
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <img
                    src={bed}
                    alt=""
                    className="w-15 h-15 border border-[#cd1310] p-3 rounded-lg"
                  />
                  <p className="text-center">
                    1,2 & 3 BHK
                    <br />
                  </p>
                </div>
              </div>
                <button className="bg-[#cd1310] px-5 py-2 rounded-full text-white flex items-center text-xl">Enquire Now <GoArrowUpRight/></button>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Property;
