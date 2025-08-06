import  Hero  from './Hero'
import React from 'react'
import MidFirstSection from './MidFirstSection'

import {PatternCardDemo} from './ParallaxSection'
import BentoGrid from './MidSecondSection'
import AppDemoSection from './MidThirdSection'
import DownloadAppDemo from './MidFourSection'
import FeaturesPage from './TabSelector'
import MidFifthSection from './MidFifthSection'
import MidSixSection from './MidSixSection'
import { PricingDemo } from './Pricing'
import MidSevenSection from './MidSevenSection'
import productsData from '@/lib/content'

const Index = ({slug}) => {
    const data = productsData[slug] || {};
    
return (
    <div  data-unload="fade-down">
      <Hero data={data.hero}/>
      <MidFirstSection  data={data.midFirstSection}/>

      {/* Spacer div to push content down while MidFirstSection is fixed */}
      {/* <div className="h-[700px] bg-black" /> */}

       <div className="relative bg-black z-40">
        <PatternCardDemo  data={data.patternCardDemo}/>
         <BentoGrid data={data.bentoGrid}/>
        <AppDemoSection data={data.appDemoSection}/>
        <FeaturesPage data={data.featuresPage} data2={data.AdminPage} />
       <DownloadAppDemo data={data.downloadAppDemo} />
       <PricingDemo data={data.pricingPlans} />
          <MidFifthSection />
        <MidSixSection />
   <MidSevenSection /> 
      </div> 
    </div>
  );

}

export default Index