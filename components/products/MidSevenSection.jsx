import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './parallax.css';

const slideData = [
  { title: 'OZI Corp App', technology: 'Flutter', image: 'img/portfolio/portfolio01.jpg' },
  { title: '7Eleven', technology: 'Andiod', image: '/img/portfolio-img/7eleven/img1.jpg' },
  { title: ' Bello Ricco Website', technology: 'Shopify', image: '/img/portfolio-single-img/bella.png' },
  { title: 'Kids Learning App', technology: 'Andriod', image: '/img/portfolio-single-img/learning.png' },
  { title: 'Texmo Pipes Website', technology: 'Wordpress', image: '/img/portfolio-single-img/texmo.png' },
  { title: 'Berry Click Website', technology: 'Wordpress', image: '/img/portfolio-single-img/berryclick.png' },
  { title: 'Natrax', technology: 'Laravel', image: '/img/portfolio-single-img/natrax.png' },
  { title: 'RainBow App', technology: 'Andriod', image: '/img/portfolio-single-img/rainbow.png' },
  { title: 'Maze App', technology: 'React Native', image: '/img/portfolio-single-img/maze.png' },
];


export default function MidSevenSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative py-20 max-w-7xl mx-auto overflow-hidden" data-appear="fade-up">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slideData.map((item, index) => (
            <div
              className="embla__slide flex-shrink-0 px-2"
              key={index}
              data-appear="fade-up"
              data-delay={index * 100} // stagger effect
            >
              <div className="relative  rounded-xl ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-contain  mb-4 px-5 rounded-xl"
                />
                <div className="absolute bottom-6 left-8 shadow shadow-purple-400  p-2 px-3 bg-black rounded-2xl">
                  <div className="text-xl font-bold text-purple-300">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.technology}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 flex items-center justify-center rounded-full z-10 text-white hover:bg-black"
      >
        <ChevronLeft size={24} />
      </div>
      <div
        onClick={scrollNext}
        className="absolute w-10 h-10 flex items-center justify-center right-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full z-10 text-white hover:bg-black"
      >
        <ChevronRight size={20} />
      </div>

      {/* Responsive Slide Widths */}
      <style jsx>{`
        .embla__slide {
          scroll-snap-align: start;
          flex: 0 0 90%;
        }
        @media (min-width: 640px) {
          .embla__slide {
            flex: 0 0 33.3333%;
          }
        }
        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 25%;
          }
        }
      `}</style>
    </div>
  );
}
