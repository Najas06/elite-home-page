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
      <div className=" flex flex-col items-center w-[90%] mt-10 mx-auto relative ">
        {/* <Carousel>
          <CarouselContent>
            <CarouselItem className="basic-1/3">
              <img src={Carousel1} alt="" className="w-full object-contain"/>
            </CarouselItem>
            <CarouselItem className="basic-1/3">
              <img src={Carousel2} alt="" className="w-full object-contain"/>
            </CarouselItem>
            <CarouselItem className="basic-1/3">
              <img src={Carousel3} alt="" className="w-full object-contain"/>
            </CarouselItem>
           
          </CarouselContent>
          <CarouselPrevious className="text-[#cd1310] border-2 border-[#cd1310] w-[40px] h-[40px] max-sm:hidden"  />
          <CarouselNext className="text-[#cd1310] border-2 border-[#cd1310] w-[40px] h-[40px] max-sm:hidden " />
        </Carousel> */}
      
        <Carousel className=" relative my-10 ">
          <CarouselContent className="">
            {Array.from({length: 6}, (_, i) => (
              <CarouselItem
                key={i}
                className={`md:basis-1/3 sm:basis-1/2 ${
                  i % 2 === 0 ? "scale-75" : ""
                }`}
              >
                <img src={Carousel1} alt="" className="w-full object-contain "/>
              </CarouselItem>
            ))}
          </CarouselContent>
       <div className="relative bottom-0 flex justify-center items-center gap-3  p-5 max-sm:hidden">
     <div className="flex justify-center mt-10">
     <CarouselPrevious className="text-[#cd1310] border-2 border-[#cd1310]  w-[60px] h-[60px] absolute left-[45%] max-2xl:left-[40%]"  />
     <CarouselNext className="text-[#cd1310] border-2 border-[#cd1310] w-[60px] h-[60px]  absolute right-[45%] max-2xl:right-[40%]  " />
     </div>
       </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Amenties;
