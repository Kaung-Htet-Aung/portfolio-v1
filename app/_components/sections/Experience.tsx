import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Kode IT Solutions",
      duration: "Present",
      description:
        "Developing and maintaining scalable web applications. Building out responsive front-ends and robust back-end services.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      role: "Volunteer Full-Stack Developer",
      company: "Advanced Young Professionals Association",
      duration: "Previous",
      description:
        "Contributed to web development initiatives, creating functional and accessible digital solutions for the organization.",
      techStack: ["PHP", "Bootstrap", "MySQL"],
    },
  ];

  return (
    <section className="py-12" id="experience">
      <h2 className="text-3xl font-bold mb-8 text-white dark:text-zinc-900">
        Experience
      </h2>
      <div className="space-y-8 border-l-2 border-zinc-800 dark:border-zinc-200 ml-3">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[9px] top-1.5 border-4 border-[#0a0a0a] dark:border-white"></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-white dark:text-zinc-800">
                {exp.role}
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                {exp.duration}
              </span>
            </div>
            <h4 className="text-teal-400 font-medium mb-3">{exp.company}</h4>
            <p className="text-zinc-400 dark:text-zinc-600 mb-4 text-sm leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-300 dark:text-zinc-700 border border-zinc-800 dark:border-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
