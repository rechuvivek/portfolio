"use client";

import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-black text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        Open to collaborations, internships, and full-time opportunities.
        Feel free to reach out directly.
      </p>

      {/* Email Display */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 inline-block shadow-xl">
        
        <a
          href="mailto:rechuvivekreddy@gmail.com"
          className="flex items-center gap-3 text-lg font-medium text-blue-400 hover:text-blue-300 transition"
        >
          <Mail size={20} />
          rechuvivekreddy@gmail.com
        </a>

        <div className="flex justify-center gap-8 mt-8">

          <a
            href="https://linkedin.com/in/rechu-vivek-reddy"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/rechuvivek"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <Github size={20} />
            GitHub
          </a>

        </div>
      </div>
    </section>
  );
}
