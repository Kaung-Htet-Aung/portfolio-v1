"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-11 h-11" />; // Placeholder to prevent layout shift

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex items-center w-14 h-8 rounded-full  dark:bg-zinc-200 bg-[#151515] border border-zinc-300 dark:border-zinc-800/80 transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#51C29A] overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-600"
      aria-label="Toggle Theme"
    >
      {/* Background Track Icons (Static & Subdued) */}
      <div className="absolute w-full flex justify-between px-2 z-0 pointer-events-none">
        <Moon className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600" />
        <Sun className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600" />
      </div>

      {/* Sliding Thumb (Elevated with Active Icon) */}
      <div className="relative z-10 left-1 w-6 h-6 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transform transition-transform duration-500 ease-in-out dark:translate-x-6">
        {resolvedTheme === "light" ? (
          <Moon className="w-3 h-3 text-amber-500" strokeWidth={3} />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" strokeWidth={3} />
        )}
      </div>
    </button>
  );
}
