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
import Project from "./_components/sections/ProjectGallery";
import SkillTree from "./_components/sections/Skill";
import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
export default function Portfolio() {
  const [hasMouse, setHasMouse] = useState(false);
  useEffect(() => {
    // 2. Only runs on the client. Checks if the device has a precise pointer (a mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasMouse(mediaQuery.matches);

    // Optional: Update if they plug in a mouse later
    const handleMatch = (e: MediaQueryListEvent) => setHasMouse(e.matches);
    mediaQuery.addEventListener("change", handleMatch);

    return () => mediaQuery.removeEventListener("change", handleMatch);
  }, []);
  return (
    <>
      {/* <WelcomeLoader /> */}
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
          <Project />
        </main>
      </div>
    </>
  );
}
function setHasMouse(matches: boolean) {
  throw new Error("Function not implemented.");
}
