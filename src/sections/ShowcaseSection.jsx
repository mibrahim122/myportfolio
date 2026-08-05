import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  // State for handling the modal popup
  const [selectedProject, setSelectedProject] = useState(null);

  // Projects data with EXACT image paths fixing the first project
  const projectsData = [
    {
      title: "Cross-Platform Mobile Wallet",
      stack: ["React Native", "PostgreSQL", "Neon DB", "Expo Go"],
      description: "A responsive mobile wallet for iOS and Android featuring real-time data synchronization, custom state management, and secure ledger balances.",
      img: "./images/project1.png",
    },
    {
      title: "Flash AI Platform",
      stack: ["PERN Stack", "Express", "React", "Node.js"],
      description: "A scalable full-stack AI platform with a robust relational database architecture and high-fidelity UI components optimized with Tailwind CSS.",
      img: "./images/Project2.png", 
    },
    {
      title: "Employee Management System",
      stack: ["MERN Stack", "JWT", "RBAC", "MongoDB"],
      description: "A secure administrative portal featuring custom authentication, role-based access control, and optimized MongoDB aggregation pipelines.",
      img: "./images/Project3.png", 
    },
    {
      title: "Full-Stack E-Commerce Platform",
      stack: ["MERN Stack", "Tailwind CSS", "RESTful APIs"],
      description: "An end-to-end e-commerce solution with dynamic product listings, secure user authentication, and fully integrated shopping cart workflows.",
      img: "./images/Project4.png", 
    },
    {
      title: "MERN Auth Boilerplate",
      stack: ["MERN Stack", "JWT", "OTP Verification", "SMTP"],
      description: "A production-ready full-stack authentication boilerplate handling secure user identity lifecycle. Features include JWT token handling, OTP email verification for secure password resets, and seamless state management.",
      img: "./images/Project5.png", 
    }
  ];

  useGSAP(() => {
    // Fade in the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Stagger animation for multiple project cards
    cardsRef.current.forEach((card) => {
      if(card) {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase w-full py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
            A showcase of my expertise in delivering scalable, complex applications from concept to deployment.
          </p>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 cursor-pointer"
            >
              {/* Image Container with Hover Zoom Effect */}
              <div className="w-full h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-zinc-900', 'to-black', 'flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = '<span class="text-gray-600 text-sm">Image not found</span>';
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Gradient Title */}
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400 leading-snug">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* View Details Link */}
                <div className="mt-6">
                  <span className="text-sm font-bold text-white group-hover:text-fuchsia-400 transition-colors flex items-center gap-2 cursor-pointer uppercase tracking-wider">
                    View Details 
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal / Popup UI */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedProject(null)} // Close when clicking outside
        >
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] bg-[#0a0a0a] border border-purple-500/30 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-y-auto flex flex-col md:flex-row transform transition-all duration-500"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Cross (X) Button - Sticky top for mobile visibility */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 right-4 ml-auto mr-4 my-2 md:absolute md:top-4 md:right-4 p-2.5 bg-black/70 hover:bg-purple-500/30 border border-white/10 hover:border-purple-500/50 text-white rounded-full transition-all z-30 shadow-lg"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image Left Side */}
            <div className="w-full md:w-1/2 min-h-[220px] max-h-[300px] md:max-h-none relative bg-zinc-900 shrink-0">
              <img 
                src={selectedProject.img} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-zinc-900', 'to-black');
                  e.target.parentElement.innerHTML = '<span class="text-gray-600">Image not found</span>';
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]"></div>
            </div>

            {/* Modal Content Right Side */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 leading-tight">
                  {selectedProject.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs sm:text-sm font-semibold text-fuchsia-300 bg-fuchsia-900/20 rounded-full border border-fuchsia-500/20 shadow-[0_0_10px_rgba(217,70,239,0.1)]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                  <br /><br />
                  This project demonstrates a scalable architecture, focusing on performance, security, and a seamless user experience. Check out the live version or the source code for more details!
                </p>
              </div>
              
              {/* Call to action buttons */}
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
                <button className="flex-1 min-w-[130px] px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all flex items-center justify-center gap-2">
                  Live Preview
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </button>
                <button className="flex-1 min-w-[130px] px-6 py-3 rounded-full border border-purple-500/50 text-purple-300 text-sm font-bold tracking-wide hover:bg-purple-900/20 transition-all flex items-center justify-center gap-2">
                  GitHub
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppShowcase;