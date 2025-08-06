import React from 'react'
import { motion } from "framer-motion";
import { GlowEffect } from '@/components/ui/glow-effect';

const Hero = ({data}) => {
  // console.log("data",data )
  return (
   <section
  className="relative w-full min-h-screen pt-16 md:pt-40 bg-cover bg-center flex items-center justify-center text-white" data-delay="200"  data-unload="fade-down"
  style={{ backgroundImage: 'url("/img/assets/banner_bg.png")'  }}
>
  <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-10">
    
    {/* Animated Text Content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-4 md:space-y-5 text-center md:text-left pt-20 "
    >
      <div
        className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
      >{data?.title ?? "HandyMan Services"}</div>
      <p className="text-sm sm:text-lg md:text-xl text-white/90">
      {data?.description || "qfnqefbbbb beFIQFBQEFBEWUF FUBFEBWUGBWRG BD  WIFBQEUFBEUF QUBFQUFBQEUFBQ"}
      </p>
      <div className='relative w-fit mx-auto md:mx-0 mt-8 md:mt-10'>
        <motion.a
        href={data?.link || "/google.com"}
          animate={{ y: [5, -3, 4], scale: [1, 1, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
          <GlowEffect
            colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
            mode='colorShift'
            blur='soft'
            duration={3}
            scale={0.9}
          />
          <div className='relative inline-flex items-center gap-1 rounded-md bg-neutral-800 text-md text-zinc-50 px-4 py-2 outline outline-1 outline-[#fff2f21f]'>
            {data?.ctaText}
          </div>
        </motion.a>
      </div>
    </motion.div>

    {/* Animated Large Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex justify-center items-center "
    >
      <img
        src={data.img}
        alt="Handyman app"
        className="w-full rounded-2xl h-[550px] object-contain"
      />
    </motion.div>
  </div>
</section>

  )
}

export default Hero