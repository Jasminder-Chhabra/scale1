import React from 'react'
import { motion } from 'framer-motion';

import {
  Briefcase,
  Newspaper,
  Scale,
  Lock,
  ShieldCheck,
  BookOpen,
  HelpCircle,
  Info,
  Contact
} from 'lucide-react';
import Link from "next/link";
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
const CompanyMenu = () => {
  return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
                    <div
  className={`absolute top-full mt-1 z-50 
    p-3  glass-card 
     shadow-2xl max-w-7xl w-[31vw] mx-auto rounded-2xl border border-gray-600`}
>

   <div className="max-w-7xl  flex flex-row gap-6 mt-4 mx-2 cursor-pointer">
        {/* COMPANY */}
        <div className=''>
          <h3 className="font-semibold text-lg mb-4 pl-5">COMPANY</h3>
          <div className=" flex gap-2 flex-col">
            <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <Info className="w-5 h-5 mt-1" strokeWidth={1}   />
              <Link href='/about-us'>
                <p className="font-medium mb-0">About Scale Us</p>
                <p className="text-[13px] text-gray-400">Who we are</p>
              </Link>
            </div>
            <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <Briefcase className="w-5 h-5 mt-1" strokeWidth={1}   />
               <Link href="/career">
              <div>
                <p className="font-medium mb-0" >Careers</p>
                <p className="text-[13px] text-gray-400">Meet and join our team</p>
              </div>
              </Link>
            </div>
   <Link href="/blog">
            <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <BookOpen className="w-5 h-5 mt-1" strokeWidth={1}   />
              <div>
                <p className="font-medium mb-0">Blog</p>
                <p className="text-[13px] text-gray-400">Industry insights</p>
              </div>
            </div>
        </Link>

           {/* <Link href="/contact-us">
            <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <Contact className="w-5 h-5 mt-1" />
              <div>
                <p className="font-medium mb-0">Contact Us</p>
                <p className="text-[13px] text-gray-400">Call Us Now!</p>
              </div>
            </div>
        </Link> */}
          </div>
        </div>

        {/* RESOURCES */}
        <div className=''>
          <h3 className="font-semibold text-lg mb-4 pl-5">RESOURCES</h3>
          <div className=" flex gap-2 flex-col">
       
  <div
  onClick={() => {
    window.open("/img/assets/scaleus.pdf", "_blank", "noopener,noreferrer");
  }}
  className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer"
>
  <HelpCircle className="w-5 h-5 mt-1" strokeWidth={1} />
  <div>
    <p className="font-medium mb-0">Brochure</p>
    <p className="text-[13px] text-gray-400">Find answers quickly</p>
  </div>
</div>

         
         <Link href="/terms-of-use">
            <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <ShieldCheck className="w-5 h-5 mt-1" strokeWidth={1}   />
              <div>
                <p className="font-medium mb-0">Terms of Use</p>
                <p className="text-[13px] text-gray-400">Terms and Policies</p>
              </div>
            </div>
         </Link>
          <Link href="/privacy-policy">
            <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <Lock className="w-5 h-5 mt-1" strokeWidth={1}   />
              <div>
                <p className="font-medium mb-0">Privacy</p>
                <p className="text-[13px] text-gray-400">Your data belongs to you</p>
              </div>
            </div>
          </Link>
         {/* <Link href='/faq'>
         <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200">
              <QuestionMarkCircledIcon className="w-5 h-5 mt-1" />
              <div>
                <p className="font-medium mb-0">FAQ</p>
                <p className="text-[13px] text-gray-400">Question that you ask</p>
              </div>
            </div>
         </Link> */}
          </div>
        </div>
      </div>
  </div>
  </motion.div>
  )
}

export default CompanyMenu