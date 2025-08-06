import { PricingCard } from "@/components/ui/dark-gradient-pricing";

function PricingDemo({ data }) {
  return (
    <section
      className="relative overflow-hidden bg-background text-foreground"
      data-appear="fade-up"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-12 space-y-3" data-appear="fade-down">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Choose your plan
          </h2>
          <p className="text-center text-lg text-muted-foreground md:text-lg">
            Good investments will give you 10x more revenue.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 gap-6 md:grid-cols-${data.length} w-[100%]`}>
          {data.map((plan, index) => (
            <div key={plan.tier} data-appear="fade-up" data-delay={index * 100}>
              <PricingCard
                tier={plan.tier}
                bestFor={plan.bestFor}
                CTA={plan.CTA}
                benefits={plan.benefits}
                length={data.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingDemo };
