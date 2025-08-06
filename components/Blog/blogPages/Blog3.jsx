"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function EnterpriseMobility() {
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
    <div className="flex flex-col lg:flex-row gap-8 relative " data-unload="fade-up">
      <article className="lg:w-3/4 w-full space-y-10 text-gray-800 leading-relaxed" data-appear="fade-up"
    data-unload="fade-up">
<div id="intro" ref={introRef}  data-appear="fade-up" data-unload="fade-up">
<h2 className="text-3xl font-bold mb-6">
  What are Enterprise Mobility Solutions?
</h2>
<p className="text-white">
  Enterprise Mobility Solutions (EMS) are systems and strategies that allow businesses to enable employees to work remotely using mobile devices, cloud services, and secure networks. In the digital era, EMS is not a luxury—it's a necessity.
</p>
<p className="text-white">
  With more companies embracing remote work, BYOD (Bring Your Own Device), and global teams, EMS helps manage mobile usage, data access, app deployment, and security policies across various platforms.
</p>
<p className="text-white">
  Enterprise mobility enhances productivity, streamlines communication, and improves operational agility. However, without a robust EMS strategy, organizations may risk data leaks, security breaches, and compliance issues.
</p>

  <Image
    src="/img/blog/blog4img.jpg"
    alt="How to Build Complex Software"
    width={1000}
    height={800}
    className="rounded-xl mt-4 "
     data-appear="fade-up" data-unload="fade-up"
  />
</div>


      <div id="features" ref={featuresRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-2xl font-bold my-2">Key Features</h2>
<ul className=" list-none space-y-2">
  <li className="text-white mb-2 list-none">
    <strong className="text-2xl my-4 flex flex-col gap-3 ">1. Mobile Device Management (MDM)</strong>
    Centralized control over mobile devices to enforce policies, install apps, and wipe data remotely in case of theft or loss.
  </li>
  <li className="text-white mb-2 list-none">
    <strong className="text-2xl my-4  flex flex-col gap-3 ">2. Secure Access to Corporate Data</strong>
    Ensures encrypted access to emails, files, and internal systems on mobile without compromising security.
  </li>
  <li className="text-white mb-2 list-none">
    <strong className="text-2xl my-4  flex flex-col gap-3 ">3. App Management</strong>
    Enables companies to manage which apps employees can install, access, and use for work purposes.
  </li>
  <li className="text-white mb-2 list-none">
    <strong className="text-2xl my-4  flex flex-col gap-3 ">4. BYOD Policy Support</strong>
    Allows employees to use their own smartphones or tablets while keeping company data isolated and protected.
  </li>
  <li className="text-white mb-2 list-none">
    <strong className="text-2xl my-4  flex flex-col gap-3 ">5. Real-time Analytics</strong>
    Provides insights on device usage, data consumption, and user behavior to improve decision-making and security.
  </li>
</ul>

</div>

      <div id="tech" className="text-white  flex flex-col gap-3 " ref={techRef}  data-appear="fade-up" data-unload="fade-up">
 <h2 className="text-2xl font-bold my-2">Technology Stack</h2>
<p className="flex flex-col gap-3">
  The core tech behind enterprise mobility includes:
  <br />
  <strong className="text-green-400">Mobile Frontend:</strong> React Native, Flutter for cross-platform mobile apps.<br />
  <strong className="text-green-400">Backend:</strong> Node.js, Django, or Spring Boot APIs to handle secure authentication, notifications, and device sync.<br />
  <strong className="text-green-400">Database:</strong> Firebase, MongoDB, or PostgreSQL for scalable, cloud-based storage.<br />
  <strong className="text-green-400">MDM Platforms:</strong> Microsoft Intune, VMware Workspace ONE, IBM MaaS360.<br />
  <strong className="text-green-400">Security:</strong> JWT/OAuth for auth, VPNs, end-to-end encryption, and role-based access.<br />
  <strong className="text-green-400">Cloud Hosting:</strong> AWS, Azure, or Google Cloud for scalable backend and CDN delivery.
</p>
</div>


    <div id="steps" className="text-white" ref={stepsRef}  data-appear="fade-up" data-unload="fade-up">
 <h2 className="text-2xl font-bold my-2">Development Steps</h2>
<ol className="list-decimal list-inside space-y-2 text-white">
  <li>Identify user roles (employees, IT admins, contractors) and define access permissions for each.</li>
  <li>Design mobile-first interfaces using Figma or Sketch, considering accessibility and device compatibility.</li>
  <li>Implement MDM setup for controlling devices remotely and managing compliance.</li>
  <li>Build core mobile app with secure login, document access, push notifications, and offline sync.</li>
  <li>Test rigorously on various mobile OS versions and ensure encryption, policy enforcement, and remote wipe features work as intended.</li>
</ol>

</div>


      <div id="conclusion" className="text-white" ref={conclusionRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-2xl font-bold my-2">Conclusion</h2>
  <p className="text-white">
  Enterprise Mobility Solutions empower organizations to stay productive while ensuring security and compliance. As remote work becomes the norm, adopting a scalable, secure EMS strategy isn't optional—it’s mission-critical for modern businesses.
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

