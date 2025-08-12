import React, { useEffect, useState } from 'react';

const MidFirstSection = ({data}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Trigger sticky behavior after scrolling past 1 viewport height
    if (scrollY > vh ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden bg-black" data-unload="fade-up">
{/* ${ isSticky ? 'fixed top-0 left-0 w-full z-[-0] ' : 'relative z-10'      } */}
    <section
      className={`mid-first-section bg-black text-white py-20 flex flex-col items-center justify-center transition-all duration-500`} 
    >
      <p className=" font-heading font-semibold text-sm uppercase tracking-px mb-6"  data-appear="fade-up" data-unload="fade-up">
        App Flow
      </p>
      <h2 className="text-3xl sm:text-7xl font-heading font-semibold text-center" data-appear="fade-up" data-unload="fade-up">
        {data?.heading || "How does Handyman Work?"}
      </h2>
      <div className="mt-2 max-w-5xl w-full z-10 mx-auto"  data-stagger-appear="fade-up"
                data-stagger-unload="fade-up"
                >
<img src={data?.img} alt="" />
      </div>
    </section>
    </div>
  );
};

export default MidFirstSection;