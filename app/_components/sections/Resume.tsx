import React from "react";

export default function Resume() {
  // --- DATA GRAPH ---
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Kode",
      duration: "Nov 2025 – May 2026",
      description:
        "Developed and maintained scalable web applications using modern technologies. Built responsive user interfaces and implemented secure back-end APIs, collaborating with the team in a remote environment.",
      isCurrent: true,
      workType: "Remote",
    },
    {
      role: "Full-Stack Developer",
      company: "Myanmar OCC Co.,Ltd",
      duration: "June 2025 – Sep 2025",
      description:
        "Worked on web development projects, building and maintaining internal systems and websites. Improved application performance, fixed bugs, and added new features based on user requirements.",
      isCurrent: false,
      workType: "On-site",
    },
    {
      role: "Volunteer Full-Stack Developer",
      company: "Advanced Young Professionals Association",
      duration: "June 2020 – Nov 2020",
      description:
        "Volunteered as a full-stack developer to build and maintain the organization's website, helping improve accessibility and user experience.",
      isCurrent: false,
      workType: "Remote",
    },
  ];

  const education = [
    {
      title: "Bachelor of Computer Science",
      issuer: "University of Computer Studies (Magway)",
      date: "2018 – 2025",
      description:
        "Studied core computer science concepts including software engineering, data structures, algorithms, and database systems. Gained practical experience in modern web development and application design.",
      isDegree: true,
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Docker Myanmar",
      date: "2025",
      description:
        "Learned to design and deploy scalable, highly available, and fault-tolerant systems on AWS. Covered cloud architecture, security, and best practices for real-world applications.",
      isDegree: false,
    },
    {
      title: "Full Stack Developer Course",
      issuer: "Code Cafe Lab",
      date: "2025",
      description:
        "Completed an intensive full-stack development program covering HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, Express.js, Redis, Redux, GraphQL, and Prisma. Built full-stack web applications with modern architectures, REST APIs, authentication, and database integration.",
      isDegree: false,
    },
  ];

  return (
    <section
      // Base: Deep dark background. Dark Prefix: Light slate background.
      className="md:py-20 bg-black dark:bg-slate-50 font-quantito"
      id="resume"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto">
        {/* ================= LEFT COLUMN: EXPERIENCE ================= */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 dark:from-slate-800 dark:to-slate-500 pb-1">
              Experience
            </h2>
            <span className="block h-[2px] mt-4 w-full bg-gradient-to-r from-[#51C29A]/60 via-slate-700/50 dark:via-slate-300 to-transparent rounded-full"></span>
          </div>

          <div className="space-y-8 border-l-2 border-slate-800/80 dark:border-slate-200 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot */}
                {/* Fixed the left offset to precisely -[9px] so it centers perfectly on the 2px border */}
                <div
                  className={`absolute w-4 h-4 rounded-full -left-[9px] top-6 border-4 border-[#030712] dark:border-slate-50 transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-[#51C29A] shadow-[0_0_12px_rgba(81,194,154,0.6)] animate-pulse"
                      : "bg-slate-700 dark:bg-slate-300 group-hover:bg-[#51C29A] dark:group-hover:bg-[#309A76]"
                  }`}
                ></div>

                {/* Card Container */}
                <div className="bg-white/5 dark:bg-white border border-slate-800/60 dark:border-slate-200 p-6 md:p-8 rounded-xl hover:border-slate-600 dark:hover:border-slate-300 hover:border-r-slate-300 dark:hover:border-r-[#51C29A]  hover:shadow-xl hover:shadow-[#51C29A]/5 dark:hover:shadow-lg relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                    <h3 className="text-xl font-bold text-slate-100 dark:text-slate-800 group-hover:text-[#51C29A] dark:group-hover:text-[#309A76] transition-colors leading-tight">
                      {exp.role}
                    </h3>
                    <span className="self-start text-[11px] font-mono px-3 py-1.5 rounded-full bg-slate-800/80 dark:bg-slate-100 text-slate-300 dark:text-slate-600 border border-slate-700 dark:border-slate-200 inline-flex items-center justify-center whitespace-nowrap shadow-sm">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <h4 className="text-[#51C29A] dark:text-[#309A76] font-semibold text-sm tracking-wide uppercase">
                      {exp.company}
                    </h4>
                    {exp.workType && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 dark:bg-slate-100 border border-white/10 dark:border-slate-200 text-slate-400 dark:text-slate-500">
                        {exp.workType}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 dark:text-slate-600 text-sm md:text-base leading-relaxed">
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
            <h2 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 dark:from-slate-800 dark:to-slate-500 pb-1">
              Education
            </h2>
            <span className="block h-[2px] mt-4 w-full bg-gradient-to-r from-[#51C29A]/60 via-slate-700/50 dark:via-slate-300 to-transparent rounded-full"></span>
          </div>

          <div className="space-y-8 border-l-2 border-slate-800/80 dark:border-slate-200 ml-3">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot */}
                <div
                  className={`absolute w-4 h-4 rounded-full -left-[9px] top-6 border-4 border-[#030712] dark:border-slate-50 transition-all duration-300 ${
                    edu.isDegree
                      ? "bg-[#51C29A] shadow-[0_0_12px_rgba(81,194,154,0.4)]"
                      : "bg-slate-700 dark:bg-slate-300 group-hover:bg-[#51C29A] dark:group-hover:bg-[#309A76]"
                  }`}
                ></div>

                {/* Card Container */}
                <div className="bg-white/5 dark:bg-white border border-slate-800/60 dark:border-slate-200 p-6 md:p-8 rounded-xl hover:border-slate-600 dark:hover:border-slate-300 hover:border-r-slate-300 dark:hover:border-r-[#51C29A]  hover:shadow-xl hover:shadow-[#51C29A]/5 dark:hover:shadow-lg relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                    <h3 className="text-xl font-bold text-slate-100 dark:text-slate-800 group-hover:text-[#51C29A] dark:group-hover:text-[#309A76] transition-colors leading-tight">
                      {edu.title}
                    </h3>
                    <span className="self-start text-[11px] font-mono px-3 py-1.5 rounded-full bg-slate-800/80 dark:bg-slate-100 text-slate-300 dark:text-slate-600 border border-slate-700 dark:border-slate-200 inline-flex items-center justify-center whitespace-nowrap shadow-sm">
                      {edu.date}
                    </span>
                  </div>

                  <h4
                    className={`font-semibold mb-5 text-sm tracking-wide uppercase ${
                      edu.isDegree
                        ? "text-[#51C29A] dark:text-[#309A76]"
                        : "text-slate-500 dark:text-slate-500"
                    }`}
                  >
                    {edu.issuer}
                  </h4>

                  <p className="text-slate-400 dark:text-slate-600 text-sm md:text-base leading-relaxed">
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
