"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Flower Shop Transaction Management",
      description:
        "A full-stack application to manage sales, inventory, and transactions for a flower shop.",
      tech: ["React.js", "Node.js", "PostgreSQL"],
      github: "https://github.com/rechuvivek/inveno.git",
      demo: "#",
    },
    {
      title: "To-Do App",
      description:
        "A simple and efficient task management app with CRUD operations and persistent storage.",
      tech: ["React.js", "Node.js"],
      github: "https://github.com/rechuvivek/noteIt.git",
      demo: "https://noteit-6fzi.onrender.com/",
    },
    {
      title: "Job Card Management System",
      description:
        "Web-based system for managing job cards, tracking work status, and maintaining records.",
      tech: ["JavaScript", "PHP", "Microsoft SQL Server"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Webiste",
      description:
      "A personal portfolio website showcasing my projects, skills, experience, and contact information, built with modern web technologies.",
      tech: ["React.js","Next.js"],
      github: "#",
      demo: "#",
    }
    
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-black p-6 rounded-2xl shadow-lg border border-gray-800 transition"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {/* GitHub Button */}
              <a
                href={project.github !== "#" ? project.github : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 transition ${
                  project.github === "#" ? "cursor-not-allowed" : ""
                }`}
                onClick={(e) => {
                  if (project.github === "#") e.preventDefault();
                }}
              >
                GitHub
              </a>

              {/* Live Demo Button */}
              <a
                href={project.demo !== "#" ? project.demo : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition ${
                  project.demo === "#" ? "cursor-not-allowed" : ""
                }`}
                onClick={(e) => {
                  if (project.demo === "#") e.preventDefault();
                }}
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
