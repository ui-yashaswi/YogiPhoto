import React from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" w-full h-20 bg-white lg:flex hidden justify-between items-center lg:px-16 px-[1px] fixed z-10 top-0 left-0 drop-shadow">
      
      <div className="lg:flex items-center hidden ">
        <img className="w-16  object-cover " src={logo} alt="" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-">
            <span className="text-[#08c1b8] text-xl tracking-tighter">Y</span>
            ogi.
          </h1>
          <div className="bg-gradient-to-r from-[#08c1b8] h-[3px] w-16 "></div>
        </div>
      </div>

      <div className="lg:flex hidden items-center gap-8 font-medium text-zinc-800 ">
        <Link
          to={"/"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          Home
        </Link>
        <Link
          to={"/contacts"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          About
        </Link>
        <Link
          to={"/portfolio"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          Portfolio
        </Link>
        {/* <Link
          to={"/uhuyjhg"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          Services
        </Link>
        <Link
          to={"/ssdasdsda"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          Contact
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
