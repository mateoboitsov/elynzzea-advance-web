"use client";
import "./ServicesGallery.css";
import servicesContent from "./services-content";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useViewTransition } from "@/hooks/useViewTransition";

import Copy from "../Copy/Copy";
import { IoMdArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const ServicesGallery = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const { navigateWithTransition } = useViewTransition();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const items = itemsRef.current.filter(Boolean);

      items.forEach((item, index) => {
        const image = item.querySelector(".service-image");
        const content = item.querySelector(".service-content");
        const arrow = item.querySelector(".service-arrow");

        if (image && content) {
          gsap.set(image, { opacity: 0, scale: 0.95 });
          gsap.set(content, { opacity: 0, x: 20 });
          gsap.set(arrow, { opacity: 0, x: -10 });

          ScrollTrigger.create({
            trigger: item,
            start: "top 90%",
            once: true,
            animation: gsap.timeline()
              .to(image, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
              })
              .to(
                [content, arrow],
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.6,
                  ease: "power2.out",
                },
                "-=0.4"
              ),
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars?.trigger?.closest(".services-gallery")) {
            trigger.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  const handleServiceClick = (route) => {
    if (route) {
      navigateWithTransition(route);
    }
  };

  return (
    <section className="services-gallery" ref={sectionRef}>
                {servicesContent.map((service, index) => (
          <div
            key={service.id}
            className="service-item"
            ref={(el) => (itemsRef.current[index] = el)}
            onClick={() => handleServiceClick(service.route)}
          >
            <div className="service-image-wrapper">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
            <div className="service-content">
              <Copy delay={0}>
                <h2 className="service-title">{service.title}</h2>
              </Copy>
            </div>
            <div className="service-arrow">
              <IoMdArrowForward />
            </div>
          </div>
        ))}      
    </section>
  );
};

export default ServicesGallery;
