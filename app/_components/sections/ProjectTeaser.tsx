"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// 1. Enriched data with categories for better UI depth
const projects = [
  {
    id: 1,
    title: "Project Catalog Management",
    category: "Full Stack System",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Online Test Portal",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Book Management System",
    category: "Full Stack System",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hostel Management",
    category: "Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "AYPA Volunteer Portal",
    category: "Frontend Dev",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Project Catalog Management",
    category: "Full Stack System",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProjectTeaser() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // Scrolled slightly more (450) to clear the wider cards cleanly
      const scrollAmount = direction === "left" ? -450 : 450;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-amber-300! py-20 text-white overflow-hidden">
      {/* Premium Header */}

      {/* Carousel Wrapper */}
      <div className="relative group">
        {/* The Scroll Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-8 lg:px-14 pb-12 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Wider cards for a more cinematic feel
              className="group/card flex flex-col gap-4 min-w-75 md:min-w-105 snap-start cursor-pointer"
            >
              {/* Image Container */}
              {/* Image Card */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 group/card cursor-pointer">
                {/* FIX: Swapped to a standard <img> tag to bypass Next.js restrictions during prototyping */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-500" />
              </div>

              {/* Typography Details */}
              <div className="flex flex-col pl-1">
                <span className="text-xs font-mono text-zinc-500 mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-medium text-zinc-200 group-hover/card:text-white transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Glassmorphism Navigation Arrows */}
        <div className="hidden md:flex absolute top-[40%] -translate-y-1/2 left-0 w-full justify-between items-center pointer-events-none px-4 lg:px-8">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center pointer-events-auto hover:bg-black/60 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300 shadow-2xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center pointer-events-auto hover:bg-black/60 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300 shadow-2xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
