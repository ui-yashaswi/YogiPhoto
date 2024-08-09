import React from "react";
import homeBg from "/images/bg-1.jpg";
import WithLayout from "../Layout/WithLayout";
import About from "./About";
import Gallery from "./Gallery";
import Price from "./Price";
import Para from "./Para";
import Blog from "./Blog";
import Navsm from "./Navsm";
import Footer from "./Footer";
import HorizontalCarousel from "../component/HorizontalCarousel";
import HoverCard from "../component/HoverCard";

function Home() {
  return (
    <div>
      <Navsm />
      <div
        className="relative h-[100vh] lg:h-screen w-full bg-cover bg-fi bg-center "
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0   bg-zinc-800  bg-opacity-20 gap-10 lg:w-[70vw] text-white flex-col flex items-start justify-center lg:px-40 px-[30px]">
          <h1 className="font-bold text-6xl lg:text-9xl">Creative</h1>

          <div className="flex flex-col gap-3 text-white">
            <h1 className="lg:text-3xl text-2xl font-bold">
              Photography Portfolio theme
            </h1>
            <h1 className="lg:text-[22px] text-[20px] ">
              Lorem ipsum dolor sit amet consectetur elit. Quos quae aliquid
              voluptates. Molestiae fugiat corpor itationem labore quod quos
              expedita?
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#08c1b8] text-white px-4 font-medium">
              Buy It Now !
            </button>
            <button className="text-white border-2 border-white font-medium bg-transparent hover:bg-zinc-100 hover:text-zinc-700 duration-500 p-3">
              Discover More
            </button>
          </div>
        </div>
      </div>
      <About />
      <Gallery />
      <Price />
      {/* <HoverCard /> */}
      <HorizontalCarousel />
      <Blog />
      <Para />
      <Footer />
    </div>
  );
}

export default WithLayout(Home);
