'use client'
import React from "react";
import Footer from "../../../components/Sticky Footer/footer-type-one";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "./intro";
const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
        <section className="h-[200vh]">hello world</section>
      <Intro />

      {/* <Footer /> */}
    </main>
  );
};

export default Page;
