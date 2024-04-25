"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";



function Herosection() {
  const words = [
    {
      text: "Build",
      className: "text-white dark:text-white-500",
    },
    {
      text: "awesome",
      className: "text-white dark:text-white-500",
    },
    {
      text: "apps",
      className: "text-white dark:text-white-500",
    },
    {
      text: "with",
      className: "text-white dark:text-white-500",
    },
    {
      text: "SINGULARITY.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
    
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4 ">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold h-[10rem]">
        Welcome to Singularity.
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 ">
        Welcome to Singularity, the platform where you can get a website for yourself.
        If you are designer and dont know how to code then weve got you covered 
        vist the playground and desgin a webpage for yourself then leave the coding part to us!
      </p>
      <div className="  w-full flex ">
      <Button className=" bg-[#60A5FA] rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  flex relative z-10 mt-4 mx-auto ">Get Started <ArrowRight/></Button>
      </div>
    </div>
    <div className=" w-full flex"><TypewriterEffectSmooth className=" mx-auto " words={words} /></div>
    <BackgroundBeams />
  </div>
  )
}

export default Herosection