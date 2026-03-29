export default function DesktopTop() {
  return (
    <header
      className="relative z-10 w-full md:h-20 h-8 md:border-b dark:border-[#F8843F]/30  border-zinc-700/50 flex items-start md:items-center justify-between px-8"
      id="home"
    >
      {/* Solution 2: The Watermark Logo */}
      <div className="hidden md:block text-xs tracking-[0.4em] text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-900 uppercase  hover:text-zinc-200 transition-colors">
        Kaung Htet Aung
      </div>
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border dark:border-zinc-200 dark:bg-zinc-50 border-zinc-800/80 bg-zinc-900/30 text-[10px] sm:text-xs dark:text-zinc-600 text-zinc-300 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#51C29A] animate-pulse"></span>
        (MMT) 11:58
      </div>
      {/* Fixed Timezone to Myanmar Time (MMT) with live indicator */}
    </header>
  );
}
