import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./parallax.css";

const MobileShowCase = ({ featureTabs, para, heading }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" ,  containScroll: "trimSnaps", });
const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    embla?.scrollTo(index);
  };
useEffect(() => {
  if (!embla) return;

  const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());

  embla.on("select", onSelect);
  onSelect(); // initial trigger
}, [embla]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => {
      setActiveIndex(embla.selectedScrollSnap());
    });
  }, [embla]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 ">
      {/* Left: Tabs */}
      <div className="w-full md:w-[60%] mb-10 md:mb-0 ">
        <h2 className="text-4xl font-bold mb-8">{heading}</h2>
        <p className="text-lg mb-12 max-w-xl">{para}</p>
        <div className="grid grid-cols-2 gap-4">
          {featureTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`p-4 rounded-xl text-center transition-all text-sm cursor-pointer ${
                index === activeIndex
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-black border"
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Phone Showcase */}
      <div className="relative flex justify-center items-center w-full myswiperx">
        {/* Embla Container */}
        <div className="absolute top-[0px] md:left-auto w-full overflow-hidden z-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-10 ">
              {featureTabs.map((tab, index) => {
  const slideIndex = index;
  const isActive = selectedIndex === slideIndex;
    const isLastRealSlide = index === featureTabs.length - 1;

  return (
   <div
      key={index}
      className={`flex-[0_0_250px] h-[533px] transition-opacity duration-300 ${
        isLastRealSlide ? "mr-10" : ""
      }`}
      style={{ opacity: isActive ? 1 : 0.4 }}
    >
      <img
        src={tab.image}
        alt={tab.title}
        className="h-full w-full  rounded-4xl shadow-lg"
      />
    </div>
  );
})}

            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          onClick={scrollPrev}
          className="swiper-button-prev1 absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 w-10 h-10 flex items-center justify-center rounded-lg shadow-md cursor-pointer"
        >
          <img
            src="/img/assets/next.png"
            alt="Previous"
            className="w-6 h-6 object-contain rotate-180 invert"
          />
        </div>

        <div
          onClick={scrollNext}
          className="swiper-button-next1 absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 w-10 h-10 flex items-center justify-center rounded-lg shadow-md cursor-pointer"
        >
          <img
            src="/img/assets/next.png"
            alt="Next"
            className="w-6 h-6 object-contain invert"
          />
        </div>

        {/* Phone Frame Mockup */}
        <img
          src="/img/assets/mokeup2.png"
          alt="Phone Frame"
          className="relative z-10 w-[273px] top-[-12px] "
        />
      </div>
    </div>
    
  );
};

export default MobileShowCase;
