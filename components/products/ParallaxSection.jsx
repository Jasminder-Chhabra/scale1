import {
  PatternCard,
  PatternCardBody,
} from "@/components/ui/card-with-ellipsis-pattern";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./parallax.css";
import { Navigation } from 'swiper/modules';
import { GlowEffect } from "@/components/ui/glow-effect";

const deliverables = [
  {
    title: "User App",
    description: "Android App",
    bgClass: "card-bg-user-android",
  },
  {
    title: "User App",
    description: "iOS App",
    bgClass: "card-bg-user-ios",
  },
  {
    title: "Provider App",
    description: "Android App",
    bgClass: "card-bg-provider-android",
  },
  {
    title: "Provider App",
    description: "iOS App",
    bgClass: "card-bg-provider-ios",
  },
  {
    title: "Admin Panel",
    description: "Web App",
    bgClass: "card-bg-admin",
  },
];

function PatternCardDemo({ data }) {
  const filteredDeliverables = deliverables.filter((item) => {
    if (!data?.providerApp) {
      return !item.title.toLowerCase().includes("provider");
    }
    return true;
  });

  return (
    <div className="md:max-w-8xl mx-10 md:mx-32 text-center py-20">
      <h1
        className="text-3xl md:text-5xl text-black dark:text-white mb-5"
        data-appear="fade-down"
        data-unload="fade-down"
      >
        {data?.heading || "5 Deliverables"}
      </h1>
      <p
        className="text-md md:text-lg text-black dark:text-white"
        data-appear="fade-down"
        data-unload="fade-down"
      >
        {data?.para || "Handyman is a home service finder and provider app."}
      </p>

      {/* Desktop View */}
      <div className="hidden gap-6 mt-10 md:flex flex-row justify-center">
        {filteredDeliverables.map((item, index) => {
          // Choose animation based on position
          const appear =
            index === 0
              ? "fade-left"
              : index === filteredDeliverables.length - 1
              ? "fade-right"
              : "fade-up";

          return (
            <div
              className="relative w-[230px]"
              key={index}
              data-appear={appear}
              data-unload={appear}
            >
              <GlowEffect
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={0.9}
              />
              <PatternCard className={item.bgClass}>
                <PatternCardBody className="text-center relative z-10">
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </PatternCardBody>
              </PatternCard>
            </div>
          );
        })}
      </div>

      {/* Mobile: Swiper Carousel */}
      <div className="md:hidden mt-10" data-appear="fade-up" data-unload="fade-up">
        <Swiper
          spaceBetween={0}
          slidesPerView={1.5}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {filteredDeliverables.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full"
                data-appear="fade-up"
                data-unload="fade-up"
              >
                <GlowEffect
                  colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={0.9}
                />
                <PatternCard className={item.bgClass}>
                  <PatternCardBody className="text-center relative z-10 flex items-center flex-col">
                    <h3 className="text-xl font-bold mb-1 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60">{item.description}</p>
                  </PatternCardBody>
                </PatternCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export { PatternCardDemo };
