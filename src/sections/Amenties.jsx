import React from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Amenties = () => {
  return (
    <section className="max-w-[1920px] mx-auto my-10">
      <h2 className="text-5xl text-center text-[#cd1310] font-semibold max-lg:text-4xl max-md:text-3xl">
        AMENITIES AND SPECIFICATIONS
      </h2>
      <div className=" flex flex-col items-center w-[450px] mt-10 mx-auto relative max-sm:w-[350px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="">
              <img src={Carousel1} alt="" className="w-full object-contain"/>
            </CarouselItem>
            <CarouselItem className="">
              <img src={Carousel2} alt="" className="w-full object-contain"/>
            </CarouselItem>
            <CarouselItem className="">
              <img src={Carousel3} alt="" className="w-full object-contain"/>
            </CarouselItem>
           
          </CarouselContent>
          <CarouselPrevious className="text-[#cd1310] border-2 border-[#cd1310] w-[40px] h-[40px] max-sm:hidden"  />
          <CarouselNext className="text-[#cd1310] border-2 border-[#cd1310] w-[40px] h-[40px] max-sm:hidden " />
        </Carousel>
      </div>
    </section>
  );
};

export default Amenties;
