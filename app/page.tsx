"use client";

// Mobile
import { MobileTop } from "./_components/mobile/MobileTop";
import MobileBottom from "./_components/mobile/MobileBottom";
import MobileHomeSection from "./_components/mobile/MobileHomeSection";
// Desktop
import LeftSidebar from "./_components/desktop/LeftSidebar";
import RightSidebar from "./_components/desktop/RightSidebar";
import DesktopTop from "./_components/desktop/DesktopTop";
import DesktopHomeSection from "./_components/desktop/DesktopHomeSection";
// Loader
import WelcomeLoader from "./_components/WelcomeLoader";

import SkillTree from "./_components/sections/Skill";
import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import ProjectGallery from "./_components/sections/ProjectGallery";
import Resume from "./_components/sections/Resume";

export default function Portfolio() {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Only runs on the client. Checks if the device has a precise pointer (a mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasMouse(mediaQuery.matches);

    const handleMatch = (e: MediaQueryListEvent) => setHasMouse(e.matches);
    mediaQuery.addEventListener("change", handleMatch);

    return () => mediaQuery.removeEventListener("change", handleMatch);
  }, []);

  return (
    <>
      <WelcomeLoader />
      {hasMouse && <CustomCursor />}
      <div className="min-h-screen select-none bg-[#0a0a0a] dark:bg-white text-zinc-300 font-sans ">
        <MobileTop />
        <MobileBottom />
        <LeftSidebar />
        <RightSidebar />

        {/* ADDED 'relative' to the main container to anchor our z-indexes */}
        <main className="pt-24 pb-28 md:pt-0 md:pb-32 md:ml-44 lg:mr-44 relative">
          {/* THE MAGIC CSS: 
              This ensures tall sections (like Projects) can be scrolled fully before sticking, 
              while short sections stick to the top immediately. It also accounts for your 6rem mobile navbar! */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .stack-card {
              position: sticky;
              top: min(6rem, calc(100vh - 100%));
            }
            @media (min-width: 768px) {
              .stack-card {
                top: min(0px, calc(100vh - 100%));
              }
            }
          `,
            }}
          />

          {/* ======================================================== */}
          {/* 1. HOME (Z-0): Stays pinned to the background */}
          {/* ======================================================== */}
          <div className="sticky top-24 md:top-0 z-0 flex flex-col h-[calc(100vh-10rem)] dark:h-screen">
            <DesktopTop />
            <div className="max-w-300 mx-auto pt-10 px-8 md:px-8 lg:px-14 w-full h-full flex flex-col">
              <DesktopHomeSection />
              <MobileHomeSection />
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. SKILL TREE (Z-10): Slides up over Home */}
          {/* ======================================================== */}
          <div className="stack-card z-10 bg-[#0a0a0a] dark:bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.8)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.1)] overflow-hidden ">
            <SkillTree />
            <ProjectGallery />
            <Resume />
          </div>
        </main>
      </div>
    </>
  );
}
