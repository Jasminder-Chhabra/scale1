import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Orb from "./Shape";
import Link from "next/link";


function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="absolute inset-0  pointer-events-auto pt-10 z-40" data-unload="fade-up">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 max-w-7xl mx-auto space-y-10 md:space-y-0 md:space-x-10 text-white">
          
          {/* Text Content */}
          <div className="text-center md:text-left max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight tracking-wide text-balance" data-appear="fade-down">
              Scaling Ideas <br className="hidden sm:block" /> into Impactful <br className="hidden sm:block" /> Digital Solutions.

   
            </h1>

            <p className="text-base sm:text-lg md:text-lg mb-6 sm:mb-8 opacity-80 max-w-xl mx-auto md:mx-0 text-balance" data-appear="fade-up" data-delay="100">
At Scale Us, we help businesses turn ideas into scalable digital solutions. From design to deployment, our team delivers smart, reliable, and future-ready tech that grows with you. Whether you're launching a startup or expanding an enterprise, we’re here to build what’s next.            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start justify-center space-y-3 sm:space-y-0 sm:space-x-3 pointer-events-auto">
             <Link href="/services">
              <div
                className="bg-[#8200DB29] backdrop-blur-md border border-[#322D36] font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto text-white text-center"
               data-appear="fade-right" data-delay="150"
              >
                Explore Services
              </div>
             </Link>

          
            </div>
          </div>

          {/* Orb */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[300px] sm:h-[400px] md:h-[500px] relative mx-auto md:mx-0" data-appear="fade-left"  data-delay="75" >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Hero;
