"use client";
import {
  User,
  Mail,
  ArrowUp,
  Instagram,
  Linkedin,
  Github,
  GithubIcon,
  MailIcon,
  ArrowDown,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { AboutText } from "./_components/AboutText";
import ThemeToggle from "./_components/ThemeToggle";
import Link from "next/link";
import WelcomeLoader from "./_components/WelcomeLoader";

export default function Portfolio() {
  return (
    <>
      <WelcomeLoader />

      <div className="min-h-screen select-none bg-[#0a0a0a] dark:bg-white text-zinc-300 font-sans selection:bg-yellow-500/30">
        {/* =========================================
          MOBILE NAVIGATION (Visible < 768px)
          ========================================= */}

        {/* --- MOBILE TOP BAR --- */}
        <nav className="fixed top-0 left-0 w-full h-16 bg-[#0a0a0a]/90 dark:bg-white backdrop-blur-md border-b border-zinc-700/40 flex md:hidden items-center justify-between px-6 z-40">
          <div className="relative w-10 h-10 aspect-square rounded-full  overflow-hidden border border-zinc-700/50 shadow-sm flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Kaung Htet Aung"
              draggable={false}
              // We make the image fill the parent and change contain to cover so it fills the circle
              className="w-full h-full object-cover"
              // width/height passed to Next.js for optimization (48px = w-12)
              width={48}
              height={48}
            />
          </div>

          <div className="text-xs tracking-[0.4em] text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-900 uppercase  hover:text-zinc-200 transition-colors">
            Kaung Htet Aung
          </div>
        </nav>

        {/* --- MOBILE BOTTOM TAB BAR --- */}
        <nav className="fixed bottom-0 left-0 w-full h-20 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-zinc-800/40 flex md:hidden items-center justify-around px-4 pb-4 pt-2 z-40">
          <button className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1">
            <User size={20} className="text-zinc-400" />
          </button>
          <button className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1">
            <span className="font-bold text-[13px] tracking-[0.2em] text-zinc-400">
              CV
            </span>
          </button>
          <button className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1">
            <Mail size={20} className="text-zinc-400" />
          </button>
          <button className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1">
            <ArrowUp size={20} className="text-zinc-500" />
          </button>
        </nav>

        {/* =========================================
          DESKTOP & TABLET NAVIGATION
          ========================================= */}

        {/* --- LEFT SIDEBAR (Visible on Tablet & Desktop: >= 768px) --- */}
        <aside className="fixed left-0 top-0 w-44 h-screen border-r border-zinc-600/40 dark:border-white hidden md:flex flex-col items-start pl-12 justify-start gap-20 py-6 bg-[#0a0a0a] dark:bg-sidebar-color z-40">
          <div className="relative w-12 h-12 aspect-square rounded-full  overflow-hidden border border-zinc-700/50 shadow-sm flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Kaung Htet Aung"
              draggable={false}
              // We make the image fill the parent and change contain to cover so it fills the circle
              className="w-full h-full object-cover"
              // width/height passed to Next.js for optimization (48px = w-12)
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col">
            <ul className="text-zinc-200 dark:text-zinc-800 flex flex-col gap-4 w-fit font-quantito">
              <li>
                <Link
                  href="#work"
                  className="group relative w-20 inline-block transition-colors duration-300 hover:text-[#51C29A]"
                >
                  Home
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-[#51C29A] transition-all duration-300 w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="#work"
                  className="group relative w-20 inline-block transition-colors duration-300 hover:text-[#51C29A]"
                >
                  SKILLS
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#51C29A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="group relative w-20 inline-block transition-colors duration-300 hover:text-[#51C29A]"
                >
                  PROJECT
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#51C29A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="group relative w-20 inline-block transition-colors duration-300 hover:text-[#51C29A]"
                >
                  {/* Animated Underline */}
                  EDUCATION
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#51C29A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="group relative w-20 inline-block transition-colors duration-300 hover:text-[#51C29A]"
                >
                  EXPERIENCE
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#51C29A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
            <div className="flex  flex-col items-start gap-0.5 mt-8">
              {/* User Button */}
              <button className="p-3 pl-0 transition-transform duration-300 hover:-translate-y-1 group">
                <Linkedin
                  size={24}
                  className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                  fill="currentColor"
                />
              </button>

              {/* CV Text */}
              <button className="p-3 pl-0  transition-transform duration-300 hover:-translate-y-1 group">
                <Github
                  size={24}
                  className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                  fill="currentColor"
                />
              </button>
              <button className="p-3 pl-0 transition-transform duration-300 hover:-translate-y-1 group">
                <Linkedin
                  size={24}
                  className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                  fill="currentColor"
                />
              </button>

              {/* CV Text */}
              <button className="p-3 pl-0  transition-transform duration-300 hover:-translate-y-1 group">
                <Github
                  size={24}
                  className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                  fill="currentColor"
                />
              </button>
              {/* Mail Button */}
            </div>
          </div>

          <div className="text-[9px] mt-auto font-bold  text-zinc-400 dark:text-zinc-400 uppercase -ml-3">
            <span className="text-md"> ©</span>
            <span className="text-md"> {new Date().getFullYear()} K.H.A</span>
          </div>
        </aside>

        {/* --- RIGHT SIDEBAR (Visible ONLY on Large Desktop: >= 1024px) --- */}
        <aside className="fixed right-0 top-0 w-44 h-screen border-l border-zinc-600/40 dark:border-white hidden lg:flex flex-col items-center justify-between py-8 bg-[#0a0a0a] dark:bg-sidebar-color z-40">
          {/* 1. TOP: Theme Toggle (Closed properly) */}
          <div className="w-20 h-12  flex items-center justify-center">
            <ThemeToggle />
          </div>

          {/* (If you have social icons in the middle, they would go here) */}

          {/* 2. BOTTOM: Scroll Indicator (Now completely outside the ThemeToggle div) */}
          <div className="flex flex-col items-center gap-3 mt-auto">
            <div
              className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase cursor-default"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </div>

            {/* Framer Motion Bouncing Arrow */}
            <motion.div
              animate={{
                y: [0, 10, 0], // Moves down 10px and back up
              }}
              transition={{
                duration: 2, // Total time for one bounce cycle
                repeat: Infinity, // Loops forever
                ease: "easeInOut", // Smooth acceleration/deceleration
              }}
              className="text-zinc-500"
            >
              <ChevronDown size={18} strokeWidth={2.5} />
            </motion.div>
          </div>
        </aside>

        {/* =========================================
          MAIN SCROLLING CONTENT
          ========================================= */}

        <main className="pt-24 pb-28 md:pt-0 md:pb-32 md:ml-44 lg:mr-44">
          {/* Top Status Bar */}
          <header className="relative z-10 w-full md:h-20 h-8 md:border-b dark:border-[#F8843F]/30  border-zinc-800/50 flex items-start md:items-center justify-between px-8">
            {/* Solution 2: The Watermark Logo */}
            <div className="hidden md:block text-xs tracking-[0.4em] text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-900 uppercase  hover:text-zinc-200 transition-colors">
              Kaung Htet Aung
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border dark:border-zinc-200 dark:bg-zinc-50 border-zinc-800/80 bg-zinc-900/30 text-[10px] sm:text-xs dark:text-zinc-600 text-zinc-300 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#51C29A] animate-pulse"></span>
              LOCAL TIME (MMT) 11:58
            </div>
            {/* Fixed Timezone to Myanmar Time (MMT) with live indicator */}
          </header>

          {/* Inner Centered Content */}
          <div className="max-w-300 mx-auto px-8 md:px-8 lg:px-14">
            {/* Hero Section: 3-Column Row on Desktop, Stacked on Mobile */}
            <section className="flex flex-col lg:flex-row items-center  justify-center gap-10 md:gap-8 lg:gap-8 mt-12 md:mt-10 mb-24">
              {/* 1. The Heading (Left side of row, Top on mobile) */}
              <div className="flex flex-col items-end gap-5">
                {/* The Heading Block */}
                <div className="flex-1 max-w-75">
                  <h2 className="text-right md:text-right uppercase font-quantito tracking-wide leading-snug">
                    {/* Dimmer, slightly smaller greeting */}
                    <span className="block text-[#408A71]/80 text-2xl lg:text-3xl mb-1">
                      Hello! I Am
                    </span>
                    {/* Brighter, bolder name */}
                    <span className="block text-[#51C29A] text-4xl lg:text-5xl font-bold">
                      Kaung Htet
                    </span>
                  </h2>
                </div>

                {/* The CTA Block */}
                <div className="flex items-center justify-end gap-4">
                  {/* Softened Microcopy */}
                  <span className="text-zinc-400 dark:text-zinc-800 font-light text-sm md:text-base">
                    Feel free to
                  </span>

                  {/* High-Contrast, Interactive Button */}
                  <a
                    href="mailto:your.email@example.com"
                    className="group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#51C29A]/40 dark:text-[#075338] bg-[#51C29A]/10 text-[#51C29A] font-medium transition-all duration-300 shadow-[0_0_15px_rgba(81,194,154,0.05)] hover:bg-[#51C29A] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(81,194,154,0.3)]"
                  >
                    <Mail className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:rotate-[-10deg]" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>

              {/* 2. The Photo (Middle of row, Between H2 and P) */}
              <div className="shrink-0 relative flex justify-center items-center">
                {/* 1. Background Glow Element - Animated with Framer Motion */}
                <motion.div
                  animate={{
                    scale: [1.1, 1.25, 1.5, 1.1],
                    opacity: [0.1, 0.2, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-red-400 blur-[100px] rounded-full w-full h-full"
                />

                {/* 2. Photo Container - This container now has normal visibility */}
                <div className="relative z-10 ">
                  {/* Corrected width and height custom classes for a standing photo */}
                  <div className="relative w-64 md:w-72 h-96 md:h-112.5 overflow-hidden">
                    <Image
                      src="/images/me.webp"
                      alt="Kaung Htet Aung"
                      draggable={false}
                      className="w-full h-full object-contain "
                      width={256}
                      height={450}
                    />
                  </div>
                </div>
              </div>

              {/* 3. The Paragraph (Right side of row, Bottom on mobile) */}
              <div className="flex-1 text-center md:text-left max-w-md">
                <AboutText />
              </div>
            </section>

            {/* Statistics Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 py-12 border-t border-b border-dashed border-zinc-800/60  dark:bg-white mb-24 relative bg-[#0a0a0a]">
              <div className="text-center flex flex-col gap-2">
                <div className="text-4xl font-bold text-[#51C29A]">10+</div>
                <div className="text-[13px] text-zinc-500 tracking-wide">
                  Happy Clients
                </div>
              </div>
              <div className="text-center flex flex-col gap-2 md:border-l md:border-r border-dashed border-zinc-800/60">
                <div className="text-4xl font-bold text-[#51C29A]">2+</div>
                <div className="text-[13px] text-zinc-500 tracking-wide">
                  Years of Experience
                </div>
              </div>
              <div className="text-center flex flex-col gap-2">
                <div className="text-4xl font-bold text-[#51C29A]">20+</div>
                <div className="text-[13px] text-zinc-500 tracking-wide">
                  Completed Tasks
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
