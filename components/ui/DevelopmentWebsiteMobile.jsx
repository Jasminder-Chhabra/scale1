import React, { useState } from "react";

const services = [
  {
    title: "Website Development",
    para: "Custom and responsive websites",
    description:
      "Our website development services offer tailored, mobile-friendly, and visually stunning solutions that meet your business goals. Whether it’s a sleek landing page, a corporate portfolio, or a full-fledged web application, we ensure fast performance, clean design, and seamless user experience across all devices.",
    icons: ["/img/images/Angular.png", "/img/images/JavaScript.png", "/img/images/React.png"],
  },
  {
    title: "Mobile App Development",
    para: "iOS and Android mobile apps",
    description:
      "We specialize in building cross-platform mobile applications that combine robust functionality with elegant UI/UX. From planning to deployment, we create scalable apps optimized for performance, helping you connect with users on the go through feature-rich, intuitive experiences.",
    icons: ["/img/images/Flutter.png", "/img/images/Android.png", "/img/images/Dart.png"],
  },
  {
    title: "SEO & Email Marketing",
    para: "Boost reach and engagement",
    description:
      "Enhance your visibility and grow your audience through advanced SEO practices and personalized email campaigns. We analyze keywords, optimize on-page content, and develop targeted strategies to improve rankings, while crafting impactful emails that nurture leads and drive conversions.",
    icons: ["/img/images/Adobe Illustrator.png", "/img/images/social-media.png", "/img/images/Canva.png"],
  },
  {
    title: "Digital Marketing",
    para: "Promote through digital channels",
    description:
      "Our digital marketing team helps you grow your brand online using social media, PPC, content marketing, and influencer outreach. We create compelling narratives and data-driven campaigns that attract, engage, and convert your target audience into loyal customers.",
    icons: ["/img/images/Adobe XD.png", "/img/images/Sketch.png", "/img/images/social-media.png"],
  },
  {
    title: "Custom Software Development",
    para: "Software tailored for business",
    description:
      "We build secure, scalable, and efficient custom software solutions that align with your business logic. From CRMs to internal tools, we leverage modern technologies to improve productivity, automate tasks, and solve complex operational challenges with precision.",
    icons: ["/img/images/Behance.png", "/img/images/Figma.png", "/img/images/bullhorn.png"],
  },
  {
    title: "API Development & Integration",
    para: "Connect systems efficiently",
    description:
      "Our API services help businesses integrate and automate data flows across systems. Whether creating new APIs or integrating third-party services, we ensure secure, flexible, and scalable architecture to power seamless communication between your platforms.",
    icons: ["/img/images/FastAPI.png", "/img/images/Java.png", "/img/images/Gatsby.png"],
  },
  {
    title: "UI/UX Design",
    para: "Intuitive and modern interfaces",
    description:
      "We craft visually compelling and user-focused designs that elevate your digital product. From wireframes to prototypes, our design process ensures a smooth user journey, optimized accessibility, and consistent branding across all touchpoints.",
    icons: ["/img/images/Figma.png", "/img/images/Sketch.png", "/img/images/Linux.png"],
  },
  {
    title: "Branding & Identity",
    para: "Build a strong brand image",
    description:
      "We help businesses define their voice and visual identity through impactful branding. From logos to complete brand kits, our team creates cohesive designs that reflect your values and resonate with your target audience, setting you apart from competitors.",
    icons: ["/img/images/Adobe Illustrator.png", "/img/images/Flutter.png", "/img/images/social-media.png"],
  },
  {
    title: "E-Commerce Solutions",
    para: "Launch and scale your store",
    description:
      "Our e-commerce development services focus on creating secure, scalable, and conversion-driven online stores. From product catalogs and payment gateways to inventory management and user analytics, we empower your digital retail journey with end-to-end support.",
    icons: ["/img/images/WooCommerce.png", "/img/images/Salesforce.png", "/img/images/React.png"],
  },
];
const MobileServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <div className="lg:hidden w-full">
      {/* Horizontal Scrollable Buttons */}
      <div className="overflow-x-auto no-scrollbar px-4 py-4 mt-6 flex space-x-4 sticky top-0  z-30">
        {services.map((feature, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg border text-sm whitespace-nowrap transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#7A15DE] text-white border-[#7A15DE]"
                : "bg-white text-black border-black"
            }`}
          >
            {feature.title}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="px-4 py-6">
        <div className="bg-[#262930] text-white rounded-xl text-center border-[3px] border-gray-500 px-5 py-6">
          <h3 className="text-lg font-semibold mb-3">{activeService.para}</h3>
          <p className="text-sm mb-5">{activeService.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {activeService.icons.map((icon, i) => (
              <img key={i} src={icon} alt="icon" className="w-12 h-12" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServicesSection;
