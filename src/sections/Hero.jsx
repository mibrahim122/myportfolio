// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter";
// import Button from "../components/Button";
// import HeroExperience from "../components/models/HeroModel/HeroExperience";

// const Hero = () => {
//   const containerRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       ".hero-text",
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
//     );
//   });

//   return (
//     <section 
//       id="hero" 
//       ref={containerRef} 
//       className="relative z-0 min-h-screen overflow-hidden" 
//     >
//       {/* Decorative Background Pattern */}
//       <div className="absolute top-0 left-0 -z-10 opacity-50 pointer-events-none w-full h-full">
//         <img src="./images/bg.png" alt="Decorative background" className="object-cover w-full h-full" />
//       </div>

//       {/* 3D Background Particles layout */}
//       <div className="absolute top-0 left-0 z-10 w-full h-screen pointer-events-auto">
//         <HeroExperience />
//       </div>

//       {/* Centered Hero Content */}
//       <div className="flex flex-col items-center justify-center text-center h-screen max-w-4xl mx-auto px-4 relative z-20 pointer-events-none">
//         <div className="flex flex-col items-center gap-7 pointer-events-auto">
//           <h1 className="hero-text text-4xl md:text-6xl font-bold text-white">
//             Crafting Scalable Web Applications with the MERN Stack
//           </h1>

//           <p className="hero-text text-white-50 md:text-xl relative z-10 max-w-2xl">
//             Hi, I'm Muhammad Ibrahim, a passionate Full-Stack Developer. I build dynamic, responsive, and high-performance digital experiences from frontend to backend.
//           </p>

//           <a href="#work" className="mt-8 inline-block z-10">
//             <button className="group relative flex items-center justify-center px-8 py-4 min-w-[200px] text-white bg-[#1E1E2A] font-medium rounded-lg shadow-lg border border-white/5 transition-all duration-300 hover:shadow-2xl active:scale-95">
              
//               {/* Text is perfectly centered normally, but slides slightly left on hover to make room for the icon */}
//               <span className="transition-transform duration-300 group-hover:-translate-x-5">
//                 SEE MY WORK
//               </span>
              
//               {/* Icon starts completely hidden (opacity-0) and slightly pushed out. On hover, it fades in and slides into place. */}
//               <div className="absolute right-2 flex items-center justify-center w-10 h-10 bg-white rounded-full text-black opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
//                 <svg 
//                   className="w-5 h-5" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                 </svg>
//               </div>

//             </button>
//           </a>
//         </div>
//       </div>

//       <div className="relative z-20 bg-black w-full">
//         <AnimatedCounter />
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
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

<div className="flex flex-col items-center justify-center text-center min-h-dvh pt-24 pb-12 max-w-4xl mx-auto px-4 relative z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-7 pointer-events-auto">
          <h1 className="hero-text text-4xl md:text-6xl font-bold" style={{ color: "var(--text-color)" }}>
            Crafting Scalable Web Applications with the MERN Stack
          </h1>

          <p className="hero-text md:text-xl relative z-10 max-w-2xl" style={{ color: "var(--text-color)" }}>
            Hi, I'm Muhammad Ibrahim, a passionate Full-Stack Developer. I build dynamic, responsive, and high-performance digital experiences from frontend to backend.
          </p>

          {/* This wrapper now handles the click without killing the hover effect */}
          <div 
            className="z-10 mt-4 cursor-pointer flex items-center justify-center"
            onClick={handleScrollToWork}
          >
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
            />
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