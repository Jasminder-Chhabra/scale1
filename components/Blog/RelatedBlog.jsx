"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect , useState  , useCallback} from "react";
import blogs from '@/lib/blog';

export default function BlogSlider({ others }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);


  return (
        <div className="relative">
      {/* Buttons */}
      <div
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full disabled:opacity-30"
      >
        <ChevronLeft />
      </div>

      <div
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full disabled:opacity-30"
      >
        <ChevronRight />
      </div>

    <div className="overflow-x-hidden py-3" ref={emblaRef}>
      <div className="flex gap-6 ">
        {blogs.map((item, i) => (
          <div key={i} className="min-w-[80%] sm:min-w-[60%] md:min-w-[33%]">
            <Link href={`/blogs/${item.slug}`}>
              <div className="overflow-hidden shadow-sm rounded-2xl transition-transform hover:scale-[1.02] p-4 bg-[#1A1D24]  border-[#3b3d3f] border-2 cursor-pointer">
                {/* <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{item.date}</div> */}
                <Image
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-48 object-cover rounded-md"
                  width={400}
                  height={200}
                />
                <div className="pt-4 space-y-3">
                  <div className="text-xl font-semibold text-white line-clamp-2">{item.heading}</div>
                  {/* <p className="text-sm text-gray-300 line-clamp-3">{item.para}</p> */}
                  <div className="mb-2 text-sm text-white hover:underline relative">
                    Read more
                    <div className="absolute right-0 top-[-14px]">
                      <ArrowUpRight className="text-white h-12 w-12" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
