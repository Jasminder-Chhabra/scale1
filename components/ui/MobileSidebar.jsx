// components/MobileSidebar.js
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { useState } from 'react';
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services', hasSubmenu: false },
  { label: 'Products', href: '/products', hasSubmenu: true , 
      submenu: [
      { label: 'Pixel Profile', href: '/pixel-profile' },
      { label: 'Bharat Ai', href: '/bharataipragati' },
      { label: 'Growth Hunt', href: '/growthhunt' },
      { label: 'Restraunt POS', href: '/restaurant-POS' },
          { label: 'Shop App', href: '/shopping' },
      { label: 'Analytics App', href: '/analytics' },
      { label: 'Simply Tap App', href: '/Simplytap' },
    ],
  },
  { label: 'Become Partner', href: '/become-partner' },
    { label: 'Portfolio', href: '/portfolio' },

  { label: 'Careers', href: '/career' },
];

const MobileSidebar = ({ onClose }) => {
  const pathname = usePathname();
    const [openSubmenu, setOpenSubmenu] = useState(null);

      const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

console.log('MobileSidebar pathname:', pathname);
  return (
    <motion.div
  initial={{ x: '100%' }} 
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ duration: 0.3 }}
  className=" inset-0 backdrop-blur-lg backdrop-saturate-150 text-white p-6 px-10 backdrop-blur-sm w-full h-[100vh] z-50 top-20"
>

      <nav className="space-y-6">
         {menuItems.map(({ label, href, hasSubmenu, submenu }) => (
          <div key={label}>
            {hasSubmenu ? (
              <li
                onClick={() => toggleSubmenu(label)}
                className="flex items-center justify-between text-2xl font-medium w-full"
              >
                {label}
                {openSubmenu === label ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </li>
            ) : (
              <Link
                href={href}
                className="flex items-center justify-between text-2xl font-medium text-white"
                style={{color : "white"}}
                onClick={onClose}
              >
                {label}
              </Link>
            )}
  {/* Submenu */}
            {hasSubmenu && openSubmenu === label && (
              <div className="ml-4 mt-4 space-y-3">
                {submenu?.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="text-lg text-white block"
                    style={{color: "white"}}
                    onClick={onClose}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileSidebar;
