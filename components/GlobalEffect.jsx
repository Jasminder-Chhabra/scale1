"use client";
import { useEffect } from "react";

export default function GlobalEffects() {
  useEffect(() => {
    const backlight = document.querySelector('.bringer-backlight');
    if (!backlight) return;
    const moveBacklight = (e) => {
      backlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      backlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    document.addEventListener('mousemove', moveBacklight);
    return () => document.removeEventListener('mousemove', moveBacklight);
  }, []);

  useEffect(() => {
    let timeoutId = null;
    const handleContextMenu = (e) => {
      e.preventDefault();
      const rcpWrap = document.querySelector('.bringer-rcp-wrap');
      if (rcpWrap) {
        document.body.classList.add('rcp-show');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          document.body.classList.remove('rcp-show');
        }, 2000);
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
