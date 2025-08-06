import { GradientCard } from '@/components/ui/gradient-card';
import React from 'react';

const MidSixSection = () => {
  const para1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione libero sequi sapiente officiis placeat quam quibusdam molestias velit? Quis.";
  const para2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione libero sequi sapiente officiis placeat quam quibusdam molestias velit? Quis.";
  const para3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione libero sequi sapiente officiis placeat quam quibusdam molestias velit? Quis.";

  return (
    <div className="overflow-x-auto md:overflow-visible pr-10" data-appear="fade-up">
      <div className="flex gap-4 px-4 md:px-0 md:grid md:grid-cols-3 md:max-w-6xl md:mx-auto">
        <div className="min-w-[280px] flex-shrink-0 md:min-w-0" data-appear="fade-up" data-delay="100">
          <GradientCard text="How We Turn Ideas Into Reality" para={para1} />
        </div>
        <div className="min-w-[280px] flex-shrink-0 md:min-w-0" data-appear="fade-up" data-delay="200">
          <GradientCard text="Technology We Use" para={para2} />
        </div>
        <div className="min-w-[280px] flex-shrink-0 md:min-w-0" data-appear="fade-up" data-delay="300">
          <GradientCard text="Checkout Our All Products" para={para3} />
        </div>
      </div>
    </div>
  );
};

export default MidSixSection;
