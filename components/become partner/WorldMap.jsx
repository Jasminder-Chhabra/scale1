"use client";
import { WorldMap } from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className=" py-20 dark:bg-black bg-white w-full" data-appear="fade-up" data-unload="fade-up">
      <div className="max-w-3xl mx-auto text-center mb-10 ">
        <div className="font-bold text-xl md:text-4xl dark:text-white text-black">
Our Clients  across the world 
        </div>
        <div className="text-sm md:text-lg text-neutral-500  py-4 ">
         At Scale Us, we proudly collaborate with clients across the globe, delivering scalable digital solutions that drive growth and innovation. Our global partnerships reflect our commitment to quality, performance, and lasting impact.
        </div>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
