"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python",
  "FastAPI",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "TensorFlow",
  "PyTorch",
  "Redis",
];

export default function Hero() {
  return (
    <section id = "hero" className="relative min-h-screen flex items-center px-6 py-16 md:py-20 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />

      {/* Glow blobs */}
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-blue-400 uppercase tracking-widest mb-4 text-sm md:text-base">
            Full Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vivek
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            I build scalable backend systems and modern web applications with
            performance-focused architecture and intelligent ML integration.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xl text-sm md:text-base"
            >
              Explore Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-500 hover:bg-purple-500/20 rounded-xl transition text-sm md:text-base"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Floating Tech Cloud */}
        {/* RIGHT SIDE — Floating Tech Cloud */}
        <div className="hidden md:flex relative h-[420px] w-full items-center justify-center">
          {/* Subtle Center Glow */}
          <div className="absolute w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full" />

          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: [0, -15, 0],
                x: [0, index % 2 === 0 ? 15 : -15, 0],
              }}
              transition={{
                delay: index * 0.1,
                duration: 4 + index * 0.2,
                repeat: Infinity,
              }}
              className="
                absolute 
                px-4 
                py-2 
                text-xs 
                md:text-sm 
                bg-white/5 
                backdrop-blur-md 
                border 
                border-white/10 
                rounded-xl 
                shadow-lg
              "
              style={{
                top: `${20 + (index % 4) * 20}%`,
                left: `${10 + ((index * 13) % 70)}%`,
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
