"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Timeline", href: "/#exp" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center justify-between px-8 py-3 gap-8
          bg-black/60 backdrop-blur-xl
          border border-white/10
          rounded-full
          shadow-[0_0_40px_rgba(59,130,246,0.15)]
        "
        >
          <Link
            href="/#hero"
            className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Vivek
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm
          bg-black/80 backdrop-blur-xl border border-white/10
          rounded-2xl py-6 flex flex-col items-center gap-6 z-40 shadow-xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
