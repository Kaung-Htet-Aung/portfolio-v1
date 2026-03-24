"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function WelcomeLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // The text we want to split by spaces
  const name = "KAUNG HTET AUNG";
  const words = name.split(" ");

  // Animation for the parent container
  const textContainerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  // Animation for each individual word (The Focus Pull)
  const wordVariant: Variants = {
    hidden: {
      filter: "blur(12px)",
      opacity: 0,
      y: 15,
      scale: 1.1,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // 1. The Progress Timer Effect
  useEffect(() => {
    const duration = 1800;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // 2. DOM Side-Effects: Scroll Lock & Mobile Safari UI Color
  useEffect(() => {
    // Locate or inject the meta theme-color tag
    let metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }

    if (isLoading) {
      // Lock scroll and tint native browser UI to match the doors
      document.body.style.overflow = "hidden";
      metaThemeColor.setAttribute("content", "#51C29A");
    } else {
      // Wait 1000ms for exit animations, then restore scroll and base UI color
      const cleanupTimer = setTimeout(() => {
        document.body.style.overflow = "";
        // IMPORTANT: Change #FFFFFF to your actual site background color (e.g., #0f172a for dark mode)
        metaThemeColor.setAttribute("content", "#FFFFFF");
      }, 1000);

      return () => clearTimeout(cleanupTimer);
    }

    // Failsafe cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-wrapper"
          exit={{ opacity: 0, transition: { duration: 0.1, delay: 1 } }}
          className="fixed inset-0 z-9999 pointer-events-none"
        >
          {/* =========================================
              TOP DOOR (Slides UP)
              ========================================= */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#51C29A]"
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.7,
              ease: [0.85, 0, 0.15, 1],
              delay: 0.1,
            }}
          >
            {/* NAME: Attached exactly to the bottom lip of the top door */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center pb-1.5 z-10">
              <motion.h1
                variants={textContainerVariant}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-3xl font-bold tracking-[0.3em] uppercase text-white font-quantito flex gap-x-4"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariant}
                    className="inline-block will-change-[filter,transform,opacity]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </motion.div>

          {/* =========================================
              BOTTOM DOOR (Slides DOWN)
              ========================================= */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#51C29A]"
            exit={{ y: "100%" }}
            transition={{
              duration: 0.7,
              ease: [0.85, 0, 0.15, 1],
              delay: 0.1,
            }}
          >
            {/* SUBTITLE & BAR: Attached exactly to the top lip of the bottom door */}
            <div className="absolute top-4 left-0 w-full flex flex-col items-center pt-1.5 z-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="text-xs md:text-sm text-white tracking-[0.2em]"
              >
                Professional Full Stack Developer
              </motion.p>

              {/* LOADING BAR CAN GO HERE */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
