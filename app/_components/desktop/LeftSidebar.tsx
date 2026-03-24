import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
export default function LeftSidebar() {
  return (
    <div>
      <aside className="fixed left-0 top-0 w-44 h-screen border-r border-zinc-600/40 dark:border-white hidden md:flex flex-col items-start pl-12 justify-start gap-20 py-6 bg-[#0a0a0a] dark:bg-white z-40">
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
    </div>
  );
}
