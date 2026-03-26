import React from "react";

export default function Education() {
  return (
    <section className="py-12" id="education">
      <h2 className="text-3xl font-bold mb-8 text-white dark:text-zinc-900">
        Education
      </h2>
      <div className="bg-zinc-900/50 dark:bg-zinc-50 border border-zinc-800 dark:border-zinc-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white dark:text-zinc-800">
                Bachelor of Computer Science
              </h3>
              <p className="text-teal-400 font-medium mt-1">
                Final Year Student
              </p>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-2 sm:mt-0">
              Magway, Myanmar
            </span>
          </div>
          <p className="text-zinc-400 dark:text-zinc-600 text-sm leading-relaxed max-w-2xl">
            Currently completing my final year, focusing on software
            engineering, data structures, algorithms, and modern web development
            architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
