import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close state

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
        scrolled || isOpen 
          ? "py-4 bg-black shadow-lg" 
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
              {/* Hover Animated Underline Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <a 
          href="#contact" 
          className="hidden md:flex items-center justify-center px-6 py-2 rounded-full border border-purple-500 text-purple-300 text-sm font-bold tracking-wide hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] uppercase"
        >
          Contact Me
        </a>

        {/* Mobile Hamburger (3 lines) / Cross Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            /* Close Cross Icon */
            <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger 3 Lines Icon */
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-purple-500/20 px-6 pt-4 pb-8 flex flex-col gap-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={() => setIsOpen(false)} // Menu link click karne par automatic close hoga
                className="text-lg font-medium text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-white/5"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Mobile Contact Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          >
            Contact Me
          </a>
        </div>
      )}

      {/* Modern Scroll Progress Indicator Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-400 shadow-[0_0_8px_rgba(217,70,239,0.8)] z-0"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

export default NavBar;