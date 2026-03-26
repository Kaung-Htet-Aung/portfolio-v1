import ThemeToggle from "../ThemeToggle";
export const MobileTop = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-[#0a0a0a]/90 dark:bg-white backdrop-blur-md border-b border-zinc-700/40 flex md:hidden items-center justify-between px-6 z-40">
      <div className="text-xs tracking-[0.4em] text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-900 uppercase  hover:text-zinc-200 transition-colors">
        Kaung Htet Aung
      </div>
      <div className="w-20 h-12  flex items-center justify-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};
