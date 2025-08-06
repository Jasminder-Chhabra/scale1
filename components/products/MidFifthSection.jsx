import { useState } from "react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Ready-made Solution",
    description: "Get up and running instantly with our out-of-the-box solutions, saving you time and effort.",
    icon: "/img/assets/tab_1.png",
  },
  {
    title: "Elite Author An Envato",
    description: "We're an elite author which is a prestigious global market for software.",
    icon: "/img/assets/tab_2.png",
  },
  {
    title: "Agreement",
    description: "Clear, concise, and transparent agreements tailored for a seamless business experience.",
    icon: "/img/assets/tab_3.png",
  },
  {
    title: "Continuous Updates",
    description: "Regular improvements and new features delivered continuously.",
    icon: "/img/assets/tab_4.png",
  },
  {
    title: "Dedicated Project Manager",
    description: "You get a single point of contact to ensure smooth execution and accountability.",
    icon: "/img/assets/tab_5.png",
  },
  {
    title: "Top-Notch Product",
    description: "Our products are built with attention to detail, performance, and user satisfaction.",
    icon: "/img/assets/tab_6.png",
  },
];

export default function MidFifthSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="max-w-8xl md:mx-24 py-10 mx-8" data-appear="fade-up">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full md:w-1/2">
          {features.map((feature, index) => (
            <Card
              key={index}
              onClick={() => setActiveIndex(index)}
              data-appear="fade-up"
              data-delay={index * 100}
              className={`cursor-pointer transition-all duration-300 rounded-md border-none shadow-md px-4 py-6 flex flex-col items-start gap-4 ${
                index === activeIndex ? "bg-white scale-[1.03] shadow-purple-500" : "bg-white"
              }`}
            >
              <img src={feature.icon} alt="icon" className="w-12 h-12 object-contain" />
              <p className="font-semibold text-md md:text-base text-gray-900">{feature.title}</p>
            </Card>
          ))}
        </div>

        {/* Right Panel */}
        <div
          className="w-full md:w-1/3 p-4 shadow-md shadow-purple-400"
          data-appear="fade-left"
        >
          <img
            src={features[activeIndex].icon}
            alt="icon"
            className="w-20 h-20 bg-white p-4 mb-4 rounded-xl object-contain"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {features[activeIndex].title}
          </h3>
          <p className="text-gray-200 text-lg max-w-lg leading-relaxed">
            {features[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
