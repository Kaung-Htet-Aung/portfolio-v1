import { ArrowUp, Mail, User } from "lucide-react";
export default function MobileBottom() {
  return (
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
  );
}
