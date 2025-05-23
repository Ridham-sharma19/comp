"use client"
import React from "react";
import {motion} from "motion/react"

export default function Content() {
  return (
    <div
      className="[perspective:1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-800 flex items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0)",
        backgroundSize: "10px 10px",
      }}
    >
      <motion.button 
      whileHover={{
        rotateX:25,
        rotateY:10,
        boxShadow:"0px 20px 50px rgba(8,112,184,0.7)"
      }}
      style={{
        translateZ:100
      }}
      transition={{
        duration:0.3,
        ease:"easeInOut"
          }}

      className="group relative text-neutral-500 text-4xl rounded-lg bg-black px-12 py-4 shadow-[0_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
        <span className="group-hover:text-cyan-500 transition-colors duration-3000">Connect</span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto h-px"></span>
        <span
          className=" absolute inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto h-[4px]
                    blur-sm "
        ></span>
      </motion.button>
    </div>
  );
}
