import React from "react";
import Image from "next/image";

const accent = "#516A76";
const iconColor = "#57727E";

const Hero = () => (
  <section id="home" className="bg-gradient-to-b from-[#617F8D] pt-12 to-white pb-12 min-h-[70vh] flex items-center dark:bg-gradient-to-b dark:from-black dark:to-gray-800">
    <div className="max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start lg:items-start text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight pt-4" style={{ color: '#fff' }}>KEVAL MER</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: accent }}>FULL-STACK WEB DEVELOPER</h2>
        <p className="text-gray-600 mb-2 font-medium dark:text-gray-300">Rajkot, Gujarat</p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
          <a href="tel:+918866618912" className="hover:underline font-medium flex items-center" style={{ color: accent }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1" style={{ minWidth: 22, minHeight: 22 }}>
              <path d="M6.5 4.5A16 16 0 0 0 19.5 17.5L17 20a2 2 0 0 0 2 2c5 0 9-4 9-9a2 2 0 0 0-2-2l-2.5 2.5" />
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.53.59 2.34.72A2 2 0 0 1 22 16.92z"/>
            </svg>
            88666 18912
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <a href="mailto:keval.mer@gmail.com" className="hover:underline font-medium flex items-center" style={{ color: accent }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1" style={{ minWidth: 22, minHeight: 22 }}>
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            keval.mer@gmail.com
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <a href="https://linkedin.com/in/keval-mer-93312417/" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium flex items-center" style={{ color: accent }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1" style={{ minWidth: 22, minHeight: 22 }}>
              <g>
                <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2.2" fill="none"/>
                <path d="M8 11v5" stroke={iconColor} strokeWidth="2.2"/>
                <circle cx="8" cy="8" r="1.2" fill={iconColor}/>
                <path d="M12 16v-2.5a2.5 2.5 0 0 1 5 0V16" stroke={iconColor} strokeWidth="2.2"/>
              </g>
            </svg>
            LinkedIn
          </a>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mb-2 dark:text-gray-200">
          Experienced Full-Stack Web Developer of arount 12+ years in Web Application Development,eCommerce Development and much more. I have expertize in building scalable and robust web applications.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center" style={{ background: `linear-gradient(135deg, #516A76 0%, #617F8D 100%)` }}>
          <Image
            src="/profile.jpg"
            alt="Keval Mer profile"
            width={224}
            height={224}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Keval+Mer&background=516A76&color=fff&size=160'; }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;