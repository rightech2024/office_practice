'use client';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ axis: "y", loop: true }, [Autoplay({ delay: 2000 })])
  const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section className="embla border rounded" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}