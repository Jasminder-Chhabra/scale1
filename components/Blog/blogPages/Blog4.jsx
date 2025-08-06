"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function RevolutionAI() {
  const [activeSection, setActiveSection] = useState(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const stepsRef = useRef(null);
  const conclusionRef = useRef(null);
  useEffect(() => {
    const sectionRefs = [
      { ref: introRef, id: "intro" },
      { ref: featuresRef, id: "features" },
      { ref: techRef, id: "tech" },
      { ref: stepsRef, id: "steps" },
      { ref: conclusionRef, id: "conclusion" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  const scrollTo = (ref) =>
    ref?.current?.scrollIntoView({ behavior: "smooth" });

  return ( 
    <div className="flex flex-col lg:flex-row gap-8 relative " data-appear="fade-up" data-unload="fade-up">
      <article className="lg:w-3/4 w-full space-y-10 text-gray-800 leading-relaxed">
<div id="intro" ref={introRef} data-appear="fade-up" data-unload="fade-up">
<h2 className="text-3xl font-bold mb-6" data-appear="fade-down" data-unload="fade-up">
  The Evolution of Artificial Intelligence in the Automotive Industry
</h2>
<p className="text-white">
  Artificial Intelligence (AI) has become a driving force in the transformation of the automotive industry. What began with basic automation has now evolved into intelligent systems capable of powering autonomous vehicles, predictive maintenance, and enhanced in-car experiences.
</p>
<p className="text-white">
  From improving road safety to enabling smart mobility, AI is revolutionizing how vehicles are designed, built, and driven. According to McKinsey, by 2030, up to 15% of new cars sold could be fully autonomous.
</p>
<p className="text-white">
  This rapid evolution reflects not only technological advancements but also a shift in consumer expectations and regulatory landscapes. Automakers are now more focused than ever on integrating machine learning and data analytics into every aspect of vehicle functionality.
</p>

  <Image
    src="/img/blog/blog5img.jpg"
    alt="How to Build Complex Software"
    width={800}
    height={600}
    className="rounded-xl mt-4 "
    data-appear="fade-up" data-unload="fade-up"
  />
</div>


      <div id="features" ref={featuresRef} data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-2xl font-bold my-2" data-appear="fade-down" data-unload="fade-up">Key Applications of AI in Automotive</h2>
<ul className="list-decimal list-inside space-y-2">
  <li className="text-white" data-appear="fade-down" data-unload="fade-up">
    <strong className="text-2xl my-4">Autonomous Driving</strong>
    AI powers real-time decision-making using sensor fusion (LiDAR, radar, cameras), enabling vehicles to drive with minimal human input.
  </li>
  <li className="text-white"  data-appear="fade-down" data-unload="fade-up">
    <strong className="text-2xl my-4">Driver Assistance Systems (ADAS)</strong>
    AI enhances features like lane-keeping, adaptive cruise control, automatic braking, and collision warning systems.
  </li>
  <li className="text-white"  data-appear="fade-down" data-unload="fade-up">
    <strong className="text-2xl my-4">Predictive Maintenance</strong>
    By analyzing sensor data, AI predicts mechanical failures before they happen, reducing downtime and repair costs.
  </li>
  <li className="text-white"  data-appear="fade-down" data-unload="fade-up">
    <strong className="text-2xl my-4">Smart Navigation & Traffic Management</strong>
    AI improves route planning by learning driver behavior and traffic patterns, resulting in faster and fuel-efficient travel.
  </li>
  <li className="text-white"  data-appear="fade-down" data-unload="fade-up">
    <strong className="text-2xl my-4">In-Vehicle Personal Assistants</strong>
    Voice-based AI systems like Alexa Auto or Google Assistant provide hands-free control for navigation, entertainment, and communication.
  </li>
</ul>

</div>

      <div id="tech" className="text-white" ref={techRef}  data-appear="fade-up" data-unload="fade-up">
 <h2 className="text-2xl font-bold my-2"  data-appear="fade-down" data-unload="fade-up">Technology Stack</h2>
<p className="text-white">
  The AI-powered automotive ecosystem uses a diverse tech stack:
  <br />
  <strong className="text-green-400">Edge Devices:</strong> NVIDIA Drive, Intel Mobileye for real-time onboard processing.<br />
  <strong className="text-green-400">AI Frameworks:</strong> TensorFlow, PyTorch, OpenCV for computer vision and model training.<br />
  <strong className="text-green-400">Sensors:</strong> LiDAR, radar, ultrasonic sensors, and HD cameras for environmental awareness.<br />
  <strong className="text-green-400">Connectivity:</strong> 5G, V2X (Vehicle-to-Everything), and IoT protocols for real-time data sharing.<br />
  <strong className="text-green-400">Cloud Platforms:</strong> AWS IoT, Azure, or Google Cloud for storing and processing telemetry data.<br />
  <strong className="text-green-400">Security:</strong> AI-powered intrusion detection systems and end-to-end encryption for vehicle data.
</p>

  <Image
    src="/img/blog/blog5img1.jpg"
    alt="Tech Stack"
    width={800}
    height={100}
    className="rounded-xl mt-4 md:h-100  h-80"
     data-appear="fade-up" data-unload="fade-up"
  />
</div>


    <div id="steps" className="text-white" ref={stepsRef}  data-appear="fade-down" data-unload="fade-up">
<h2 className="text-2xl font-bold my-2"  data-appear="fade-down" data-unload="fade-up">Development Steps</h2>
<ol className="list-decimal list-inside space-y-2 text-white">
  <li>Begin with defining the vehicle's intelligent features (ADAS, predictive diagnostics, etc.) based on use case and market demand.</li>
  <li>Design hardware architecture including CPUs, GPUs, and sensor arrays that support real-time decision-making.</li>
  <li>Train AI models using large datasets—covering diverse traffic conditions, weather, and driver behavior.</li>
  <li>Integrate AI models with embedded systems inside the car and test under simulated and real-world conditions.</li>
  <li>Continuously improve model accuracy with OTA (Over-the-Air) updates and feedback loops based on telemetry data.</li>
</ol>

</div>


      <div id="conclusion" className="text-white" ref={conclusionRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-2xl font-bold my-2">Conclusion</h2>
  <p>
  AI is redefining the automotive industry at every level—from manufacturing to driving experiences. As vehicles become smarter and more connected, the future of mobility lies in the seamless integration of AI technologies to make transportation safer, faster, and more efficient.

  </p>
</div>

      </article>
      <aside className="lg:w-1/4 w-full sticky top-24 h-fit border p-4 rounded-xl shadow-sm"  data-appear="fade-left" data-unload="fade-up">
        <h3 className="font-semibold text-lg mb-3">On this Page</h3>
        <ul className="flex flex-col  py-2  text-sm text-white">
          <li
            className={`pl-4 cursor-pointer pb-4 list-none ${
              activeSection === "intro"
                ? "border-l-4 border-purple-500 font-semibold text-purple-600"
                : "border-l-4 border-white"
            }`}
          >
            <div onClick={() => scrollTo(introRef)}>Introduction</div>
          </li>
          <li
            className={`pl-4 cursor-pointer pb-4  list-none ${
              activeSection === "features"
                ? "border-l-4 border-purple-500 font-semibold text-purple-600"
                : "border-l-4 border-white"
            }`}
          >
            <div onClick={() => scrollTo(featuresRef)}>Key Features</div>
          </li>
          <li
            className={`pl-4 cursor-pointer pb-4  list-none ${
              activeSection === "tech"
                ? "border-l-4 border-purple-500 font-semibold text-purple-600"
                : "border-l-4 border-white"
            }`}
          >
            <div onClick={() => scrollTo(techRef)}>Technology Stack</div>
          </li>
          <li
            className={`pl-4 cursor-pointer pb-4  list-none ${
              activeSection === "steps"
                ? "border-l-4 border-purple-500 font-semibold text-purple-600"
                : "border-l-4 border-white"
            }`}
          >
            <div onClick={() => scrollTo(stepsRef)}>Development Steps</div>
          </li>
          <li
            className={`pl-4 cursor-pointer pb-4  list-none ${
              activeSection === "conclusion"
                ? "border-l-4 border-purple-500 font-semibold text-purple-600"
                : "border-l-4 border-white"
            }`}
          >
            <div onClick={() => scrollTo(conclusionRef)}>Conclusion</div>
          </li>
        </ul>
      </aside>
    </div>
  );
}
