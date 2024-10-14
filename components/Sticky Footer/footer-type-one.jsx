import React from 'react'
import Content from './content';

export default function Footer() {
  return (
    <div 
      className='relative h-[200px] bg-orange-400'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[200px] w-full grid place-content-center'>
        <h1 className='text-center text-9xl'>Footer</h1>
      </div>
    </div>
  )
}