"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          <a href="#hero">Vivek</a>
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-6 space-y-6">
          <a href="#about" onClick={closeMenu} className="hover:text-blue-500">
            About
          </a>
          <a href="#projects" onClick={closeMenu} className="hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" onClick={closeMenu} className="hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
