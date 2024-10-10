import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoArrowUpRight } from "react-icons/go";
const Customer = () => {
  return (
    <section className="max-w-[1920px] mx-auto my-20">
      <h2 className="text-[#cd1310] text-5xl text-center font-semibold max-md:text-3xl">
        WHAT OUR CUSTOMERS SAY ?
      </h2>
      <div className="mt-10 relative max-w-[1000px] border mx-auto max-lg:max-w-[800px] max-md:max-w-[600px] max-sm:max-w-[400px]">
        <hr className="border-[#cd1310] max-w-[900px] mx-auto max-lg:max-w-[700px] max-md:max-w-[500px] max-sm:max-w-[300px]" />
        <p className="absolute -top-5 text-9xl text-[#cd1310] font-semibold">
          "
        </p>
        <p className="absolute right-0 -top-5 text-9xl text-[#cd1310] font-semibold">
          "
        </p>
      </div>
      <div className="mt-10 flex justify-center border border-pink-700 flex-col gap-5 max-w-[1000px] mx-auto max-lg:max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[400px]items-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <iframe
                className="border-2 w-full border-[#cd1310] rounded-3xl"
                height="500"
                src="https://www.youtube.com/embed/AFeZorXeI8w?si=WwIgREllH2MyuOY_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                className="border-2 w-full border-[#cd1310] rounded-3xl"
                height="500"
                src="https://www.youtube.com/embed/AFeZorXeI8w?si=WwIgREllH2MyuOY_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                className="border-2 w-full border-[#cd1310] rounded-3xl"
                height="500"
                src="https://www.youtube.com/embed/AFeZorXeI8w?si=WwIgREllH2MyuOY_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-[#cd1310] border-2 border-[#cd1310] w-[40px] h-[40px] max-sm:hidden" />
          <CarouselNext className="text-[#cd1310] border-2 border-[#cd1310] w-[40px] h-[40px] max-sm:hidden " />
        </Carousel>
      </div>
      <div className="my-10">
        <h2 className="text-center text-5xl">WHAT'S NEXT?</h2>
        <p className="text-center mt-5 max-w-[900px] mx-auto text-xl">We understand that you are considering different options. We'd like to provide you with a complete understanding of our unique features and how we propose value for your money. Talk to one of us, simply get all your queries answered and be more informed about home features.</p>
        <div className="mt-10 flex justify-center items-center gap-5 max-sm:flex-col">
            <button className="bg-[#cd1310] text-white px-5 py-2 rounded-full flex items-center gap-2 text-xl font-medium">Request A Callback <GoArrowUpRight /></button>
            <button className="border-2 border-black px-5 py-2 rounded-full flex items-center gap-2 text-xl font-medium">Visit Website <GoArrowUpRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Customer;
