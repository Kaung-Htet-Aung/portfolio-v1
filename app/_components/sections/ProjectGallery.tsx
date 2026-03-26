"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Catalog Management",
    category: "Full Stack System",
    description:
      "Enterprise-grade cataloging system built to streamline project lifecycles, resource allocation, and team collaboration.",
    tech: ["Spring Boot", "React", "TypeScript", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Online Test Portal",
    category: "Web Application",
    description:
      "Scalable real-time examination platform featuring automated grading, secure testing environments, and analytics.",
    tech: ["Next.js", "Node.js", "Prisma", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AYPA Volunteer Portal",
    category: "Frontend Development",
    description:
      "Community platform connecting volunteers with local organizational needs and event schedules.",
    tech: ["PHP", "Bootstrap", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Hostel Management",
    category: "Dashboard UI",
    description:
      "Complete administrative dashboard for managing tenant records, billing, and room availability.",
    tech: ["React", "Express", "Zustand"],
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
];

export default function ProjectGallery() {
  const [hoveredProject, setHoveredProject] = useState(projects[0]);

  return (
    <section className="relative min-h-screen w-full  bg-black dark:bg-white text-slate-200 dark:text-slate-900 py-16 md:py-24 px-4 md:px-12 lg:px-24 font-sans ">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] dark:bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1)_0%,transparent_75%)] " />
      </div>

      {/* 1. HEADER ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="relative z-10 mb-16 lg:mb-10 flex flex-col items-start w-[85%] mx-auto md:w-full"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] w-full flex flex-col">
          <span className="bg-clip-text font-quantito text-transparent bg-gradient-to-r from-white to-emerald-400 dark:from-slate-600 dark:to-emerald-500 w-fit pb-1">
            Selected Works
          </span>
          <span className="block h-[2px] mt-4 w-full bg-gradient-to-r from-emerald-500/50 via-slate-700/30 dark:via-slate-300 to-transparent rounded-full"></span>
        </h1>
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="w-full h-px bg-slate-800/60 dark:bg-slate-200 hidden lg:block" />
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // 1. THE FIX: Changed 'y: 40' to 'x: -50' (starts 50px to the left)
              initial={{ opacity: 0, x: -50 }}
              // 2. THE FIX: Changed 'y: 0' to 'x: 0' (slides right into its natural position)
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              onMouseEnter={() => setHoveredProject(project)}
              onViewportEnter={() => setHoveredProject(project)}
              className="w-full"
            >
              {/* ... the rest of your Desktop and Mobile card code stays exactly the same ... */}
              {/* DESKTOP VIEW */}
              <div className="hidden lg:flex group relative py-16 border-b border-slate-800/60 dark:border-slate-200 flex-row items-center justify-between cursor-pointer hover:bg-slate-900/20 dark:hover:bg-slate-100  w-full">
                <span className="absolute top-16 left-0 text-sm font-mono text-slate-700 dark:text-slate-400 group-hover:text-[#51C29A] ">
                  0{index + 1}
                </span>

                <div className="pl-16 flex flex-col gap-2 transform transition-transform duration-500 ease-out group-hover:translate-x-4">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest group-hover:text-[#51C29A] ">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-400 dark:text-slate-700 group-hover:text-slate-100 dark:group-hover:text-slate-900 tracking-tight pr-4">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  <div className="flex gap-2 mr-2">
                    <a
                      href={project.github}
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 rounded-full transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-[#51C29A] hover:bg-[#51C29A]/10 rounded-full transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-slate-700 dark:border-slate-200 group-hover:border-[#51C29A]/50 flex items-center justify-center bg-[#050A15] dark:bg-white transition-colors duration-500 shrink-0 shadow-none dark:shadow-sm">
                    <ArrowRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-[#51C29A] group-hover:-rotate-45 transition-all duration-500 ease-out" />
                  </div>
                </div>
              </div>

              {/* MOBILE VIEW */}
              <div className="flex lg:hidden flex-col w-[85%] mx-auto mb-8 rounded-md overflow-hidden bg-[#030712] border border-slate-800/50 shadow-2xl relative">
                <div className="relative w-full aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent opacity-100" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] text-slate-300 font-mono uppercase tracking-widest z-10">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col px-5 pb-5 relative z-10 -mt-10">
                  <h3 className="text-xl font-bold text-slate-100 mb-1.5 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed opacity-90 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-6">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-3 h-[1px] bg-slate-700" /> Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[10px] font-medium text-slate-300 bg-white/5 border border-white/5 rounded-md backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 transition-all backdrop-blur-md"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#51C29A]/10 hover:bg-[#51C29A]/20 border border-[#51C29A]/20 text-[#51C29A] transition-all backdrop-blur-md shadow-[0_0_15px_rgba(81,194,154,0.1)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. RIGHT COLUMN ANIMATION */}
        {/* Changed this wrapper to a motion.div so it slides in gracefully */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="hidden lg:block w-1/2 relative"
        >
          <div className="sticky top-24 pt-4 flex flex-col justify-start">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#0B1426] dark:bg-slate-100 border border-slate-800/60 dark:border-slate-200 shadow-lg ring-1 ring-white/5 dark:ring-black/5 mb-8">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredProject.id}
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  initial={{ opacity: 0, scale: 1.15, filter: "blur(15px)" }}
                  animate={{ opacity: 0.9, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
                  transition={{ duration: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[#51C29A]/20 dark:bg-[#51C29A]/10 opacity-90 mix-blend-normal dark:mix-blend-multiply" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${hoveredProject.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="flex flex-col gap-4 px-2"
              >
                <h4 className="text-2xl font-bold text-slate-100 dark:text-slate-900 tracking-tight">
                  {hoveredProject.title}
                </h4>

                <p className="text-sm text-slate-300 dark:text-slate-600 leading-relaxed font-medium tracking-tight h-[4.5rem]">
                  {hoveredProject.description}
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-slate-600 dark:bg-slate-300" />{" "}
                    Core Stack
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {hoveredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 text-xs font-medium text-slate-200 dark:text-slate-700 bg-slate-800/60 dark:bg-slate-100 border border-slate-700/80 dark:border-slate-200 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
