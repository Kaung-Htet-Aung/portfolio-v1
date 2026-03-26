import React from "react";

export default function Resume() {
  // --- DATA GRAPH ---
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Kode IT Solutions",
      duration: "Present",
      description:
        "Developing and maintaining scalable web applications. Building out responsive front-ends and robust back-end services.",
      isCurrent: true, // Added flag for special styling
    },
    {
      role: "Volunteer Full-Stack Developer",
      company: "Advanced Young Professionals Association",
      duration: "Previous",
      description:
        "Contributed to web development initiatives, creating functional and accessible digital solutions for the organization.",
      isCurrent: false,
    },
    {
      role: "Volunteer Full-Stack Developer",
      company: "Advanced Young Professionals Association",
      duration: "Previous",
      description:
        "Contributed to web development initiatives, creating functional and accessible digital solutions for the organization.",
      isCurrent: false,
    },
  ];

  const education = [
    {
      title: "Bachelor of Computer Science",
      issuer: "Final Year Student",
      date: "Present",
      description:
        "Focusing on software engineering, data structures, algorithms, and modern web development architectures. Based in Magway, Myanmar.",
      isDegree: true,
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2025",
      description:
        "Official AWS certification validating expertise in developing and maintaining AWS-based applications.",
      isDegree: false,
    },
    {
      title: "Advanced React & Next.js",
      issuer: "Frontend Masters",
      date: "2024",
      description:
        "Advanced architectural patterns, performance optimization, and server-side rendering.",
      isDegree: false,
    },
  ];

  return (
    <section
      className=" md:py-10 bg-zinc-950 dark:bg-white font-quantito "
      id="resume"
    >
      {/* Responsive Padding: px-6 on mobile, scaling up to px-20 on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* ================= LEFT COLUMN: EXPERIENCE ================= */}
        <div>
          {/* Section Header with underline accent */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 dark:from-zinc-900 dark:to-zinc-500">
              Experience
            </h2>
            {/* A microscopic, full-width hairline divider to separate the header from the content */}
            <span className="block h-[2px] mt-4 w-full bg-gradient-to-r from-emerald-500/50 via-slate-700/30 dark:via-slate-300 to-transparent rounded-full"></span>
          </div>
          {/* Timeline Container */}
          <div className="space-y-8 border-l-2 border-zinc-800 dark:border-zinc-200 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot with Pulse Animation for Current Role */}
                <div
                  className={`absolute w-4 h-4 rounded-full -left-[9px] top-6 border-4 border-zinc-950 dark:border-white transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-teal-500 shadow-[0_0_12px_rgba(45,212,191,0.6)] animate-pulse"
                      : "bg-zinc-600 dark:bg-zinc-400 group-hover:bg-[#51C29A]"
                  }`}
                ></div>

                {/* Card Container */}
                <div className="bg-zinc-900/50 dark:bg-zinc-100/50 border border-zinc-800 dark:border-zinc-200 p-6 rounded-xl hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <h3 className="text-xl font-bold text-white dark:text-zinc-800 group-hover:text-teal-400 dark:group-hover:text-teal-600 transition-colors">
                      {exp.role}
                    </h3>
                    {/* Date Badge */}
                    <span
                      className={`self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full border ${
                        exp.isCurrent
                          ? "bg-teal-500/10 text-teal-400 border-teal-500/30"
                          : "bg-zinc-800 text-zinc-400 dark:bg-zinc-200 dark:text-zinc-600 border-zinc-700 dark:border-zinc-300"
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <h4 className="text-[#51C29A] dark:text-teal-600 font-medium mb-4 text-sm tracking-wide uppercase">
                    {exp.company}
                  </h4>

                  <p className="text-zinc-400 dark:text-zinc-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: EDUCATION & CERTS ================= */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 dark:from-zinc-900 dark:to-zinc-500">
              Experience
            </h2>
            {/* A microscopic, full-width hairline divider to separate the header from the content */}
            <span className="block h-[2px] mt-4 w-full bg-gradient-to-r from-emerald-500/50 via-slate-700/30 dark:via-slate-300 to-transparent rounded-full"></span>
          </div>
          <div className="space-y-8 border-l-2 border-zinc-800 dark:border-zinc-200 ml-3">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot */}
                <div
                  className={`absolute w-4 h-4 rounded-full -left-[9px] top-6 border-4 border-zinc-950 dark:border-white transition-all duration-300 ${
                    edu.isDegree
                      ? "bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.4)]"
                      : "bg-zinc-700 dark:bg-zinc-300 group-hover:bg-teal-500"
                  }`}
                ></div>

                {/* Card Container */}
                <div className="bg-zinc-900/50 dark:bg-zinc-100/50 border border-zinc-800 dark:border-zinc-200 p-6 rounded-xl hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <h3 className="text-xl font-bold text-white dark:text-zinc-800 transition-colors group-hover:text-teal-400 dark:group-hover:text-teal-600">
                      {edu.title}
                    </h3>
                    {/* Date Badge */}
                    <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 dark:bg-zinc-200 dark:text-zinc-600 border border-zinc-700 dark:border-zinc-300">
                      {edu.date}
                    </span>
                  </div>

                  <h4
                    className={`font-medium mb-4 text-sm tracking-wide uppercase ${
                      edu.isDegree
                        ? "text-[#51C29A] dark:text-teal-600"
                        : "text-zinc-500 dark:text-zinc-500"
                    }`}
                  >
                    {edu.issuer}
                  </h4>

                  <p className="text-zinc-400 dark:text-zinc-600 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
