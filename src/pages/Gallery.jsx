import React from "react";
import { Link } from "react-router-dom";
import GalleryImg from "../component/GalleryImg";
import { ClientData } from "../data.js/galleryData";
function Gallery() {
  return (
    <div className=" w-full h-full bg-white justify-center items-center ">
      <div className=" w-full h-full justify-center items-center flex flex-col gap-5 py-20">
        <h1 className="text-zinc-800 font-bold text-4xl">Latest Works</h1>

        <h1 className=" text-zinc-400 font-medium text-sm lg:text-lg">
          My latest photo projects /
          <span className=" text-sm text-[#08c1b8] lg:text-lg">
            <Link to={"/contacts"}>View All</Link>
          </span>
        </h1>

        <div className="h-[4px] w-16 bg-[#08c1b8]"></div>
      </div>

      <div className=" w-full h-full flex-col ">
        {/* <div className=" w-full lg:flex-row flex-col h-full flex-wrap  ">
          {ClientData.map((item, idx) =>
            idx > 3 ? (
              <GalleryImg
                className="w-full lg:w-1/4 p-2"
                img={item.img}
                heading={item.heading}
                subheading={item.subheading}
              />
            ) : (
              ""
            )
          )}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full">
          {ClientData.map((item, idx) => (
            <GalleryImg
              key={idx}
              img={item.img}
              heading={item.heading}
              subheading={item.subheading}
              className="w-full h-full"
            />
          ))}
        </div>

        {/* <div className=" w-full lg:flex-row flex-col  h-full flex">
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
        </div>
        <div className=" w-full lg:flex-row flex-col  h-full flex">
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;
