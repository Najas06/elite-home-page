import React from "react";
import herobg from "../assets/herobg.png";
import { GoArrowUpRight } from "react-icons/go";
const Contact = () => {
  return (
    <section className="relative p-10 max-w-[1920px] mx-auto overflow-hidden">
      <div>
        <img
          src={herobg}
          alt="herobg"
          className="w-full h-full absolute inset-0 -z-10 object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-12  py-20 max-xl:gap-0">
        <div className="col-span-2 w-[90%]  max-lg:col-span-4 max-lg:max-w-full">
          <h2 className="text-5xl text-[#cd1310] max-xl:text-3xl ">
            Elite Insigna, Apartments In{" "}
          </h2>
          <br />
          <p className="text-5xl text-[#cd1310] max-xl:text-3xl">
            Thrissur Of Quality And Comfort
          </p>
          <p className="my-10 text-xl">Welcome to 12 floors of unadulterated luxury living featuring units of 3 & 4 Bedroom options. All the homes at Elite Insignia are spacious and feature the world class contemporary architectural design along with superb amenities that include roof-top gardens, a terrace infinity pool, gym, multi-purpose community hall and much more.</p>
        </div>
      <div className="bg-white rounded-2xl max-lg:col-span-4 p-5 shadow-md w-[400px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:w-full ">
        <form className="flex flex-col items-center" >
            <p className="text-center text-xl">Avail Exciting Offers</p>
            <input type="text" placeholder="name" className="p-4 rounded-full bg-[#FFDEDE] mt-6 outline-none max-sm:w-[300px]"/>
            <input type="text" placeholder="email" className="p-4 rounded-full bg-[#FFDEDE] mt-6 outline-none max-sm:w-[300px]"/>
            <input type="text" placeholder="Phone Number" className="p-4 rounded-full bg-[#FFDEDE] mt-6 outline-none max-sm:w-[300px]"/>
            <button className="bg-[#cd1310] text-white px-5 py-2 rounded-full flex items-center gap-2 mt-6 w-full justify-center text-xl max-sm:w-[300px]">Submit <GoArrowUpRight /></button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
