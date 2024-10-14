'use client';
import React, { useRef } from 'react';
import { useInView } from "framer-motion";

const FramerUseInViewOne = () => {
    const ref = useRef();
    const isInView = useInView(ref);
    return (
        <div className="h-[200vh] w-screen bg-black">
            <section className="h-screen">

            </section>
            <h1 ref={ref} style={{
                transition: "all 3500ms ease-in-out",
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(100px)" : "translateX(0px)",
            }} className='text-white'>وایسا دنیا وایسا دنیا من میخوام پیاده شم</h1>
        </div>
    );
};

export default FramerUseInViewOne;