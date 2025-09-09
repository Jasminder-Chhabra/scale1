import { useState , useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlignLeft, ChevronDown, X } from 'lucide-react'; // Lucide icons
import MobileSidebar from './ui/MobileSidebar';
import CompanyMenu from './megamenu/CompanyMenu';
import ServicesMenu from './megamenu/ServicesMenu';
import ProductsMenu from './megamenu/ProductsMenu';


const Header = () => {

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
// console.log('Header pathname:', mobileMenuOpen);
  const isActive = (paths) => {
    if (Array.isArray(paths)) {
      return paths.some(path => pathname.startsWith(path));
    }
    return pathname === paths || (paths !== '/' && pathname.startsWith(paths));
  };
    const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="bringer-header" className="is-frosted is-sticky "  data-stagger-delay="100" data-appear="fade-down" data-unload="fade-up" style={{
background: "rgba( 0, 0, 0, 0.45 )",
  backdropFilter: "blur( 10px )",
  WebkitBackdropFilter: "blur( 10px )"
      
    }}>
      {/* ✅ DESKTOP HEADER */}
      <div className="bringer-header-inner hidden md:flex justify-between items-center px-4" >
        <div className="bringer-header-lp">
          <Link href="/" className="bringer-logo">
            <img src="/img/Scale Us Logo.svg" alt="Scale Us Logo" width="200" height="88" data-stagger-appear="fade-left"  data-delay="75" />
          </Link>
        </div>

        <div className="bringer-header-mp">
          <nav className="bringer-nav">
           
            <ul className="main-menu flex gap-8" data-stagger-delay="75" data-stagger-appear="fade-down"  onMouseLeave={() => setActiveMenu(null)} >
              <li className={pathname === '/' ? 'current-menu-parent' : ''} data-delay="75" data-unload="none" data-threshold="0.5">
                <Link href="/">Home</Link>
              </li>
              <li
                onMouseEnter={() => setActiveMenu('company')}
                data-delay="75" data-unload="none" data-threshold="0.5"
                className={isActive('/about-us') ? 'current-menu-parent ' : ''}
              >
                <Link href="/about-us" >Company <ChevronDown className='inline' size="20px" /></Link>
                <AnimatePresence>
                  {activeMenu === 'company' && <CompanyMenu />}
                </AnimatePresence>
              </li>
              <li
              data-delay="75" data-unload="none" data-threshold="0.5"
                onMouseEnter={() => setActiveMenu('services')}
                className={isActive('/services') ? 'current-menu-parent' : ''}
              >
                <Link href="/services">Services <ChevronDown className='inline' size="20px" /></Link>
                <AnimatePresence>
                  {activeMenu === 'services' && <ServicesMenu />}
                </AnimatePresence>
              </li>
              <li
              data-delay="75" data-unload="none" data-threshold="0.5"
                onMouseEnter={() => setActiveMenu('products')}
                className={pathname.includes('products') ? 'current-menu-parent' : ''}  
              >
                <Link href="">Products <ChevronDown className='inline' size="20px"  /></Link>
                <AnimatePresence>
                  {activeMenu === 'products' && <ProductsMenu />}
                </AnimatePresence>
              </li>
              <li className={isActive('/portfolio') ? 'current-menu-parent' : ''} data-delay="75" data-unload="none" data-threshold="0.5">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className={isActive('/become-partner') ? 'current-menu-parent' : ''} data-delay="75" data-unload="none" data-threshold="0.5">
                <Link href="/become-partner">Become Partner</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bringer-header-rp" data-stagger-appear="fade-right"  data-delay="75">
          <Link href="/contact-us" className="bringer-button">Get in Touch</Link>
        </div>
         
      </div>
{(
  pathname.includes("blog") ||
  pathname.includes("terms-of-use") ||
  pathname.includes("privacy-policy")
) && (
  <div
    className="h-1 w-full bg-[length:300%_100%] bg-no-repeat"
    style={{
      width: `${scrollProgress}%`,
      backgroundImage:
        "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
      backgroundPosition: `${scrollProgress}% 0%`, // this line makes it "move"
    }}
  />
)}



      {/* ✅ MOBILE HEADER */}
      <div className="bringer-mobile-header-inner flex justify-between items-center px-4 py-4 md:hidden z-50">
        <Link href="/" className="bringer-logo">
          <img src="/img/Scale Us Logo.svg" alt="Scale Us Logo" width="150" height="30" />
        </Link>
       {!mobileMenuOpen ?   <div
          onClick={() => setMobileMenuOpen(true)}
          
          className="text-white bg-purple-800 p-3 rounded-lg shadow-lg cursor-pointer z-50"
        >
         <AlignLeft size={28}/>
        </div>: <div onClick={() => setMobileMenuOpen(false)}
          className="text-white border border-gray-500 p-3 rounded-lg shadow-lg cursor-pointer z-50"
          >

          <X size={28} />
        </div>
       
       }
      </div>

      {/* ✅ MOBILE SIDEBAR */}
<AnimatePresence>
  {mobileMenuOpen && (
    
    <MobileSidebar onClose={() => setMobileMenuOpen(false)} />
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
