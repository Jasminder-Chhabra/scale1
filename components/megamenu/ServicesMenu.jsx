import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Layers, Settings } from 'lucide-react';

const categories = [
  { 
    title: 'AI & ML', 
    icon: <Layers strokeWidth={1} />, 
    description: 'Harness AI, ML, AR/VR, and blockchain to innovate your business.',
    services: [
      { name: 'AI Automation', href: '/services/solutions' },
      { name: 'AR/VR Apps', href: '/services/ar-vr' },
      { name: 'Blockchain Dev', href: '/services/blockchain' },
      { name: 'Custom AI Projects', href: '/services/custom-ai' },
    ] 
  },
  { 
    title: 'Mobile', 
    icon: <Smartphone strokeWidth={1}  
 />, 
    description: 'We build high-performance mobile apps tailored for iOS, Android, and cross-platform solutions.',
    services: [
      { name: 'Android Development', href: '/services/android' },
      { name: 'iOS Development', href: '/services/ios' },
      { name: 'React Native', href: '/services/react-native' },
      { name: 'Flutter', href: '/services/flutter' },
    ]  
  },
  { 
    title: 'Web', 
    icon: <Globe strokeWidth={1} />, 
    description: 'From sleek frontends to powerful backends, we deliver complete web solutions.',
    services: [
      { name: 'Shopify Website Development', href: '/services/shopify' },
      { name: 'WordPress Website Development', href: '/services/wordpress' },
      { name: 'Full Stack', href: '/services/fullstack' },
      { name: 'Next.js', href: '/services/nextjs' },
    ] 
  },
  
  { 
    title: 'Support', 
    icon: <Settings strokeWidth={1} />, 
    description: 'Keep your apps running at peak performance with our expert support and QA.',
    services: [
      { name: 'Software & App Maintenance', href: '/services/maintenance' },
      { name: 'QA Testing', href: '/services/qa-testing' },
      { name: 'Performance Optimization', href: '/services/performance' },
      { name: 'Customer Suppot', href: '/services/Support' },
    ] 
  },
  { 
    title: 'Others', 
    icon: <Layers strokeWidth={1} />, 
    description: 'Custom solutions for your unique needs, from SaaS to workflow automation.',
    services: [
      

      { name: 'UI UX Design ', href: '/services/design' },
      { name: 'SaaS Development', href: '/services/saas' },
      { name: 'Ready to Use Products', href: '/services/ready-to-use' },
     
      { name: 'AI Videos', href: '/services/ai-videos' },
    
    ] 
  },
];

const ServicesMenu = () => {
  const [active, setActive] = useState('Mobile');
  const activeData = categories.find(cat => cat.title === active);

  return (
    <div
      className="absolute top-full mt-1 z-50 w-[90vw] max-w-[800px] p-4 left-[-200px] border rounded-2xl glass-card border-gray-600"
    >
      <motion.div
        className="rounded-xl flex overflow-hidden z-50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Left Sidebar */}
        <div className="w-[220px] text-white p-5 space-y-4">
          {categories.map(cat => (
            <div
              key={cat.title}
              className="flex items-center gap-3 cursor-pointer hover:border hover:border-white/30 transition-all duration-200 hover:opacity-100 opacity-70 font-semibold hover:bg-white/5 p-3 rounded-lg"
              onMouseEnter={() => setActive(cat.title)}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className=" p-5 space-y-4">
          {/* Dynamic Paragraph */}
          <p className="text-sm text-gray-100 leading-snug">{activeData?.description}</p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {activeData?.services.map((service, index) => (
              <motion.a
                key={index}
                href={service.href}
                whileHover={{ scale: 1.04 }}
                className="relative overflow-hidden p-4 rounded-[16px] border border-white/30 hover:bg-white/5 backdrop-blur-[26px] transition-all shadow-lg"
              >
                <h4 className="font-semibold text-white text-base">{service.name}</h4>
                <p className="text-xs text-gray-300 leading-snug mt-1">
                  Explore how we craft {service.name.toLowerCase()} solutions tailored for startups.
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesMenu;
