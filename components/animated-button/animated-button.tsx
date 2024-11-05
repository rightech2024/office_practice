"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      initial={{ "--x": "100%", scale: 1 }}
      whileTap={{ scale: 0.97 }}
      animate={{ "--x": "-100%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
            type: "spring",
        stiffness: 10,
        damping: 5,
        mass: 0.1,
        }
      }}
    >
      <span className="block relative w-full h-full tracking-wide font-light text-neutral-100 linear-mask">
        Start Now
      </span>
      <span className="block absolute inset-0 rounded-md p-px linaer-overlay"/>
    </motion.button>
  );
};

export default AnimatedButton;
// Create the PERFECT Button (TailwindCSS - Framer Motion) : video