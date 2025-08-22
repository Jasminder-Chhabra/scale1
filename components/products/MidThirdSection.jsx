import React from 'react';
import "./parallax.css";
import { ProjectVideo } from './DialogBox';

const AppDemoSection = ({ data }) => {
  return (
    <div
      className="flex flex-col md:flex-row py-10 px-4 md:px-0"
      data-appear="fade-up"
      data-unload="fade-up"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-8xl w-full gap-8">
        {/* Left Section */} 
        <div
          className="shadow-lg w-full md:w-[20%] z-10 md:px-20 px-4 relative md:left-20"
          data-appear="fade-left"
          data-unload="fade-left"
        >
          <div className="w-full md:w-[550px] bg-transparent py-10 md:bg-white z-10 rounded-2xl md:p-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 md:text-gray-800 mb-4">
              {data.heading || "Application Demo"}
            </h2>
            <p className="text-sm md:text-base text-gray-100 md:text-gray-600 md:mb-6">
              Here we'll show you how the application works. It will help you to understand the application process to perform a specific action while using the app which is needed to access a product's core features.
            </p>
            <ProjectVideo src={data.videoUrl}>
              <div className="hidden md:flex items-center gap-2 mx-auto md:mx-0 bg-transparent text-purple-600 font-semibold hover:text-purple-800 transition">
                ▶ Play The Video
              </div>
            </ProjectVideo>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="relative flex items-center justify-center w-full md:w-[60%] rounded-lg pr-2"
          data-appear="fade-right"
          data-unload="fade-right"
        >
          <div className="center absolute cursor-pointer">
            <div className="pulse">
              <ProjectVideo src={data.videoUrl}>
                <img
                  src="/img/assets/play-video.png"
                  alt="Play"
                  className="h-16 w-16 md:h-20 md:w-20 invert"
                />
              </ProjectVideo>
            </div>
          </div>
          <img
            src={data.img}
            alt="Video Background"
            className="w-full h-[50vh] md:h-[70vh] rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default AppDemoSection;
