"use client";

// Mobile
import { MobileTop } from "./_components/mobile/MobileTop";
import MobileBottom from "./_components/mobile/MobileBottom";
import MobileHomeSection from "./_components/mobile/MobileHomeSection";
//Destop
import LeftSidebar from "./_components/desktop/LeftSidebar";
import RightSidebar from "./_components/desktop/RightSidebar";
import DesktopTop from "./_components/desktop/DesktopTop";
import DesktopHomeSection from "./_components/desktop/DesktopHomeSection";
//Loader
import WelcomeLoader from "./_components/WelcomeLoader";
import ProjectGallery from "./_components/sections/ProjectGallery";
import SkillTree from "./_components/sections/Skill";
import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
export default function Portfolio() {
  const [hasMouse, setHasMouse] = useState(false);
  useEffect(() => {
    // Requires a device that uses a mouse/trackpad AND can hover
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    setHasMouse(mediaQuery.matches);

    const handleMatch = (e: MediaQueryListEvent) => setHasMouse(e.matches);

    // Use modern event listeners (addEventListener is preferred over addListener)
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
        <main className="pt-24 pb-28 md:pt-0 md:pb-32 md:ml-44 lg:mr-44">
          <DesktopTop />
          <div className="max-w-300 mx-auto pt-10 px-8 md:px-8 lg:px-14">
            <DesktopHomeSection />

            <MobileHomeSection />
          </div>
          <SkillTree />
          <ProjectGallery />
        </main>
      </div>
    </>
  );
}
