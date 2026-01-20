"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GSAPFadeIn = ({ children, delay = 0, yOffset = 30, animateOnScroll = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (animateOnScroll) {
      // Estilo directo con ScrollTrigger
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        opacity: 0,
        duration: 1.4,
        delay: delay,
        ease: "power3.inOut",
      });
    } else {
      // Estilo directo inmediato
      gsap.from(el, {
        opacity: 0,
        duration: 1.4,
        delay: delay,
        ease: "power3.inOut",
      });
    }
  }, [delay, animateOnScroll]);

  return (
    <div ref={elementRef} style={{ width: '100%', willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

export default GSAPFadeIn;