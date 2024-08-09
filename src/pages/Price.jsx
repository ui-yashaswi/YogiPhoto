import React from "react";
import PriceCard from "../component/PriceCard";

function Price() {
  return (
    <div className="flex flex-col py-20 lg:px-16 px-[15px]">
      <div className=" w-full h-full flex lg:flex-row flex-col justify-between items-center">
        <div className=" w-full justify-center lg:items-start items-center flex flex-col gap-5 py-10 lg:py-20">
          <h1 className="text-zinc-800 font-bold text-5xl">
            Services & Pricing
          </h1>

          <h1 className=" text-zinc-400 font-medium text-sm lg:text-lg">
            Please choose your package
          </h1>

          <div className="h-[4px] w-16 bg-[#08c1b8]"></div>
        </div>

        <h1 className="text-lg lg:pb-0 pb-10 text-zinc-800">
          Nunc euismod ipsum vel metus rhoncus, a accumsan sapien mollis. Donec
          malesuada lacus rhoncus ipsum dignissim, sed fringilla orci faucibus.
          Proin non odio dui. Donec ut tristique dolor, at interdum sem. Quisque
          finibus viverra lectus vitae pulvinar.
        </h1>
      </div>

      <div className="flex justify-between  lg:gap-0 gap-10 lg:flex-row flex-col">
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
}

export default Price;
