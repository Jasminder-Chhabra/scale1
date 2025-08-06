import MedicalBillingSoftware from "@/components/Blog/blogPages/Blog1";
import ComplexSoftware from "@/components/Blog/blogPages/Blog2";
import EnterpriseMobility from "@/components/Blog/blogPages/Blog3";
import RevolutionAI from "@/components/Blog/blogPages/Blog4";
import ManagementSystem from "@/components/Blog/blogPages/Blog5";
import ResumeMaking from "@/components/Blog/blogPages/Blog6";
import ReinventedCarrer from "@/components/Blog/blogPages/blog7";

const blogs = [


  {
    slug: "create-medical-billing-software",
    date: "5 June , 2025",
    img: "/img/blog/blog1.jpg",
    heading: "How to Create Medical Billing Software: Step-by-Step Guide",
    para: "Thinking of building your own medical billing software? Whether you're a developer or a healthcare startup founder, creating billing software for clinics or hospitals can drastically improve efficiency and accuracy. Here's how to get started.",
  content: <MedicalBillingSoftware/>
  },

    {
        slug: "software-development-challenges",
        date : "28 May , 2025",
      img : "/img/blog/blog2.webp",
      heading : "How We Build Complex Software & Applications",
      para : "Women have long been making strides in the world of entrepreneurship, from tech startups to small and medium-sized businesses. With their unique perspectives and innovative approaches, women make exceptional entrepreneurs.",
       content : <ComplexSoftware/>
    },
    {
           slug: "learning-management-system",
        date : "22 May , 2025",
      img : "/img/blog/LMS.jpg",
      heading : "How to build a learning management system?",
      para : "As online learning continues to grow globally, learning management systems (LMS) are revolutionising how we learn. They offer a level of accessibility and flexibility that traditional classrooms simply can’t match, redefining how education is delivered and experienced.",
content : <ManagementSystem/>
    },
    {
           slug: "enterprise-mobility-solutions",
        date : "18 May , 2025",
      img : "/img/blog/blog4.jpg",
      heading : "What are enterprise mobility solutions? A 101 guide",
      para : "If the global pandemic has taught us one thing about work, it’s that the flexibility to work from anywhere isn’t a luxury but a necessity. And with a growing number of companies turning to outsourcing and collaborating with remote expertise, Enterprise Mobility Solutions (EMS) has become a need.",
content : <EnterpriseMobility/>
    },
    {
          slug: "evolution-of-Artificial-Intelligence",
        date : "12 May , 2025",
      img : "/img/blog/blog5.jpg",
      heading : "The evolution of Artificial Intelligence in the automotive industry",
      para : "In an era where people favour smarter phones, smarter televisions and even smarter fridges, the shift towards smarter vehicles is seemingly inevitable. Thanks to Artificial Intelligence (AI), the automotive industry has undergone a groundbreaking transformation.",
      content : <RevolutionAI/>
    },

    {
          slug: "resume-stand-out",
        date : "09 May , 2025",
      img : "/img/blog/blog6.jpg",
      heading : "4 ways to help your resume stand out",
      para : "I have reviewed countless resumes throughout my recruiting career. And I’ve seen it all—the good and the not so good.",
      content : <ResumeMaking/>
    },

      {
          slug: "reinvented-your-carrer",
        date : "05 May , 2025",
      img : "/img/blog/blog7.jpg",
      heading : "Where could reinvention take your career?",
      para : "Companies that are reinventing themselves are also reinventing work and preparing workers for a generative AI world. Lead and learn in new ways to reinvent your career.",
      content : <ReinventedCarrer/>
    },
    
  ]

    export default blogs ;