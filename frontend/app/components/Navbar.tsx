"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/industries", label: "Industries" },
    { href: "/hire-talent", label: "Hire Talent" },
    { href: "/find-job", label: "Find a Job" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-black/95 via-slate-950/95 to-black/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo + Title + Tagline */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Hireverse Global Logo"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-semibold text-gray-100 tracking-tight">
                Hireverse Global
              </h1>
              <p className="text-[0.65rem] md:text-xs text-gray-400">
                Connecting Talent Worldwide
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative group transition-colors duration-200"
              >
                <span className="group-hover:text-white transition-colors duration-200">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gray-300 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-black via-slate-950 to-black px-4 pt-3 pb-4 space-y-3 text-sm font-medium shadow-lg border-b border-white/5"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
