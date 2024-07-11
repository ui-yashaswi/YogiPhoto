import React from 'react'
import BlogCard from '../component/BlogCard';

function Blog() {
  return (
    <div className=" w-full flex flex-col py-20  lg:px-16 px-[15px] items-center justify-center ">

      <div className=" w-full justify-center  items-center flex flex-col gap-5 ">
        <h1 className="text-zinc-800 font-bold text-4xl">Services & Pricing</h1>

        <h1 className=" text-zinc-400 font-medium text-sm lg:text-lg">
          Please choose your package
        </h1>

        <div className="h-[4px] w-16 bg-[#08c1b8]"></div>
      </div>

      <div className=' w-full flex justify-between items-center flex-col gap-10 lg:flex-row pt-20'>

      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </div>


    </div>
  );
}

export default Blog
