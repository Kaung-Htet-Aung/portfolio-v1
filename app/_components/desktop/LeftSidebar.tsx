import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <div>
      <aside className="fixed left-0 top-0 w-44 h-screen border-r border-zinc-600/40 dark:border-white hidden md:flex flex-col items-start pl-12 justify-start gap-20 py-6 bg-black dark:bg-white z-40">
        <div className="relative w-12 h-12 aspect-square rounded-full  overflow-hidden border border-zinc-700/50 shadow-sm flex items-center justify-center">
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
        <div className="flex flex-col">
          <ul className="text-zinc-200 flex flex-col gap-4 w-fit font-quantito">
            <NavItem href="#home">HOME</NavItem>

            <NavItem href="#skill">SKILLS</NavItem>

            <NavItem href="#work">PROJECTS</NavItem>

            <NavItem href="#resume">EDUCATION</NavItem>

            <NavItem href="#resume">EXPERIENCE</NavItem>
          </ul>
          <div className="flex  flex-col items-start gap-0.5 mt-8">
            {/* User Button */}
            <Link
              href="https://www.linkedin.com/in/kaung-htet-aung-595979233/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 pl-0 transition-transform duration-300 hover:-translate-y-1 group"
            >
              <AiFillLinkedin
                size={24}
                className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                fill="currentColor"
              />
            </Link>

            {/* CV Text */}
            <Link
              href="https://github.com/Kaung-Htet-Aung"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 pl-0 transition-transform duration-300 hover:-translate-y-1 group"
            >
              <AiOutlineGithub
                size={24}
                className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                fill="currentColor"
              />
            </Link>
            <Link
              href="mailto:kaunghtetaung374@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 pl-0  transition-transform duration-300 hover:-translate-y-1 group"
            >
              <AiOutlineMail
                size={24}
                className="text-zinc-400 group-hover:text-[#51C29A] transition-colors duration-300"
                fill="currentColor"
              />
            </Link>
          </div>
        </div>

        <div className="text-[9px] mt-auto font-bold  text-zinc-400 dark:text-zinc-400 uppercase -ml-3">
          <span className="text-md"> ©</span>
          <span className="text-md"> {new Date().getFullYear()} K.H.A</span>
        </div>
      </aside>
    </div>
  );
}
