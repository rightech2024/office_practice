import Content from '@/components/Sticky Footer/content'
import React from 'react'

export default function Footer() {
  return (
    <div 
      className='relative h-[200px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[800px] w-full'>
        <Content />
      </div>
    </div>
  )
}