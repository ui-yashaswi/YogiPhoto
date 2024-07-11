import React from 'react'
import g3 from '/images/gal-3.jpg'
import { PiArrowCircleUpRight } from "react-icons/pi";


function GalleryImg() {
  return (
    <div className="relative group w-full h-72 object-cover overflow-hidden">
      <img
        src={g3}
        alt="Descriptive Alt Text"
        className="w-full lg:[25vw] h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#08c1b8] bg-opacity-80 flex items-end pb-10 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between px-3 w-full  items-center">
          <div className="flex flex-col text-white gap-2">
            <h1 className=" font-bold  text-3xl ">Prewedding</h1>
            <h1 className="">Black & White</h1>
          </div>
          <div>
            {" "}
            <PiArrowCircleUpRight className=" text-white " size={38} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryImg
