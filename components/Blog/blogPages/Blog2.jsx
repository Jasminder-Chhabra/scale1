"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ComplexSoftware() {
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
<div className="flex flex-col lg:flex-row gap-8 relative" >
  <article
    className="lg:w-3/4 w-full space-y-10 text-gray-800 leading-relaxed"
    data-appear="fade-up"
    data-unload="fade-up"
  >
    <div id="intro" ref={introRef} data-appear="fade-down"  data-unload="fade-up">
      <h2 className="text-3xl font-bold mb-6">How We Build Complex Software & Applications</h2>
      <p className="text-white">
        Building complex software or large-scale applications isn't just about writing code — it's a systematic process involving planning, design, scalability, user needs, and constant iteration.
      </p>
      <p className="text-white">
        Whether it's a fintech app handling millions of transactions, a healthcare system managing sensitive data, or a SaaS dashboard with real-time collaboration — each requires thoughtful architecture and efficient workflows.
      </p>
      <p className="text-white">
        The process involves cross-functional collaboration among developers, designers, product managers, and QA engineers to ensure the product not only works but is reliable, scalable, and maintainable.
      </p>
      <Image
        src="/img/blog/App-Development-Complexity.webp"
        alt="How to Build Complex Software"
        width={800}
        height={600}
        className="rounded-xl mt-4 object-contain"
        data-appear="zoom-out"
         data-unload="fade-up"
      />
    </div>

    <div id="features" ref={featuresRef} data-appear="fade-left"  data-unload="fade-up">
      <h2 className="text-2xl font-bold my-2">Key Principles in Complex Software Development</h2>
      <ul className="list-decimal list-inside space-y-2">
        {/* Each li can have fade-up if you want individual animation */}
        <li className="text-white" data-appear="fade-up"  data-unload="fade-up">
          <strong className="text-2xl my-4">Modular Architecture</strong>
          Break the system into isolated, reusable modules or services (e.g., auth, payments, notifications).
        </li>
        <li className="text-white" data-appear="fade-up"  data-unload="fade-up">
          <strong className="text-2xl my-4">Scalability & Performance</strong>
          Choose systems that scale horizontally (like microservices, cloud infra) to handle growing traffic and data.
        </li>
        <li className="text-white" data-appear="fade-up"  data-unload="fade-up">
          <strong className="text-2xl my-4">Security & Compliance</strong>
          Implement proper auth (OAuth, JWT), input sanitization, and compliance like HIPAA, GDPR where required.
        </li>
        <li className="text-white" data-appear="fade-up"  data-unload="fade-up">
          <strong className="text-2xl my-4">CI/CD and Testing</strong>
          Automated testing pipelines, static code analysis, and fast deployments via GitHub Actions or Vercel.
        </li>
        <li className="text-white" data-appear="fade-up"  data-unload="fade-up">
          <strong className="text-2xl my-4">User-Centered Design</strong>
          UX research, wireframes, and usability testing to ensure intuitive design and high retention.
        </li>
      </ul>
    </div>

    <div id="tech" className="text-white" ref={techRef} data-appear="fade-right"  data-unload="fade-up">
      <h2 className="text-2xl font-bold my-2">Technology Stack</h2>
      <p>
        Choosing the right stack depends on the product type, team expertise, and scalability needs. For frontend:
        <strong className="text-green-400"> React.js / Next.js</strong> for fast UI.
        For backend: <strong className="text-green-400">Node.js</strong> with
        <strong className="text-green-400"> Express</strong> or <strong className="text-green-400">NestJS</strong> for API and services.
        Databases can be <strong className="text-green-400">MongoDB</strong> (NoSQL) or <strong className="text-green-400">PostgreSQL</strong> (SQL).
        Auth with <strong className="text-green-400">JWT</strong> or <strong className="text-green-400">Auth0</strong>.
        Hosting on <strong className="text-green-400">Vercel</strong>, <strong className="text-green-400">AWS</strong>, or <strong className="text-green-400">DigitalOcean</strong> depending on scale.
      </p>
      <Image
        src="/img/blog/sc1.png"
        alt="Tech Stack"
        width={800}
        height={100}
        className="rounded-xl mt-4 md:h-100 h-80"
        data-appear="zoom-out"
         data-unload="fade-up"
      />
    </div>

    <div id="steps" className="text-white" ref={stepsRef} data-appear="fade-up"  data-unload="fade-up">
      <h2 className="text-2xl font-bold my-2">Development Process</h2>
      <ol className="list-decimal list-inside space-y-2 flex flex-col gap-4">
        <li>Define product vision, user personas, and key features with stakeholder input.</li>
        <li>Design system architecture: monolith, microservices, or serverless — based on scale.</li>
        <li>Create wireframes and UI components (Figma → React/Next.js components).</li>
        <li>Setup Git repos, CI/CD pipelines, and development/staging environments.</li>
        <li>Develop modules in sprints — each with planning, implementation, review, and testing.</li>
        <li>Integrate APIs, payment gateways, real-time systems (WebSocket, MQTT), etc.</li>
        <li>Test everything: unit, integration, E2E (Playwright/Cypress), load & security.</li>
        <li>Deploy to production, monitor with tools like Sentry, LogRocket, NewRelic.</li>
        <li>Post-launch — gather feedback, improve features, and fix bugs fast.</li>
      </ol>
    </div>

    <div id="conclusion" className="text-white" ref={conclusionRef} data-appear="fade-up"  data-unload="fade-up">
      <h2 className="text-2xl font-bold my-2">Conclusion</h2>
      <p>
        Building complex software demands a balance of technical decisions, user experience, and operational discipline.
        By following a structured approach, using the right tech, and involving the right team — you can ship reliable, scalable, and maintainable applications for any domain.
      </p>
    </div>
  </article>

        <aside className="lg:w-1/4 w-full sticky top-24 h-fit border p-4 rounded-xl shadow-sm" data-appear="fade-up" data-unload="fade-up">
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
