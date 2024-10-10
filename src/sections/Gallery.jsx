import React from "react";
import gallery01 from "../assets/gallery01.png";
import gallery02 from "../assets/gallery02.png";
import gallery03 from "../assets/gallery03.png";
import gallery04 from "../assets/gallery04.png";
import gallery05 from "../assets/gallery05.png";
const Gallery = () => {
  return (
    <section className="max-w-[1920px] mx-auto bg-[#FFD1D1] p-5">
      <h2 className="text-5xl text-center text-[#cd1310] font-semibold max-lg:text-4xl max-md:text-3xl">
        GALLERY
      </h2>
      <div className="grid grid-cols-6 grid-rows-4 gap-3 my-10 max-md:grid-cols-4 max-md:grid-rows-2 max-h-[700px]">
        <div className="col-span-2 row-span-2">
          <img src={gallery01} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="col-span-2 row-span-4">
          <img src={gallery03} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src={gallery04} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src={gallery02} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src={gallery05} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
