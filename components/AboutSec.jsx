
import React from 'react';
import { CategoryList, Category } from '@/components/category-list';
import { LayoutGrid, Bot, Code, Palette, ArrowRight, TvMinimal, TextCursor, Rocket, Cloud, Brain, Newspaper, ShoppingBag } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';
import { StarIcon } from 'lucide-react/dist/cjs/lucide-react';

const sampleCategories = [
  {
    id: 1,
    title: 'Scale DIGITAL',
    subtitle: 'Scaling your online presence with cutting-edge digital solutions.',
    // onClick: () => alert('Navigating to Featured Project...'),
    icon: <TvMinimal className="w-8 h-8"  strokeWidth={1} />,
    featured: true, 
  },
  {
    id: 2,
    title: 'Scale TECH',
    subtitle: 'Scaling your technology infrastructure for a smarter, future-ready business.',
    // onClick: () => alert('Navigating to AI...'),
    icon: <Rocket className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 3,
    title: 'Scale TALENT',
    subtitle: 'Scaling your team with top-notch talent and staffing solutions.',
    // onClick: () => alert('Navigating to Design...'),
    icon: <PersonIcon className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 4,
    title: 'Scale CLOUD',
    subtitle: 'Scaling your business to the cloud for limitless growth and flexibility.',
    // onClick: () => alert('Navigating to Dev Kits...'),
    icon: <Cloud className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 5,
    title: 'Scale BRAND',
    subtitle: 'Scaling your brand visibility and reputation in a competitive market.',
    // onClick: () => alert('Navigating to Dev Kits...'),
    icon: <Brain className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 6,
    title: 'Scale INNOVATE',
    subtitle: 'Scaling your product ideas from concept to market success.',
    // onClick: () => alert('Navigating to Dev Kits...'),
    icon: <Newspaper className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 7,
    title: 'Scale COMMERCE',
    subtitle: 'Scaling your eCommerce platform for seamless, global transactions.',
    // onClick: () => alert('Navigating to Dev Kits...'),
    icon: <ShoppingBag className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 8,
    title: 'Scale GROWTH',
    subtitle: 'Scaling your sales and marketing efforts to boost revenue.',
    // onClick: () => alert('Navigating to Dev Kits...'),
    icon: <StarIcon className="w-8 h-8"  strokeWidth={1} />,
  },
  {
    id: 9,
    title: 'Scale INSIGHT',
    subtitle: 'Scaling your data analytics to gain actionable business insights.',
    // onClick: () => alert('Navigating to Dev Kits...'),
    icon: <Code className="w-8 h-8"  strokeWidth={1}  />,
  },
];


const CategoryListDemo = () => {
  return (
    <section className='pb-0 pt-18'>
    <div className="w-full  ">
      <CategoryList
        title="OUR OFFERING"
        // subtitle="Core Features"
        categories={sampleCategories}
        // headerIcon={<LayoutGrid className="w-8 h-8"  strokeWidth={1} />}
      />
    </div>
    </section>
  );
};

export default CategoryListDemo;