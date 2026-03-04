"use client";

import { useState } from "react";

export default function BlogsPage() {
  const [active, setActive] = useState("CodeStreak");

  const logs = {
    CodeStreak: [
      "Subject - CodeStreak is a platform for developers to track consistency.",
      "Day 1 - Platform setup, folder structure, server initialization.",
      "Day 2 - Docker containers for DB + backend.",
      "Day 3 - Planning for user logging and registration with JWT authentication"
    ],
    Inveno: [
      "Subject - Transaction & bill management system for shop vendors.",
      "Designed user registration & login system.",
      "Sale logging module developed halfway.",
      "Planning analytics dashboard.",
      "Structuring vendor reporting system.",
    ],
  };

  return (
    <section className="overflow-hidden bg-black text-white px-6 py-8">
      <div className="h-[calc(100dvh-80px)] mt-[80px] max-w-6xl mx-auto grid md:grid-cols-3 gap-12 h-full">
        {/* ================= LEFT SIDE ================= */}
        <div className="md:col-span-2 flex flex-col h-full">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Building in Public
            </h1>
            <p className="text-gray-400 mt-3 text-sm">
              Execution logs and long-term systems.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex gap-8 border-b border-white/10 pb-4 mb-6">
            {["CodeStreak", "Inveno"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-sm transition ${
                  active === item
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Scrollable Logs */}
          <div className="max-h-[420px] overflow-y-auto pr-3 space-y-6">
            {logs[active].map((log, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-lg p-5 text-gray-300 text-sm"
              >
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto space-y-10 pr-3">
            {/* Current Focus */}
            <div>
              <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                Current Focus
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Backend architecture</li>
                <li>Cloud fundamentals</li>
                <li>Long-term SaaS systems</li>
              </ul>
            </div>

            {/* Build Philosophy */}
            {/* <div>
              <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                Build Philosophy
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Consistency over intensity</li>
                <li>Systems over motivation</li>
                <li>Ship. Improve. Repeat.</li>
              </ul>
            </div> */}

            {/* Comment Box */}
            <div>
              <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                Leave a Thought
              </h3>
              <textarea
                placeholder="Write something... (won’t reach me for now — use contact page for direct connection)"
                className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-white/30 resize-none"
                rows={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
