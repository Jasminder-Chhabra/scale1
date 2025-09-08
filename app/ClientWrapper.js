"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "nprogress/nprogress.css";
import "../public/css/config.css";
import "../public/css/libs.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

export default function ClientWrapper({ children }) {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  // Backlight Effect
  useEffect(() => {
    const backlight =
      document.querySelector(".bringer-backlight") ||
      document.createElement("div");
    if (!document.querySelector(".bringer-backlight")) {
      backlight.className = "bringer-backlight";
      document.body.appendChild(backlight);
    }

    const moveBacklight = (e) => {
      backlight.style.setProperty("--mouse-x", `${e.clientX}px`);
      backlight.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    document.addEventListener("mousemove", moveBacklight);
    return () => document.removeEventListener("mousemove", moveBacklight);
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      window.location.reload();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return <div className={isExiting ? "is-unloading" : ""}>{children}</div>;
}
