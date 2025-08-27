import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./parallax.css";
import "./laptop.css"
const LaptopShowcase = ({ featureTabs, para, heading }) => {
  console.log(featureTabs, para, heading);
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    embla?.scrollTo(index);
  };

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setActiveIndex(embla.selectedScrollSnap());
    };
    embla.on("select", onSelect);
    onSelect(); // Initial trigger
  }, [embla]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left: Tabs */}
      <div className="md:w-[60%]">
        <h2 className="text-4xl font-bold mb-8">{heading}</h2>
        <p className="text-lg mb-12 max-w-xl">{para}</p>
        <div className="grid grid-cols-2 gap-4">
          {featureTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`p-4 rounded-lg text-center transition-all text-sm cursor-pointer ${
                index === activeIndex
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-black border"
              }`}
            >
              {tab?.title}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Embla Showcase */}
      <div className="relative flex justify-center items-center w-full">
        {/* Embla Carousel */}
        <div className="absolute w-full overflow-hidden md:left-auto z-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-10 h-[500px]">
              {featureTabs.map((tab, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="flex-[0_0_85%] md:flex-[0_0_75%] transition-opacity duration-300 relative"
                   style={{ opacity: isActive ? 1 : 0.4 , marginLeft : index == 0 ? "20%" : undefined   }}
                  >
                    <img
                      src={tab?.image}
                      alt={tab?.title}
                      className="md:w-[605px] w-[335px] h-[200px] z-10 md:h-[380px] object-cover rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                      style={{objectFit : "inherit"}}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div
          onClick={scrollPrev}
          className="swiper-button-prev prev2 absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 w-20 h-20 flex items-center justify-center rounded-lg shadow-md cursor-pointer"
        >
          <img
            src="/img/assets/next.png"
            alt="Previous"
            className="w-6 h-6 object-contain rotate-180 invert"
          />
        </div>
        <div
          onClick={scrollNext}
          className="swiper-button-next next2 absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 w-20 h-20 flex items-center justify-center rounded-lg shadow-md cursor-pointer"
        >
          <img
            src="/img/assets/next.png"
            alt="Next"
            className="w-6 h-6 object-contain invert"
          />
        </div>

        {/* Frame Mockup */}
        <img
          src="/img/assets/iPad Pro (landscape) (1).png"
          alt="Web Frame"
          className="relative z-10 md:w-[640px] w-[340px]  h-[220px] md:h-[400px] top-[0px] "
          style={{ zIndex: -1 }}

        /> 
      </div>
    </div>
  );
};

export default LaptopShowcase;