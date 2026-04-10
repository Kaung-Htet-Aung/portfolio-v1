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

        <main className="pt-24 pb-28 md:pt-0 md:pb-32 md:ml-44 lg:mr-44 relative">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @media (min-width: 768px) {
              .stack-card {
                position: sticky;
                top: min(0px, calc(100vh - 100%));
              }
            }
          `,
            }}
          />

          {/* ======================================================== */}
          {/* 1. HOME: Normal scroll on mobile, Pinned on desktop */}
          {/* ======================================================== */}
          {/* THE FIX: Changed 'h-[calc...]' to 'min-h-[calc...]' so it stretches to fit all your mobile content! */}
          <div className="relative md:sticky md:top-0 z-0 flex flex-col min-h-[calc(100vh-10rem)] ">
            <DesktopTop />
            <div className="max-w-300 mx-auto pt-10 px-8 md:px-8 lg:px-14 w-full h-full flex flex-col">
              <DesktopHomeSection />
              <MobileHomeSection />
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. CONTENT: Normal flow on mobile, Slides up on desktop */}
          {/* ======================================================== */}
          <div className="stack-card relative z-10 bg-[#0a0a0a] dark:bg-white md:shadow-[0_-20px_20px_rgba(0,0,0,0.8)] dark:md:shadow-[0_-10px_80px_rgba(0,0,0,0.1)] overflow-hidden">
            <SkillTree />
            <ProjectGallery />
            <Resume />
          </div>
        </main>
      </div>
    </>
  );
}
