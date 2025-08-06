"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ReinventedCarrer() {
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
      <article className="lg:w-3/4 w-full space-y-10 text-gray-800 leading-relaxed">
<div id="intro" ref={introRef}  data-appear="fade-up" data-unload="fade-up">

<p className="text-white"  data-appear="fade-down" data-unload="fade-up">
You’ve been hearing a lot about generative AI lately.
<br/>
<br/>
And you’ll most likely hear a lot more. Because gen AI is here to stay.
<br/>
<br/>
The good news is, this generative AI revolution is going to make work more meaningful, democratic and empowering.
<br/>
<br/>
That means you could reinvent your career.


</p> 

<h2  data-appear="fade-up" data-unload="fade-up">Reinventing talent</h2>
<p className="text-white">
  Companies that are reinventing themselves are also reinventing work, reshaping the workforce and preparing workers for a gen AI world.
<br/>
<br/>

With gen AI, leaders see a trifecta of opportunities—economic value, business growth and more meaningful work for people. Organizations that adopt responsible, people-centric approaches to gen AI at scale are poised to create an additional $10.3 trillion in economic value by 2038. In terms of business growth, these companies that prioritize people alongside data and tech to drive gen AI-enabled growth are set to achieve productivity gains of up to 11%.
<br/>
<br/>
So, what is the upside for people?
<br/>
<br/>
Gen AI is democratizing business process redesign, giving everyone—from assembly workers to customer service agents to lab scientists—the power to reshape their own workflows.
<br/>
<br/>
Working with gen AI enables you to enhance your productivity, creativity and human potential. It makes it possible for you to transition from being focused on one or two areas of expertise to mastering multiple interconnected capabilities at once.
</p>
</div>


      <div id="features" ref={featuresRef}  data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-4xl font-bold my-2 mb-6 "  data-appear="fade-down" data-unload="fade-up">The trust gap with gen AI</h2>
  <p className="text-white">When it comes to generative AI, there are conflicting views and lack of trust out there, especially between C-suite leaders and workers. Some of these insights are outlined in our recent research ‘Work, workforce, workers.’

</p>
<ul className="list-decimal list-inside space-y-2"  data-appear="fade-down" data-unload="fade-up">
  <li className="text-white flex flex-col ">
Although 95% of workers we surveyed see value in working with gen AI, they don’t trust organizations to ensure positive outcomes for everyone. And two-thirds of leaders confess that they are ill-equipped to lead this change.

  </li>  <li className="text-white flex flex-col ">
32% of leaders see talent scarcity and skill gaps as major barriers in utilizing gen AI, and 36% attribute workers’ reluctance to embrace gen AI to a lack of technology understanding. But workers think differently. 82% of them believe they grasp the technology, and 94% are confident they can develop the needed skills.

  </li>  <li className="text-white flex flex-col ">
While almost 60% of workers worry about AI eliminating their jobs, less than one-third of leaders feel job displacement is a worry for their people.

  </li>
 
 
</ul>

</div>


  <Image
    src="/img/blog/blog7img.jpg"
    alt="Tech Stack"
    width={800}
    height={100}
    className="rounded-xl mt-4 md:h-100  h-80"
     data-appear="fade-up" data-unload="fade-up"
  />
    <div id="steps" className="text-white" ref={stepsRef}>
<h2 className="text-4xl font-bold my-2 mb-6 "  data-appear="fade-up" data-unload="fade-up">New ways of working</h2>
<ol className="list-decimal list-inside space-y-2 flex flex-col gap-4 mb-4 text-white"  data-appear="fade-down" data-unload="fade-up">
  <li><strong>Sales at Scale Us:</strong> To better understand how gen AI can create enriching experiences and unlock people’s potential at work, we plugged into Scale US teams within the Sales function that are starting to infuse gen AI tools into everyday ways of working.
Team members were first actively engaged in rethinking their processes and workflows (since they know the work best), and then they helped design and implement the tools. By utilizing gen AI to draft and update proposals, these sales professionals saw marked increases in areas such as productivity, confidence, ability to create real impact through their work and enhanced ability to manage stress at work.
</li>
<li><strong>Marketing at a US consumer goods & services company:</strong> T“I see generative AI being your toolbox to do all the work that you’re doing today, but faster and better. As someone who works in the creative field, I do all the writing and I don’t think it would completely replace me. But I could use it for developing images or graphics or cool headlines, or helping me develop a project plan based off certain criteria. I’m still the leader of the ship, but the AI is a tool or a buddy or a direct report that I could use to help me get the work done with higher quality and speed,” says a marketing manager.
</li>
</ol>
 <h2 className="text-2xl font-bold my-2"  data-appear="fade-down" data-unload="fade-up">Continuous learning at scale Us</h2>
  <p>
In a gen AI world, learning takes on new meaning. It’s continuous and integrated into the work you do every day. Nearly all workers surveyed (94%) reported being ready to learn gen AI skills, though just 5% of organizations are providing training at scale. With AI learning from both data and interactions with humans, who are responsible for ‘teaching’ the machines, building that capability and fostering a ‘teach to learn’ culture is paramount.
<br/>
<br/>
For example, Scale Us ‘Technology Quotient’ learning series builds broad-based fluency around the hottest technology topics for all our people. Approximately 600,000 of our people are already trained in data and AI fundamentals. This goes a long way in embedding gen AI it into how we deliver our services and in how we operate.
<br/>
<br/>
As you look to grow your career in a gen AI world, it’s all about being open, agile and quick to learn.


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
