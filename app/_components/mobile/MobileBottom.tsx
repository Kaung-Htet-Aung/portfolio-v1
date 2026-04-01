import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";

export default function MobileBottom() {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 bg-black dark:bg-white backdrop-blur-md border-t border-zinc-800/40 flex md:hidden items-center justify-around px-4 pb-4 pt-2 z-40">
      {/* GitHub Link */}
      <a
        href="https://github.com/Kaung-Htet-Aung"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1"
      >
        <Github size={20} className="text-zinc-400" />
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/kaung-htet-aung-595979233/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1"
      >
        <Linkedin size={20} className="text-zinc-400" />
      </a>

      {/* Mail Link */}
      <a
        href="mailto:kaunghtetaung374@gmail.com"
        className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1"
      >
        <Mail size={20} className="text-zinc-400" />
      </a>

      {/* Scroll to Top / Action Button (Kept as <button>) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-3 bg-transparent rounded-2xl active:bg-zinc-800/40 transition-all duration-200 flex flex-col items-center gap-1"
      >
        <ArrowUp size={20} className="text-zinc-500" />
      </button>
    </nav>
  );
}
