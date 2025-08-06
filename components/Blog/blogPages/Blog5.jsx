"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ManagementSystem() {
  const [activeSection, setActiveSection] = useState(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const conclusionRef = useRef(null);
  useEffect(() => {
    const sectionRefs = [
      { ref: introRef, id: "intro" },
      { ref: featuresRef, id: "features" },
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
    <div className="flex flex-col lg:flex-row gap-8 relative "  data-appear="fade-up" data-unload="fade-up">
      <article className="lg:w-3/4 w-full space-y-10 text-gray-800 leading-relaxed" >
<div id="intro" ref={introRef}  data-appear="fade-up" data-unload="fade-up">

<p className="text-white">
  As online learning continues to grow globally, learning management systems (LMS) are revolutionising how we learn. They offer a level of accessibility and flexibility that traditional classrooms simply can’t match, redefining how education is delivered and experienced.

</p>
<p className="text-white">
And the numbers? They speak for themselves. With the global eLearning market growing at a solid 20% every year, LMS platforms are quickly becoming a must-have. In 2025, the LMS market cap is expected to reach $28.2 billion, serving over 75 million users worldwide.

</p>
<p className="text-white">
  Whether you’re an institute owner or managing a university, an LMS offers a tremendous opportunity to enhance your students' learning experience while unlocking significant growth potential for your business.

</p>
<h2 className="mt-8">What is a LMS?</h2>
<p className="text-white">A learning management system is a software platform designed to create and manage content for educational courses. It serves as a centralised platform for educational institutions and businesses to provide online learning, track progress and collaborate with students. LMS makes learning more accessible and engaging for both students and professionals.
</p>
  <Image
    src="/img/blog/blog3.png"
    alt="How to Build Complex Software"
    width={800}
    height={600}
    className="rounded-xl mt-4 "
     data-appear="fade-up" data-unload="fade-up"
  />
</div>


      <div id="features" ref={featuresRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-4xl font-bold my-2" >Types of LMS</h2>
<ul className="list-decimal list-inside space-y-2"  data-appear="fade-down" data-unload="fade-up">
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4"> Cloud-based LMS</strong>
    AI powers real-time decision-making using sensor fusion (LiDAR, radar, cameras), enabling vehicles to drive with minimal human input.
  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4">Driver Assistance Systems (ADAS)</strong>
    Cloud-based LMS solutions are hosted on the provider’s servers and accessed through the internet. They're known for their scalability, ease of use and minimal IT involvement.
<br/><br/>
This type of LMS is ideal for organisations looking for a plug-and-play solution with minimal technical overhead. For instance, a company launching a global employee training program can use a cloud-based LMS to quickly onboard users without worrying about server capacity or maintenance.


  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4">Self-hosted LMS</strong>
    By analyzing sensor data, AI predicts mechanical failures before they happen, reducing downtime and repair costs.
  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4">Smart Navigation & Traffic Management</strong>
A self-hosted LMS is installed on the organisation’s servers, giving complete control over customisation and data management. This type of LMS is ideal for organisations needing deep customisation or those with strict data security policies. For instance, a university with unique grading and course management requirements may choose a self-hosted LMS to tailor the platform to its needs.


  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4">Open-source LMS</strong>
 Open-source LMS platforms are free to use and modify. They provide the flexibility to tailor the software to specific needs but require the technical expertise for implementation and maintenance.
<br/><br/>
This is best suited for institutions or businesses with limited funding but have internal technical teams that can customise the platform. Popular open-source LMS are Moodle and Open edX.


  </li>
  
   <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4">Corporate LMS</strong>
 Corporate LMS platforms are tailored for businesses to address training, compliance‌ and employee development needs. Companies focused on professional development and enhancing workforce skills generally opt for this type of LMS.
<br/><br/>
For instance, a retail company can use a corporate LMS to train staff on new product lines and customer service techniques, ensuring consistent quality across locations.


  </li>
</ul>

</div>



    <div id="steps" className="text-white" ref={stepsRef}  data-appear="fade-up" data-unload="fade-up">
<h2 className="text-4xl font-bold my-2">Must-have features in an LMS</h2>
<ol className="list-decimal list-inside space-y-2 flex flex-col gap-4 mb-4 text-white"  data-appear="fade-down" data-unload="fade-up">
  <li>An intuitive design makes sure learners can navigate the platform easily. Simple dashboards, clear menus and search functionality enhance the user experience (UX) and reduce the learning curve.</li>
  <li>Efficient course creation and management tools allow instructors to design courses, add multimedia content, set learning paths‌ and update materials easily. Features like pre-built templates and drag-and-drop editors streamline the process.

</li>
  <li>Customised learning paths help cater to individual learner needs, enabling them to progress at their own pace while focusing on areas requiring improvement.

</li>
  <li>Offline compatibility ensures learners can access courses anytime, anywhere without an internet connection.

</li>
  <li>Built-in tools for assignments‌ and exams help evaluate learner progress. Automated grading, feedback‌ and certificates of completion add value to the learning experience.

</li>
</ol>

</div>


      <div id="conclusion" className="text-white" ref={conclusionRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-2xl font-bold my-2">Conclusion</h2>
  <p>
  Now that you know the importance of learning management systems in modern education, it’s worth building your own LMS. With the right features and user-centric approach, your LMS can be highly beneficial for your business.

This is where Builder.ai comes into play. We simplify the software development process and make it accessible to even those with limited technical knowledge. With us, you can bring education to millions of people and open new doors for learning something new..

If that sounds good, hit the banner below and kick off your learning management system project with us today 👇
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
            <div onClick={() => scrollTo(featuresRef)}>LMS Type</div>
          </li>
          
          <li
            className={`pl-4 cursor-pointer pb-4  list-none ${
              activeSection === "steps"
                ? "border-l-4 border-purple-500 font-semibold text-purple-600"
                : "border-l-4 border-white"
            }`}
          >
            <div onClick={() => scrollTo(stepsRef)}>LMS Features</div>
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
