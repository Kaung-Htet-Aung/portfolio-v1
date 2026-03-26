import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { ChevronDown } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="fixed right-0 top-0 w-44 h-screen border-l border-zinc-600/40 dark:border-white hidden lg:flex flex-col items-center justify-between py-8 bg-black dark:bg-white z-40">
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
  );
}
