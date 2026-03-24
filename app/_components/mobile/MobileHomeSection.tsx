import React from "react";
import Image from "next/image";
import { AboutText } from "../AboutText";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
export default function MobileHomeSection() {
  return (
    <section className="flex flex-col lg:hidden lg:flex-row items-center  justify-center gap-10 md:gap-8 lg:gap-8 mt-12 md:mt-10 mb-24">
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

      <div className="shrink-0 relative flex justify-center items-center bg-transparent">
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
          className="absolute inset-0 bg-red-400 blur-[100px]  rounded-full w-full h-full"
        />

        {/* 2. Photo Container - This container now has normal visibility */}

        <div className="relative z-10 bg-transparent">
          {/* Corrected width and height custom classes for a standing photo */}

          <div className="relative w-64 md:w-72 h-96 bg-transparent md:h-112.5 overflow-hidden">
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
  );
}
