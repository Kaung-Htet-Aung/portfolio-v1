import { Mail } from "lucide-react";
import Image from "next/image";
import { AboutText } from "../AboutText";
import { motion } from "framer-motion";

export default function DesktopHomeSection() {
  return (
    <section className="lg:flex flex-col hidden lg:flex-row  items-center  justify-center gap-10 md:gap-8 lg:gap-20 mt-12 md:mt-10 mb-24">
      <div className="shrink-0 relative flex justify-center items-center">
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
      <div className="flex-1 w-full max-w-md flex flex-col items-center text-center md:items-start md:text-left gap-6">
        <div className="w-full">
          <h2 className="uppercase font-quantito tracking-wide leading-tight">
            <span className="block text-[#408A71]/90 dark:text-[#408A71] text-2xl lg:text-3xl mb-1.5 font-medium transition-colors">
              Hello! I Am
            </span>
            <span className="block text-[#51C29A] text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Kaung Htet
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
          <span className="text-zinc-400 dark:text-zinc-400 font-medium text-sm md:text-base">
            Feel free to
          </span>

          <a
            href="mailto:your.email@example.com"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#51C29A]/30 bg-[#51C29A]/10 text-[#51C29A] dark:text-[#51C29A] font-semibold transition-all duration-300 hover:bg-[#51C29A] hover:text-white dark:hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#51C29A] focus:ring-offset-2 dark:focus:ring-offset-zinc-900 shadow-sm hover:shadow-[0_0_20px_rgba(81,194,154,0.25)]"
            aria-label="Send an email to Kaung Htet"
          >
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-10deg]" />
            <span>Email Me</span>
          </a>
        </div>

        <div className="w-full mt-2 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <AboutText />
        </div>
      </div>
    </section>
  );
}
