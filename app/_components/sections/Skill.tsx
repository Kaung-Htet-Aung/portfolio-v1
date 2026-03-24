"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NEXT JS",
    "ZUSTAND",
    "TAILWIND CSS",
    "FRAMER MOTION",
    "DOM",
    "UNIT TEST",
    "PERFORMANCE OPTIMIZE",
    "SSR",
  ],
  backend: [
    "NODE",
    "BUN",
    "EXPRESS",
    "REST API",
    "ZOD VALIDATION",
    "JWT/OAUTH",
    "SQL",
    "POSTGRES",
    "PRISMA ORM",
    "DB MODELING",
    "STRIPE PAYMENTS",
  ],
  other: [
    "JAVASCRIPT",
    "TYPESCRIPT",
    "PYTHON",
    "GO",
    "REACT NATIVE",
    "GIT",
    "GITHUB",
    "LINUX",
    "WORDPRESS",
    "VPS",
    "VERCEL",
    "UX/UI DESIGN",
    "PRODUCT DESIGN",
    "FIGMA",
    "ADOBE XD",
    "WIREFRAME",
  ],
};

export default function Skill() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 pt-0 relative overflow-x-hidden transition-colors duration-300 dark:bg-white">
      {/* 1. BACKGROUND: Now absolute so it doesn't force a strict 100vh height on the parent */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1)_0%,transparent_75%)] pointer-events-none"></div>

      {/* 2. CONTENT CONTAINER: Now relative (in standard flow). 
             This allows the parent to dynamically grow as you add more skills! */}
      <div className="relative z-10 flex flex-col w-full max-w-5xl px-4 items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-8 py-3 rounded border dark:border-stone-300 border-slate-600  dark:bg-white bg-slate-900/90 dark:shadow-md shadow-lg z-10 transition-colors"
        >
          <h1 className="text-xl dark:font-bold font-semibold dark:text-stone-800 text-slate-200 tracking-widest transition-colors">
            MY SKILLS
          </h1>
        </motion.div>

        {/* Vertical drop from top node */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 40 }} /* 40px = h-10 */
          viewport={{ once: true }}
          className="w-px dark:bg-stone-300 bg-slate-500 transition-colors"
        />

        {/* 2. THE MAIN TREE SPLIT */}
        <div className="w-full lg:w-3/4 lg:border-t dark:border-stone-300 border-slate-500 flex flex-col lg:flex-row justify-between relative transition-colors">
          {/* Center drop line (Desktop only) */}
          <div className="absolute left-1/2 top-0 -bottom-25 w-px dark:bg-stone-300 bg-slate-500 -translate-x-1/2 hidden lg:block transition-colors" />

          {/* LEFT COLUMN: FRONTEND */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:pt-6 relative">
            <div className="absolute top-0 left-0 w-px h-6 dark:bg-stone-300 bg-slate-500 hidden lg:block transition-colors" />

            <div className="px-6 py-2 rounded border dark:border-stone-300 border-slate-600 dark:bg-stone-50 bg-slate-800/90 mb-6 lg:-ml-16 relative z-10 shadow-sm transition-colors">
              <span className="text-sm dark:font-bold font-semibold dark:text-orange-600 text-blue-300 tracking-wider transition-colors">
                FRONTEND
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start lg:-ml-16 gap-3 content-start">
              {skills.frontend.map((skill, index) => (
                <SkillButton key={skill} delay={index * 0.05}>
                  {skill}
                </SkillButton>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet connecting line */}
          <div className="w-px h-12 bg-stone-300 dark:bg-slate-500 lg:hidden my-2 mx-auto transition-colors" />

          {/* RIGHT COLUMN: BACKEND */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 lg:pt-6 relative">
            <div className="absolute top-0 right-0 w-px h-6 dark:bg-stone-300 bg-slate-500 hidden lg:block transition-colors" />

            <div className="px-6 py-2 rounded border dark:border-stone-300 border-slate-600 dark:bg-stone-50 bg-slate-800/90 mb-6 lg:-mr-16 relative z-10 shadow-sm transition-colors">
              <span className="text-sm dark:font-bold font-semibold dark:text-orange-600 text-blue-300 tracking-wider transition-colors">
                BACKEND
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:-mr-16 lg:justify-end gap-3 content-start">
              {skills.backend.map((skill, index) => (
                <SkillButton key={skill} delay={index * 0.05}>
                  {skill}
                </SkillButton>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet connecting line */}
        <div className="w-px h-12 bg-stone-300 dark:bg-slate-500 lg:hidden mt-2 mx-auto transition-colors" />

        {/* 3. BOTTOM SECTION: TOOLS & LANGUAGES */}
        <div className="relative flex flex-col items-center lg:mt-32 w-full max-w-3xl lg:pt-8">
          <div className="lg:absolute lg:-top-5 px-6 py-2 rounded border dark:border-stone-300 border-slate-600 dark:bg-stone-50 bg-slate-800/90 z-10 mb-6 lg:mb-0 shadow-sm transition-colors">
            <span className="text-sm dark:font-bold font-semibold dark:text-orange-600 text-blue-300 tracking-wider transition-colors">
              TOOLS & LANGUAGES
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:mt-4">
            {skills.other.map((skill, index) => (
              <SkillButton key={skill} delay={index * 0.05}>
                {skill}
              </SkillButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillButton({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 rounded-md border dark:border-stone-200 border-slate-600 dark:bg-white bg-slate-800/90 dark:hover:bg-orange-50 hover:bg-slate-700 dark:hover:border-orange-400 hover:border-blue-400 transition-colors cursor-default shadow-sm"
    >
      <span className="text-xs md:text-sm font-medium dark:text-stone-700 text-blue-200 tracking-wide transition-colors">
        {children}
      </span>
    </motion.div>
  );
}
