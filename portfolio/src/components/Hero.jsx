"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id = "hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Vivek</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-400 mb-6"
      >
        Python Developer | Full Stack Enthusiast
      </motion.p>

    </section>
  );
}
