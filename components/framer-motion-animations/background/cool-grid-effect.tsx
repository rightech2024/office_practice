'use client'
import React from 'react';
import Tile from './tile';

// video: A Cool Grid Effect for your Hero Section (Framer Motion)
const CoolGridEffect = () => {
    return (
        <div className='w-full relative'>
            <section className='w-full h-screen grid grid-cols-20 overflow-y-clip'>
                {Array.from(Array(20 * 12), i => (
                    <Tile key={i}/>
                ))}
            </section>
            <div className='pointer-events-none absolute inset-0 flex flex-col gap-5 justify-center items-center z-10 mb-10'>
                <h1 className='text-9xl text-neutral-100 font-black uppercase tracking-tighter'>
                    Seifallah hashemi
                </h1>
                <p className='text-white tracking-wide text-xl text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam.</p>
            </div>
        </div>
    );
};

export default CoolGridEffect;