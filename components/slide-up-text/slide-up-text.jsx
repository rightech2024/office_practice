"use client";

import React, { useState } from "react";
import {splitString} from "@/utils/utility"

const getTransformStyles = (isMouseEntered, index) => ({
    transform: `translateY(${isMouseEntered ? "-100%": "0%"})`,
    transitionDelay: `${index * 0.02}s`
})

function SlideUpText() {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      className="bg-[#1b9aaa] text-white text-base px-4 py-2 rounded-lg border-none font-bold cursor-pointer shadow-md"
    >
      <span className="relative flex overflow-clip">
        {splitString('SEPEHR').map((ch, ind) => {
            return(
                <span key={ind} className="relative">
                    <span className="inline-block transition-all duration-500" style={{ whiteSpace: "pre", ...getTransformStyles(isMouseEntered, ind)}}>{ch}</span>
                    <span className="absolute top-[100%] w-full left-0 transition-all duration-500" style={{ whiteSpace: "pre", ...getTransformStyles(isMouseEntered, ind)}}>{ch}</span>
                </span>
            )
        })}
      </span>
    </div>
  );
}

export default SlideUpText;
