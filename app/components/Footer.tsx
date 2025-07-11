import React from "react";

const accent = "#516A76";

const Footer = () => (
  <footer className="w-full bg-white border-t mt-12 py-8 dark:bg-gray-900 dark:border-gray-700">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-500 text-sm mb-2 md:mb-0 dark:text-gray-400">© 2025 Keval Mer. Made with React & Next</div>
      <div className="flex space-x-4">
        <a href="#home" className="text-gray-500 transition-colors dark:text-gray-400" style={{ color: accent }}>Home</a>
        <a href="#about" className="text-gray-500 transition-colors dark:text-gray-400" style={{ color: accent }}>About</a>
        <a href="#skills" className="text-gray-500 transition-colors dark:text-gray-400" style={{ color: accent }}>Skills</a>
        <a href="#experience" className="text-gray-500 transition-colors dark:text-gray-400" style={{ color: accent }}>Experience</a>
        <a href="#education" className="text-gray-500 transition-colors dark:text-gray-400" style={{ color: accent }}>Education</a>
        <a href="#contact" className="text-gray-500 transition-colors dark:text-gray-400" style={{ color: accent }}>Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;