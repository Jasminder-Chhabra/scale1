"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ResumeMaking() {
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
    <div className="flex flex-col lg:flex-row gap-8 relative " data-appear="fade-up" data-unload="fade-up">
      <article className="lg:w-3/4 w-full space-y-10 text-gray-800 leading-relaxed">
<div id="intro" ref={introRef}  data-appear="fade-up" data-unload="fade-up">

<p className="text-white">
I have reviewed countless resumes throughout my recruiting career. And I’ve seen it all—the good and the not so good.

</p>
<p className="text-white">
Want to know what makes a striking resume that will really catch a recruiter’s eye? Think differently.
<br/>
Here’s one example: Scanning through new applications for an entry-level marketing role, I came across an interesting file that read: “OPEN ME.” Of course, my curiosity got the best of me, and I opened the elaborate, flashy, fun PowerPoint presentation containing the candidate’s information and work history.
<br/>
By putting in the extra effort to make the resume stand out, the candidate quickly got attention—and the interview. I happily routed the resume to the hiring manager.


</p>  
</div>


      <div id="features" ref={featuresRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-4xl font-bold my-2"  data-appear="fade-down" data-unload="fade-up">Here are four ways to help your resume get attention:</h2>
<ul className="list-decimal list-inside space-y-2"  data-appear="fade-down" data-unload="fade-up">
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4"> Start with a header and a trigger.
</strong>
Think of your header as a business card at the top of your resume, right under your name. If you have a website or link to your portfolio, add that as well as your contact information, along with any certifications and desirable credentials.
<br/>
Include a trigger summary, a one- to two-sentence introduction at the top of your resume that highlights your most valuable skills and experiences. It can help recruiters and hiring managers quickly learn whether you have the qualifications and background they’re looking for.


  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4"> Review and reformat.</strong>
    Review your resume layout to see what you can improve. You want it to be as clean, organized and eye-catching as possible. It could be as simple as choosing a different resume style, updating fonts or reorganizing your information. There are plenty of free templates available online.
<br/>
If it looks like you are adding another page to your already two- or three-page resume, eliminate jobs that are not relevant to the one in which you are interested.
<br/><br/>

  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4">Include industry keywords.</strong>
If the job description lists certain keywords, include those on your resume as well. Recruiters and hiring managers search for keywords when reviewing resumes to see how well your skills match with the job requirements.


  </li>
  <li className="text-white flex flex-col ">
    <strong className="text-2xl my-4"> Make sure your resume is clean and error-free.</strong>
Never underestimate the power of a spelling- and grammar-error-free resume. For recruiters and hiring managers, a well-written resume is a reflection of your professional self.
<br/>
While free proofreading tools exist, it’s also important to ask a well-trusted colleague or friend to review your resume. The extra set of eyes really helps, especially if you’ve spent hours writing and rewriting that document.



  </li>
 
</ul>

</div>

  <Image
    src="/img/blog/blog6img.jpg"
    alt="Tech Stack"
    width={800}
    height={100}
    className="rounded-xl mt-4 md:h-100  h-80"
     data-appear="fade-up" data-unload="fade-up"
  />

    <div id="steps" className="text-white" ref={stepsRef}>
<h2 className="text-4xl font-bold my-2"  data-appear="fade-down" data-unload="fade-up"> Structure & Format</h2>
<ol className="list-decimal list-inside space-y-2 flex flex-col gap-4 mb-4 text-white">
  <li>One-page only (unless you have 10+ years experience).

</li>
<li>Clean layout – Use whitespace, consistent fonts, and clear sections.

</li>
<li>Use reverse chronological order for experience and education.

</li>
<li>Export in PDF to avoid formatting issues.
</li>
</ol>

</div>


      <div id="conclusion" className="text-white" ref={conclusionRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-2xl font-bold my-2">Conclusion</h2>
  <p>
A great resume is more than a list of qualifications — it's your personal pitch to employers. Whether you're using modern tools like Canva or Overleaf, or building a developer resume with React or JSON, the goal remains the same: clear, concise, and impactful communication of your skills and value.
Tailor your resume for the role, highlight achievements with measurable results, and keep the design clean.
<br/>
In today’s competitive job market, a well-structured, tech-savvy resume can make all the difference.
  </p>
</div>

      </article>
      <aside className="lg:w-1/4 w-full sticky top-24 h-fit border p-4 rounded-xl shadow-sm"  data-appear="fade-up" data-unload="fade-up">
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
