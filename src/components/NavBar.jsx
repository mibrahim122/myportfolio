import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background and padding logic
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Scroll Progress Logic
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
        
      const progress = (totalScroll / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-black shadow-lg" // <-- Yahan transparency aur blur hata kar solid bg-black kar diya hai
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center w-full relative z-10">
        
        {/* Logo */}
        <a href="#hero" className="text-2xl font-extrabold tracking-tighter text-white">
          M Ibrahim<span className="text-purple-500">.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ link, name }) => (
            <a 
              key={name} 
              href={link} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {name}
              {/* Hover Animated Underline Effect for Links */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="hidden md:flex items-center justify-center px-6 py-2 rounded-full border border-purple-500 text-purple-300 text-sm font-bold tracking-wide hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] uppercase"
        >
          Contact Me
        </a>
      </div>

      {/* Modern Scroll Progress Indicator Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-400 shadow-[0_0_8px_rgba(217,70,239,0.8)] z-0"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

export default NavBar;