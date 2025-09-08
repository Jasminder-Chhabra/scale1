import { Scene } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, Cpu, ShieldCheck, Layers, Zap, Eye, EarthLock, Presentation, Diamond, Gem, Brain } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Cpu,
    title: "Ready-Made Solutions",
    description: "Instant deployment, zero hassle.",
  },
  {
    icon: Brain,
    title: "Digital Products",
    description: "Smart tools, real results.",
  },
  {
    icon: Gem,
    title: "Client-Centric Approach",
    description: "Your growth, our mission",
  },
  {
    icon: EarthLock,
    title: "Proven Track Record",
    description: "100+ projects, global trust.",
  },

];

const Herooo = () => {
  return (
    <div className="min-h-svh w-screen relative bg-linear-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8" data-appear="fade-up" data-delay="100" data-unload="fade-up">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
        

          <div className="space-y-6 flex items-center justify-center flex-col  mt-20 ">
            <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl" >
                           Scaling Ideas into Impactful  Digital Solutions.

            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
             At Scale Us, we help businesses turn ideas into scalable digital solutions. From design to deployment, our team delivers smart, reliable, and future-ready tech that grows with you. <span className="md:inline hidden">
               Whether you're launching a startup or expanding an enterprise, we’re here to build what’s next.  
             </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/contact-us">
              <Button  className="text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                Get Started
              </Button>
              
          </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-4 h-40 md:h-48 flex flex-col justify-center items-center space-y-2 md:space-y-3"
            >
              <feature.icon strokeWidth={1}  size={30} className="text-white/80 md:w-8 md:h-8" />
              <h1 className="text-sm md:text-xl font-medium">{feature.title}</h1>
              <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))} 
        </div>
      </div>
  <div className="absolute inset-0 w-full h-full ">

                  <Scene />
          </div>
    </div>
    
  );
};

export { Herooo };