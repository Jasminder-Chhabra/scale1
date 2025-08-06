import React from "react";
const Globe = React.lazy(() =>
  import("@/components/ui/globe").then((module) => ({
    default: module.Globe,
  }))
);


export default function GlobeDemo() {
  return (
 <div className="max-w-5xl mx-auto pb-10 md:pb-0">
       <div className="relative flex h-[500px]  justify-center overflow-hidden rounded-lg  px-10 md:px-40 pb-40  md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap  bg-clip-text text-center text-4xl font-semibold leading-none  ">
Our Clients across the world
      </span>
      <Globe className="top-20 md:top-12" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
 </div>
  )
}
