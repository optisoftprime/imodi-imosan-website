"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid running on server
    if (typeof window === "undefined") return;

    // Helper to add reveal classes and observe elements
    const setupRevealObserver = () => {
      // Find all sections, main containers, and grids
      const targets = document.querySelectorAll(
        "section, main > div, .grid > div, h1, h2, .reveal-element"
      );

      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px", // triggers slightly before entering view
        threshold: 0.05,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Once visible, we can unobserve if we want animations to run once
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      targets.forEach((el) => {
        // Skip elements that already have animation controls (like navbar or footer-specific ones)
        if (
          el.closest("nav") || 
          el.closest("footer") || 
          el.id === "navbar" || 
          el.tagName === "NAV"
        ) {
          return;
        }

        // Apply classes
        if (el.classList.contains("grid") || el.tagName === "SECTION" || el.classList.contains("scale-animate")) {
          el.classList.add("reveal-scale");
        } else {
          el.classList.add("reveal");
        }

        observer.observe(el);
      });

      return observer;
    };

    // Delay slightly to allow next.js hydration to complete
    const timeoutId = setTimeout(() => {
      const observer = setupRevealObserver();
      return () => {
        observer?.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
