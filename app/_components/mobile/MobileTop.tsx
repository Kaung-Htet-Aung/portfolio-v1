import Image from "next/image";
export const MobileTop = () => {
  return (
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
  );
};
