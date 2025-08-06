import LaptopShowcase from "./LaptopShowcase";
import MobileShowCase from "./MobileShowCase";

export default function FeaturesPage({ data, data2 }) {
  const featuresPage = data;
  const AdminPage = data2;

  return (
    <>
      {/* Mobile Feature Section */}
      <section className="py-8 md:py-16">
        <div className="md:max-w-8xl md:mx-20 px-6 md:px-4 space-y-20">
          {featuresPage.map((section, index) => (
            <div
              key={index}
              data-appear="fade-up"
              data-unload="fade-up"
            >
              <MobileShowCase
                heading={section.heading}
                para={section.para}
                featureTabs={section.data}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Admin Feature Section */}
      <section className="py-8 md:py-16">
        <div className="md:max-w-8xl md:mx-20 px-6 md:px-4 space-y-20">
          {AdminPage.map((section, index) => (
            <div
              key={index}
              data-appear={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-unload={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <LaptopShowcase
                heading={section.heading}
                para={section.para}
                featureTabs={section.data}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
