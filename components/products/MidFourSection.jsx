import React, { useState } from 'react';

const DownloadAppDemo = ({ data }) => {
  let { text, tabData } = data;
  const [activeTab, setActiveTab] = useState('User App');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="min-h-screen md:min-h-auto bg-gradient-to-r pt-20 mt-20 md:mt-0 px-7 from-purple-600 to-purple-800 flex items-center justify-center md:p-6"
      data-appear="fade-up"
      data-unload="fade-up"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-8">
        
        {/* Left Section: Image */}
        <div
          className="w-full md:w-1/3 flex justify-center"
          data-appear="fade-right"
        >
          <div className="md:w-120 md:h-120 rounded-2xl flex items-center justify-center mt-10 md:mt-0">
            <img src={tabData[activeTab].image} alt="" />
          </div>
        </div>

        {/* Right Section: Tabs and Content */}
        <div
          className="w-full md:w-2/3 flex flex-col text-white"
          data-appear="fade-left"
        >
          <h2 className="text-3xl font-bold mb-6">{text}</h2>

          {/* Tabs */}
          <div className="flex space-x-4 mb-4 border-b-2 border-white w-fit">
            {Object.keys(tabData).map((tab) => (
              <div
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 transition cursor-pointer ${
                  activeTab === tab
                    ? 'border-b-2 font-semibold border-white'
                    : 'font-light'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg mb-6 mt-4">
            {tabData[activeTab].description}
          </p>

          {/* Login Credentials */}
          <div className="mb-6">
            <p className="font-semibold">Login Credentials</p>
            <p>Phone: {tabData[activeTab].phone}</p>
            <p>OTP: {tabData[activeTab].otp}</p>
          </div>

          {/* Download Section */}
          <div
            className="flex justify-between flex-col md:flex-row relative gap-4 md:gap-0"
            data-appear="fade-up"
          >
            <div className="bg-white p-3 px-4 rounded-full w-fit text-black flex items-center justify-center gap-1">
              <img src="/img/assets/Android.png" className="h-6 w-6" />
              Download App
            </div>
            <div className="text-xl text-white">scan & Download</div>
            <div className="relative">
              <div className="md:absolute md:top-[-100px] md:right-16 flex h-32 w-32 items-center gap-3">
                <img
                  src="/img/assets/user_app_qr.png"
                  alt=""
                  className="h-32 w-32 rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppDemo;
