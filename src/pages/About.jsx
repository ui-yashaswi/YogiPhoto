import React from 'react';
import abt1 from '/images/abt-2.jpg'
import abt2 from '/images/abt-1.png'
 

function About() {
  return (
    <div className="flex h-full  lg:h-[70vh] lg:flex-row flex-col w-full  ">
      <div>
        <img
          className=" lg:w-[40vw] w-full lg:h-full h-[40vh] object-cover "
          src={abt1}
          alt=""
        />
      </div>

      <div className=" lg:w-[60vw] w-full lg:h-full h-[85vh] relative">
        <img
          className=" w-full h-full object-cover bg-zinc-100 "
          src={abt2}
          alt=""
        />

        <div className="flex flex-col px-[15px]  lg:px-28 gap-5 absolute top-10 lg:top-20 left-0">
          <h1 className="text-zinc-800 text-3xl font-bold">About</h1>
          <h1 className="text-zinc-400 text-lg font-medium ">
            Who I am and what I do
          </h1>

          <div className="h-[4px] w-16 bg-[#08c1b8]"></div>
          <h1 className="text-lg text-zinc-700  leading-8">
            Hi, my name is
            <span className="font-medium text-zinc-800 text-lg ">

              Martin Vegas
            </span>
            . I am an artist and photographer. Nemo enim ipsam voluptatem quia
            voluptas aspernatur aut odit aut fugit. Vivamus at nibh tincidunt,
            bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem.
          </h1>

          <div className="flex gap-4">
            <button className="bg-[#08c1b8] text-white px-4 font-medium">
              Read More
            </button>
            <button className="text-white border-2 border-white font-medium bg-zinc-800 hover:bg-zinc-100 hover:text-zinc-700 duration-500 p-3">
              Hire Me !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
