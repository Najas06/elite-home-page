import React from "react";
import community from "../assets/community.jpg";
import church from "../assets/church.png";
import school from "../assets/school.png";
import theater from "../assets/theater.png";
import china from "../assets/china.png";
import hospital from "../assets/hospital.png";
import shop from "../assets/shop.png";
const Community = () => {
  return (
    <section className="max-w-[1920px] mx-auto relative mt-10">
      <div className="flex h-[700px] max-lg:h-screen justify-end items-center max-md:py-10">
        <div>
          <img
            src={community}
            alt="community"
            className="absolute inset-0 -z-10 object-cover w-full h-full"
          />
        </div>
        <div className="flex gap-5 justify-between mx-20 items-center  max-lg:flex-col max-md:mx-5">
          <div className="w-[40%]  h-full max-lg:w-full ">
            <h1 className="text-5xl text-white font-medium">THE COMMUNITY</h1>
            <p className="text-2xl text-white mt-5 max-md:text-xl ">
              The neighbourhoods of Elite Insigna allows you quick access to
              major shopping facilities, medical facilities, schools and sports
              hubs.
            </p>
          </div>
          <div className="w-[60%]  h-full max-lg:w-full ">
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
              <div className=" flex flex-col items-center">
                <div className="p-5 border-4 rounded-full">
                  <img src={church} alt="church icon" className="w-20" />
                </div>
                <p className="text-center text-white mt-2">
                  Sacred Heart <br />
                  Church
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <div className="p-5 border-4 rounded-full">
                  <img src={school} alt="school icon" className="w-20" />
                </div>
                <p className="text-center text-white mt-2">
                  Devamatha CMI <br />
                  Public School
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <div className="p-5 border-4 rounded-full">
                  <img src={theater} alt="theater icon" className="w-20" />
                </div>
                <p className="text-center text-white mt-2">
                  Girija cinema <br />
                  theater
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <div className="p-5 border-4 rounded-full">
                  <img src={china} alt="temple icon" className="w-20" />
                </div>
                <p className="text-center text-white mt-2">
                  Vadakumnathan <br />
                  temple
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <div className="p-5 border-4 rounded-full">
                  <img src={hospital} alt="hospital icon" className="w-20 h-20" />
                </div>
                <p className="text-center text-white mt-2">
                  Aswini Hospital <br />
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <div className="p-5 border-4 rounded-full">
                  <img src={shop} alt="shop icon" className="w-20" />
                </div>
                <p className="text-center text-white mt-2">
                  Reliance Super mart, <br />
                  Kalyan hypermarket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
