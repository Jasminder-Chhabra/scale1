import { GradientCard } from './gradient-card'
import React from 'react'

const FirstSection = () => {
    let para1 = "Get in touch and our support team will answer all your queries, we are available with detailed proposals containing all the information along with payment terms that will help you and your client."  ;
      let para2 = "The Agreement governs your activities as a Partner, including every single bit of detail regarding the project including payment terms, deliverables, milestones, restrictions, etc." 
         let para3 = "Achieve higher margins through a solution selling approach, as you earn sales commissions on every single project closed."
  return (
 <div data-appear="fade-up" data-unload="fade-up">
    <div className="text-center text-3xl md:text-5xl text-white text-semibold px-16 md:px-0 md:mb-0 mb-10">Join us &
let us Earn Together</div>
      <div className=" overflow-visible ">
     <div className="w-full md:flex hidden relative  items-center  justify-around px-4 md:px-0 md:max-w-6xl md:mx-auto mt-16">
  {/* Connecting line */}
  <div className="absolute  top-1/2 left-[20%] right-[20%] h-[1px] border-t-2 border-dashed border-purple-400 z-0"></div>

  {/* Circles */}
  <div className="relative z-10 w-fit rounded-full shadow-sm shadow-purple-500 p-4 px-5 text-xl bg-[#1A1D24] ">01</div>
  <div className="relative z-10 w-fit rounded-full shadow-sm shadow-purple-500 p-4 px-5 text-xl bg-[#1A1D24]">02</div>
  <div className="relative z-10 w-fit rounded-full shadow-sm shadow-purple-500 p-4 px-5 text-xl bg-[#1A1D24]">03</div>
</div>
      <div className="flex gap-4 md:flex-row flex-col px-4 md:px-0 md:grid md:grid-cols-3 md:max-w-6xl md:mx-auto">
        <div className=" flex-shrink-0 md:min-w-0 flex flex-col items-center">
          <div className="relative z-10 w-fit rounded-full shadow-sm shadow-purple-500 p-4 px-5 mt-4 text-xl bg-[#1A1D24] md:hidden block ">01</div>
          <GradientCard text="Reach us" para={para1} img="/img/partner/step11.png" />
        </div>
        <div className=" flex-shrink-0 md:min-w-0 flex flex-col items-center">
           <div className="relative z-10 w-fit rounded-full text-center shadow-sm shadow-purple-500 p-4 px-5 text-xl bg-[#1A1D24] md:hidden block mt-4 ">02</div>
          <GradientCard text="Agreement" para={para2} img="/img/partner/step22.png" />
        </div>
        <div className=" flex-shrink-0 md:min-w-0 flex flex-col items-center">
           <div className="relative z-10 w-fit rounded-full shadow-sm shadow-purple-500 p-4 px-5 text-xl bg-[#1A1D24] md:hidden block mt-4">03</div>
          <GradientCard text="Start Earning" para={para3} img="/img/partner/step33.png" />
        </div>
      </div>
    </div>
 </div>
  )
}

export default FirstSection