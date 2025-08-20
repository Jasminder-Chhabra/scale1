"use client";
import React from "react";

export const AuroraBackground = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Aurora Layer */}
      <div className="
        absolute inset-0 
        bg-[linear-gradient(120deg,var(--blue-500),var(--indigo-400),var(--violet-500),var(--blue-400))]
        bg-[length:200%_200%]
        animate-aurora
        opacity-50
        blur-3xl
      " />

      {/* Content */}
      <div className="relative z-10 text-center">
        {children || <h1 className="text-4xl font-bold">Aurora Working 🎉</h1>}
      </div>
    </div>
  );
};
