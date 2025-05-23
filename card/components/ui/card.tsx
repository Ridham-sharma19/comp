"use client";
import React from "react";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { X, MessageSquareText } from "lucide-react";
import { AnimatePresence, motion } from "motion/react"

export function Card() {
  const [open, setOpen] = useState(true);
  return (
    <><AnimatePresence>
    {open &&(
    <motion.div
    initial={{
        opacity:0,
        scale:0.98,
        filter:"blur(10px)"
    }}
    animate={{
        opacity:1,
        scale:1,
        filter:"blur(0px)"
    }}
    exit={{
        opacity:0,
        scale:0.98,
        filter:"blur(10px)"
    }}
    transition={{
        duration:0.3,
        ease:"easeInOut"
    }}
      className={cn(
        "w-72 min-h-[26rem] h-[26rem] rounded-xl bg-white-400",
        "shadow-[0_3px_3px_rgba(0,0,0,0.06),0_4px_6px_rgba(34,42,53,0.06),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] p-6 flex flex-col"
      )}
    >
      <h2 className="text-[10px] font-bold">framer from manupaji</h2>
      <p className="text-neutral-600 text-[8px]">what a great experience!!</p>
      <div className="flex items-center justify-center"></div>
      <div className="flex items-center justify-center">
        <button onClick={()=>setOpen(false)} className="flex items-center gap-1 text-[10px shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  px-2 py-1 mt-4 rounded-md">
          <Image
            height={50}
            width={50}
            alt="logo"
            src="/motionkeliye.jpg"
            className="h-4 w-4"
          />
          Connect
          <X className="h-4 w-4 text-neutral-400" />
        </button>
      </div>
      <div className="flex-1 bg-gray-100 mt-4  rounded-lg border border-dashed border-neutral-200 relative">
        <motion.div
        initial={{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
        }}
        whileHover={{
            opacity:1,
            scale:1.05,
            filter:"blur(0px)"
        }}
        transition={{
            // duration:0.3,
            // ease:"easeInOut"
            type:"spring",
            damping:15,
            mass:1
        }}
         className="absolute inset-0 h-full border border-neutral-200 w-full bg-white rounded-lg divide-y divide-neutral-200">
          <div className="flex gap-2 p-4">
            <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
              <MessageSquareText className="h-4 w-4 text-neutral-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-[8px] font-bold text-neutral-600">
                Manu paji:-
              </p>
              <p className="text-neutral-400 text-[8px] mt-1">
                Merch is coming for u
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 p-4">
            <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
              <MessageSquareText className="h-4 w-4 text-neutral-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-[8px] font-bold text-neutral-600">
                Ridham:-
              </p>
              <p className="text-neutral-400 text-[8px] mt-1">
                Thank yoy paji!!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>)}
    </AnimatePresence>
    </>
  );
}
