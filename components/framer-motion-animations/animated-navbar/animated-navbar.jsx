"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedNavbar = () => {
  return (
    <div className="grid h-screen place-content-center bg-neutral-100">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });
  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Picture</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor pos={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ pos }) => {
  return (
    <motion.li
      animate={pos}
      className="absolute h-7 z-0 rounded-full bg-black md:h-12"
    ></motion.li>
  );
};

export default AnimatedNavbar;
