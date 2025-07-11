'use client';

import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const accent = "#516A76";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { href: item.href, top: 0 };
        const rect = el.getBoundingClientRect();
        return { href: item.href, top: rect.top };
      });
      const current = offsets.find((o) => o.top > -150) || offsets[offsets.length - 1];
      setActive(current.href);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 dark:bg-gray-900 dark:shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="font-extrabold text-xl md:text-2xl tracking-wide pb-1" style={{ color: '#57727E' }}>KEVAL MER</span>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`uppercase font-semibold tracking-wide text-gray-700 px-2 pb-1 transition-colors duration-200 dark:text-gray-100 ${
                  active === item.href ? "border-b-2" : ""
                }`}
                style={active === item.href ? { color: accent, borderColor: accent, borderBottomWidth: 2 } : {}}
                onMouseOver={e => { if (active !== item.href) e.currentTarget.style.color = accent; }}
                onMouseOut={e => { if (active !== item.href) e.currentTarget.style.color = ""; }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700`}>
        <ul className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`block uppercase font-semibold tracking-wide text-gray-700 dark:text-gray-100 py-2 px-4 rounded-md transition-colors duration-200 ${
                  active === item.href ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                style={active === item.href ? { color: accent } : {}}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;