
import CountUp from './CountUp';
import { GlowEffect } from './glow-effect';
const stats = [
  { value: 50, suffix: '+', label: 'Team Members' },
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: 'k+', label: 'Hours of Developed Code' },
  { value: 10, suffix: '+', label: 'Years of Experience', highlight: true },
];


export default function Achievement() {
  return (
    <div className="pb-16 md:py-4 md:px-0 px-8" >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10  sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div className='relative' key={i}>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.95}
      />
      <div className='relative flex flex-col justify-center  items-center gap-1 rounded-md bg-[#25282F] w-full  h-40 md:h-60  text-md text-zinc-50 px-4 py-2 outline outline-1 outline-[#25282F]'>
<div>
      <CountUp
  from={0}
  to={stat.value}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-4xl md:text-5xl font-bold "
/>
      <span className="text-4xl md:text-5xl font-bold">{stat.suffix}</span>
</div>
              <div className="mt-2 text-md font-medium text-gray-400 text-center">
                {stat.label}
              </div>
           
      </div>
    </div>
        ))}
      </div>
    </div>
  );
}
