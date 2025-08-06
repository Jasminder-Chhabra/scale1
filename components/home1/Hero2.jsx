import React from 'react';
import { LavaLamp } from '../fluid-blob';

const Hero2 = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden">
      <LavaLamp />

      <div className=" border  rounded-3xl shadow-xl px-6 py-10 md:px-12 max-w-4xl text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight mix-blend-exclusion">
          Code. Scale. Repeat
          <br className="hidden sm:block" />
          – Your Vision, Engineered to Perform
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 tracking-tight mix-blend-exclusion">
          We build fast, scalable digital products that adapt as you grow.
          From code to launch, we turn bold ideas into reliable, user-focused solutions.
        </p>

        <div className="flex justify-center">
          <button
            className="bg-[#8200DB29] backdrop-blur-md border border-[#322D36] text-white font-semibold py-2 px-6 rounded-full transition duration-300 hover:bg-[#8200db50]"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
