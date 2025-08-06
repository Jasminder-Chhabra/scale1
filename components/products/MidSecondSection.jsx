import React from 'react'

const BentoGrid = ({ data }) => {
  const items = data?.gridItems || [];

  return (
    <div className="flex items-center justify-center p-6">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl w-full"
        data-appear="fade-up"
        data-unload="fade-up"
      >
        {/* First Card */}
        {items[0] && (
          <div className="md:col-span-1" data-appear="fade-up" data-unload="fade-up">
            <BentoCard
              icon={items[0].image}
              title={items[0].title}
              description={items[0].technology}
              textColor="text-gray-100"
            />
          </div>
        )}

        {/* Center Description */}
        <div
          className="md:col-span-2 order-1 md:order-none md:row-span-2 md:p-16 px-6 py-6 rounded-lg shadow-lg flex flex-col justify-center"
          data-appear="fade-up"
          data-unload="fade-up"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Platform Used</h2>
          <p className="text-gray-200 text-lg">
            Behind the scenes of such applications, there are a number of app development frameworks, which are striving to give you the best user experience. Among which we are using the frameworks that offer the ultimate experience for creating robust applications.
          </p>
        </div>

        {/* Second Card */}
        {items[1] && (
          <div className="md:col-span-1" data-appear="fade-up" data-unload="fade-up">
            <BentoCard
              icon={items[1].image}
              title={items[1].title}
              description={items[1].technology}
              textColor="text-gray-100"
            />
          </div>
        )}

        {/* Third Card */}
        {items[2] && (
          <div className="md:col-span-1" data-appear="fade-up" data-unload="fade-up">
            <BentoCard
              icon={items[2].image}
              title={items[2].title}
              description={items[2].technology}
              textColor="text-gray-100"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoGrid;

 
 const BentoCard = ({ icon, title, description, bgColor, textColor }) => {
  return (
    <div
      className={`p-6 pr-0 rounded-lg shadow-2xl ${bgColor} ${textColor} flex flex-col gap-4 border-2`}
      data-appear="fade-up"
      data-unload="fade-up"
    >
      <div className="flex items-center gap-3">
        <div>
          <img src={icon} alt={title} className="h-20 w-20" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

   
