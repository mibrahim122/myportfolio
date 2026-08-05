import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperience from "../components/models/HeroModel/HeroExperience";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  const handleScrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative z-0 min-h-screen overflow-hidden" 
    >
      <div className="absolute top-0 left-0 -z-10 opacity-50 pointer-events-none w-full h-full">
        <img src="./images/bg.png" alt="Decorative background" className="object-cover w-full h-full" />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-screen pointer-events-auto">
        <HeroExperience />
      </div>

      <div className="flex flex-col items-center justify-start text-center min-h-dvh pt-56 md:pt-72 pb-32 md:pb-48 max-w-4xl mx-auto px-4 relative z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-7 pointer-events-auto">
          
          <h1 className="hero-text text-4xl md:text-6xl font-bold text-white leading-tight">
            Crafting Scalable Web Applications with the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400">
              MERN Stack
            </span>
          </h1>

          {/* Comma ab span ke andar hai taake line break hone par comma naam ke sath hi rahe */}
          <p className="hero-text md:text-xl relative z-10 max-w-2xl text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-purple-300 font-semibold">Muhammad Ibrahim,</span> a passionate Full-Stack Developer. I build dynamic, responsive, and high-performance digital experiences from frontend to backend.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-10 z-10">
            
            <button 
              onClick={handleScrollToWork}
              className="px-8 py-3 w-48 rounded-full border-2 border-purple-500 text-purple-300 font-bold tracking-wider 
                         hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] 
                         transition-all duration-300 ease-out uppercase text-sm"
            >
              See My Work
            </button>
            
            <a 
              href={`${import.meta.env.BASE_URL}MyResume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 w-48 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white font-bold tracking-wider 
                         hover:from-purple-500 hover:to-violet-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(217,70,239,0.7)] 
                         transition-all duration-300 ease-out uppercase text-sm"
            >
              My Resume
            </a>

          </div>
        </div>
      </div>

      <div className="relative z-20 w-full" style={{ backgroundColor: "var(--bg-color)" }}>
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;