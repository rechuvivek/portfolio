"use client";

import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-6 bg-black text-white text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm md:text-base">
        Open to collaborations, internships, and full-time opportunities.
        Feel free to reach out directly.
      </p>
      
      <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-8 shadow-xl">
        
        <a
          href="mailto:rechuvivekreddy@gmail.com"
          className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg font-medium text-blue-400 hover:text-blue-300 transition break-all"
        >
          <Mail size={18} className="flex-shrink-0" />
          rechuvivekreddy@gmail.com
        </a>

        <div className="flex justify-center gap-6 md:gap-8 mt-6 md:mt-8 text-sm md:text-base">

          <a
            href="https://linkedin.com/in/rechu-vivek-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/rechuvivek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a>

        </div>
      </div>
    </section>
  );
}
