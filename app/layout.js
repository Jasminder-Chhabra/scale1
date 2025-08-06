"use client";
import "nprogress/nprogress.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '../public/css/config.css';
import '../public/css/libs.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

export default function RootLayout({ children }) {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  // Backlight Effect
  useEffect(() => {
    const backlight = document.querySelector('.bringer-backlight') || document.createElement('div');
    if (!document.querySelector('.bringer-backlight')) {
      backlight.className = 'bringer-backlight';
      document.body.appendChild(backlight);
    }

    const moveBacklight = (e) => {
      backlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      backlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', moveBacklight);
    return () => document.removeEventListener('mousemove', moveBacklight);
  }, []);

  // Check if element is in view
  const isInView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Page transition
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (!link || link.target === '_blank' || !link.href.startsWith(window.location.origin)) return;

      const href = link.href.replace(window.location.origin, '');
      const isInternal = href && !href.startsWith('http') && !href.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i);

      if (isInternal) {
        e.preventDefault();
        setIsExiting(true);
        document.body.classList.add('is-unloading');

        let unloadDelay = 0;
        const header = document.querySelector('#bringer-header');
        const footer = document.querySelector('#bringer-footer');

        if (header && isInView(header) && header.hasAttribute('data-unload')) {
          unloadDelay = 150;
          header.classList.add('is-unloading');
        }

        if (footer && isInView(footer) && footer.hasAttribute('data-unload')) {
          unloadDelay = 150;
          footer.classList.add('is-unloading');
        }

        setTimeout(() => {
          document.querySelectorAll('[data-unload]').forEach((el) => {
            if (isInView(el)) {
              const delay = el.getAttribute('data-delay') ? parseInt(el.getAttribute('data-delay'), 10) : 0;
              setTimeout(() => {
                el.classList.add('is-unloading');
              }, delay);
            }
          });

          setTimeout(() => {
            router.push(href);
            setTimeout(() => {
              document.body.classList.remove('is-unloading');
              document.querySelectorAll('.is-unloading').forEach((el) => el.classList.remove('is-unloading'));
              setIsExiting(false);
            }, 100);
          }, 100);
        }, unloadDelay);
      }
    };

    // document.addEventListener('click', handleLinkClick);
    // return () => document.removeEventListener('click', handleLinkClick);
  }, [router]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      window.location.reload();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <html lang="en" className="dark">
      <body className={isExiting ? 'is-unloading' : ''}>
       
        {children}
      </body>
    </html>
  );
}
