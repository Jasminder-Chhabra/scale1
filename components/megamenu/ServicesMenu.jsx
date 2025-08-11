import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Smartphone, Globe, Layers, Settings } from 'lucide-react';

const categories = [
  { title: 'Mobile', icon: <Smartphone />, services: ['Android Development', 'iOS Development', 'React Native', 'Flutter']  },
  { title: 'Web', icon: <Globe />, services: ['Frontend Dev', 'Backend Dev', 'Full Stack', 'Next.js'] },
  { title: 'Emerging', icon: <Layers />, services: ['AI/ML Solutions', 'AR/VR Apps', 'Blockchain Dev'] },
  { title: 'Support', icon: <Settings />, services: ['App Maintenance', 'QA Testing', 'Performance Optimization'] },
];
const ServicesMenu = () => {
      const [active, setActive] = useState('Mobile');

  const activeData = categories.find(cat => cat.title === active);

  return (
    <div
  className={`absolute top-full mt-1 z-50 w-[95vw]  max-w-[900px]
    p-4 left-[-200px] border  rounded-2xl glass-card `}
    
>
   <motion.div
      className=" rounded-xl flex overflow-hidden z-50"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Left Sidebar */}
      <div className="w-1/3 
 text-white p-5 space-y-4">
        {categories.map(cat => (
          <div
            key={cat.title}
            className={`flex items-center gap-3 cursor-pointer hover:border hover:border-white/30 transition-all duration-200  hover:opacity-100 opacity-60 font-semibold' hover:bg-white/5 p-3 rounded-lg `}
            onMouseEnter={() => setActive(cat.title)}
          >
            {cat.icon}
            <span>{cat.title}</span>
          </div>
        ))}
      </div>

      {/* Right Content - Bento style */}
      <div className="w-2/3 p-5 py-2 grid grid-cols-4 gap-4 auto-rows-[120px]">
        {activeData?.services.map((service, index) => {
          const isLarge = index % 5 === 0 || index % 7 === 0;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className={`relative overflow-hidden p-4 rounded-[20px] border border-white/30 hover:bg-white/5 backdrop-blur-[26px]  transition-all shadow-xl 
                ${isLarge ? 'col-span-2 row-span-1' : 'col-span-2 row-span-1'}
                dark:from-neutral-800 dark:to-neutral-900 border-gray-400 `}
            >
              <h4 className="font-semibold text-white text-lg">{service}</h4>
              <p className="text-xs text-gray-300 dark:text-gray-400  leading-snug text-wrap">
                Explore how we craft {service.toLowerCase()} solutions tailored for startups.
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>


</div>
   
  );
}

export default ServicesMenu