import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 py-6 absolute top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-semibold text-2xl lg:text-3xl text-white font-sans">
          DavidBrodrick
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-md items-center text-white/80">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a
            href="#contact"
            className="bg-white text-black px-5 py-2 rounded-full font-medium"
          >
            Get in touch →
          </a>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 gap-6 text-white text-lg p-6 bg-black/85 rounded-lg">
          <a href="#" onClick={toggleMenu} className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#projects" onClick={toggleMenu} className="hover:text-orange-500 transition">
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-orange-500 hover:text-white transition"
          >
            Get in touch →
          </a>
        </div>
      )}
    </nav>
  );
}
