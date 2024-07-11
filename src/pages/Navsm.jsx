import React from 'react'
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import logo from "/images/logo.png"

function Navsm() {
    const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-full h-22 z-20 flex pl-5 bg-white fixed top-0 left-0 lg:hidden drop-shadow-lg">

      <div className="lg:hidden  flex items-center  ">
        <img className="w-16  object-cover " src={logo} alt="" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-">
            <span className="text-[#08c1b8] text-xl tracking-tighter">Y</span>
            ogi.
          </h1>
          <div className="bg-gradient-to-r from-[#08c1b8] h-[3px] w-16 "></div>
        </div>
      </div>
      
      <div
        className={`${
          sidebar ? "w-40" : "w-0"
        } h-[100vh] bg-[#08c1b8]  flex lg:hidden flex-col justify-center items-center duration-500 z-50  fixed top-0 right-0 text-zinc-100`}
      >
        <div
          onClick={() => {
            setSidebar((prev) => !prev);
          }}
          className="text-white bg-[#08c1b8] fixed top-3 right-6 w-10 lg:hidden h-10 border p-1 cursor-pointer hover:shadow-lg rounded-lg flex items-center justify-center"
        >
          <RiMenu3Line size={22} className="text-white " />
        </div>

        <div
          className={`${
            sidebar ? "flex" : "hidden"
          } flex lg:hidden items-center flex-col duration-400 justify-center gap-8`}
        >
          <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
            Home
          </h1>
          <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
            About
          </h1>
          <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
            contact us
          </h1>
          <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
            Address
          </h1>
          <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
            Services
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navsm
