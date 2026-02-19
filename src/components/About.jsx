"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 md:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"></div>

            <Image
              src="/profile.jpg"
              alt="Vivek"
              width={220}
              height={220}
              className="relative rounded-full border-4 border-gray-800 shadow-xl object-cover md:w-[300px] md:h-[300px]"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            I'm a passionate developer focused on building scalable,
            performance-driven web applications. I enjoy solving real-world
            problems using modern technologies and writing clean, maintainable code.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            My expertise includes full-stack development, backend systems with
            Python and Node, and modern frontend frameworks like React and Next.js.
            I continuously explore new tools to improve efficiency and performance.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-xs md:text-sm bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 transition"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
