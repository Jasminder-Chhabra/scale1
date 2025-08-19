"use client"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";


const DemoVariant1 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
        <div delay={0.4}
          duration={0.9}
        >
      
        </div>
          <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
            A customizable animated radial gradient background with a subtle
            breathing effect.
          </p>
      </div>
    </div>
  );
};




export { DemoVariant1 };
