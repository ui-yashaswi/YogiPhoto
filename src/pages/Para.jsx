import React from "react";
import para from "/images/para-bg.jpg";
import t1 from "/images/agnt-5.jpg";

function Para() {
  return (
    <div
      className=" w-full h-[80vh]  bg-fixed bg-center bg-cover relative lg:h-[70vh]"
      style={{
        backgroundImage: `url(${para})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 flex w-full h-full flex-col gap-10 items-center justify-center bg-black bg-opacity-80 text-white">

        <img src={ t1 } className="h-28 w-28  rounded-full" alt="" />

        <div className=" flex flex-col items-center gap-5">
          <h1 className="text-white text-2xl italic lg:w-[60vw] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            quos dolorum, veritatis officia qui quisquam aliquam tempore soluta
            tempora culpa!
          </h1>

          <h1 className="text-xl text-zinc-400 italic"> - Pratik Verma</h1>
        </div>
      </div>
    </div>
  );
}

export default Para;
