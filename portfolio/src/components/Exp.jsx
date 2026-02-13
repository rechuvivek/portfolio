"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Dev Intern",
    year: "2023",
    company: "South Central Railways",
    description: "Built responsive job card management system.",
    impact: "Maintained database for 1000+ active users.",
    stack: ["JavaScript", "PHP", "MS SQL"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "ML Intern",
    year: "2025",
    company: "Genesys Info X",
    description: "Developed Facial Expression Recognition model.",
    impact: "Achieved 90% accuracy using deep learning.",
    stack: ["Python", "TensorFlow", "Computer Vision"],
    color: "from-blue-500 to-cyan-500",
  },
];

export default function ResponsiveTimelineGrid() {
  return (
    <section id="exp" className="relative w-full py-16 md:py-24 px-4">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-12 md:mb-20">
        Experience Timeline
      </h2>

      {/* Timeline Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 hidden md:block" />

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
        max-w-7xl
        mx-auto
      "
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative"
          >
            {/* Glow */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-20`}
            />

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 shadow-2xl text-white h-full">
              <div className="text-xs text-white/50 mb-2">{exp.year}</div>

              <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>

              <p className="text-sm text-white/70 mb-3">{exp.company}</p>

              <p className="text-sm text-white/80 mb-3">{exp.description}</p>

              <p className="text-emerald-400 text-sm mb-4">{exp.impact}</p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
