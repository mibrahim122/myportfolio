import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // Set initial states for all counters
    gsap.set(countersRef.current, {
      opacity: 0,
      y: 50,
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#counter",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate each counter box to fade in and slide up
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Add box animation to timeline
      tl.to(counter, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, index * 0.15); // Stagger effect

      // Animate the counter number
      tl.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function() {
          const currentValue = Math.round(this.targets()[0].innerText);
          numberElement.textContent = currentValue + item.suffix;
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      }, index * 0.15); // Start with box animation
    });
  }, { scope: counterRef });

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;