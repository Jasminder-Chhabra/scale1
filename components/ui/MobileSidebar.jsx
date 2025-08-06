// components/MobileSidebar.js
import { X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services', hasSubmenu: true },
  { label: 'Products', href: '/products', hasSubmenu: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Careers', href: '/career' },
];

const MobileSidebar = ({ onClose }) => {
  const pathname = usePathname();
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
        {menuItems.map(({ label, href, hasSubmenu }) => {
         
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center justify-between text-2xl  text-white font-medium`}
              onClick={onClose}
             style={{color : "white"}}
            >
              {label}
              {hasSubmenu && <ChevronRight size={20} />}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default MobileSidebar;
