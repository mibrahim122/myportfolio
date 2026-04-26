import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for the single featured project
    gsap.fromTo(
      projectRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase w-full py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={projectRef} className="w-full flex flex-col items-center text-center gap-8">
          <div className="w-full image-wrapper overflow-hidden rounded-2xl">
            <img 
              src="/images/project1.png" 
              alt="Featured E-commerce Platform" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full max-w-4xl text-content flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Featured Project: A professional E-commerce Platform built on-demand for a client.
            </h2>
            <p className="text-white-50 md:text-xl leading-relaxed">
              My expertise includes delivering scalable, complex applications from concept to deployment. I create optimized digital products to meet specific business needs, ensuring performance and scalability. I focus on building robust platforms that can grow with the client's demands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

