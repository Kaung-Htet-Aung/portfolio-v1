"use client";

import { useEffect, useState, ReactNode } from "react";

type NavItemProps = {
  href: string;
  children: ReactNode;
};

export default function NavItem({ href, children }: NavItemProps) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange(); // set on first load
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = activeHash === href;

  return (
    <li>
      <a
        href={href}
        className={`group relative inline-block  w-20 transition-colors duration-300
        ${isActive ? "text-[#51C29A]" : "text-white hover:text-[#51C29A]"}`}
      >
        {children}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-[#51C29A] transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </a>
    </li>
  );
}
