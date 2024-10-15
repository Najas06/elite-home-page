import React from "react";
import banner from "../assets/banner.png";
import { GoArrowUpRight } from "react-icons/go";
const HeroAbout = () => {
  return (
    <section className="max-w-[1920px] mx-auto p-5 my-10">
      <div className="flex flex-col xl:gap-10 gap-5 text-center xl:mx-40 ">
        <h2 className=" text-[#cd1310] text-2xl md:text-4xl lg:text-6xl font-medium">
          EXPERIENCE THE LEGACY OF TRUST & <br /> CUSTOMER SATISFACTION
        </h2>
        <p className="sm:text-xs md:text-xl font-light lg:text-2xl ">
          Leveraging the rich legacy and unique experience of launching Kerala's
          own V-Guard Industries Ltd. & Wonderla Holidays Ltd, Veegaland Homes
          is the brainchild of renowned entrepreneur and humanitarian,
          Kochouseph Chittilappilly. From the leading appliance manufacturers in
          India and one of the most loved chain of amusement parks in the
          country, with parks based in Kochi, Bengaluru and Hyderabad, Veegaland
          Homes was conceptualized to bring to you our trusted service in the
          realm of real estate.
        </p>
        <p className="sm:text-xs md:text-xl font-light lg:text-2xl">
          The newest offering from the promoters of V-Guard, Wonderla and
          V-Star, Veegaland Homes aims to develop homes that cater to your needs
          and budget. Strict adherence to green building principles, dedicated
          pre and post sales customer services and unwavering commitment towards
          delivering homes on time are the cornerstones of Veegaland Homes. We
          invite you to be part of our ever-growing family of satisfied
          customers.
        </p>
      </div>
      <div className="my-10 flex justify-center items-center">
        <img src={banner} alt="banner" />
      </div>
      <div className="mt-24 gap-2 flex flex-col items-center justify-center xl:mx-40 xl:items-start">
        <h2 className="text-3xl text-[#cd1310] font-light md:text-5xl xl:text-7xl">INNOVATIVE DESIGNS,</h2>
        <h2 className="flex items-center gap-2 text-4xl font-light md:text-6xl relative xl:text-7xl mt-3 ">LASTING QUALITY <span className="opacity-60"><GoArrowUpRight className="bg-[#D47878] bg-opacity-30 p-2 rounded-full text-5xl text-[#cd1310] absolute -top-10 -right-32 w-44 h-44 max-lg:-top-20 max-md:w-28 max-md:h-28 max-md:-top-10 max-md:-right-16"/></span></h2> 
      </div>
    </section>
  );
};

export default HeroAbout;
