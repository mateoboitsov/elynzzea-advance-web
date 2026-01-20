"use client";
import "./HowWeWork.css";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef([]);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useGSAP(
    () => {
      if (!stepsRef.current) return;

      const steps = stepsRef.current.querySelectorAll(".how-we-work-step");
      gsap.set(steps, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: stepsRef.current,
        start: "top 75%",
        once: true,
        animation: gsap.to(steps, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: -0.1,
          ease: "none",
        }),
      });
    },
    { scope: stepsRef }
  );

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!container || !header || !cards) return;

    if (!isMobile) {
      const mainTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        endTrigger: cards,
        end: "bottom bottom",
        pin: header,
        pinSpacing: false,
      });
      scrollTriggersRef.current.push(mainTrigger);

      const cardElements = cards.querySelectorAll(".how-we-work-card");

      cardElements.forEach((card, index) => {
        const cardTrigger = ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
          onLeave: () => {
            if (index < cardElements.length - 1) {
              setActiveStep(index + 1);
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              setActiveStep(index - 1);
            }
          },
        });
        scrollTriggersRef.current.push(cardTrigger);
      });
    }

    return () => {
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      scrollTriggersRef.current = [];
    };
  }, [isMobile]);

  return (
    <div className="how-we-work" ref={containerRef}>
      <div className="how-we-work-col how-we-work-header" ref={headerRef}>
        <div className="container">
          <div className="how-we-work-header-content">
            <div className="how-we-work-header-callout">
              <Copy delay={0.1}>
                <p>Metodología Harmony</p>
              </Copy>
            </div>
            <Copy delay={0.15}>
              <h3>
                Cuatro pasos exclusivos que solo Elynzzéa Advance ofrece:
                análisis biométrico, protocolo personalizado con Biologique
                Recherche, aplicación con tecnologías CED y seguimiento medible.
              </h3>
            </Copy>
            <div className="how-we-work-steps" ref={stepsRef}>
              <div
                className={`how-we-work-step ${
                  activeStep === 0 ? "active" : ""
                }`}
              >
                <p className="how-we-work-step-label">Paso</p>
                <p className="how-we-work-step-index">1</p>
              </div>
              <div
                className={`how-we-work-step ${
                  activeStep === 1 ? "active" : ""
                }`}
              >
                <p className="how-we-work-step-label">Paso</p>
                <p className="how-we-work-step-index">2</p>
              </div>
              <div
                className={`how-we-work-step ${
                  activeStep === 2 ? "active" : ""
                }`}
              >
                <p className="how-we-work-step-label">Paso</p>
                <p className="how-we-work-step-index">3</p>
              </div>
              <div
                className={`how-we-work-step ${
                  activeStep === 3 ? "active" : ""
                }`}
              >
                <p className="how-we-work-step-label">Paso</p>
                <p className="how-we-work-step-index">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-we-work-col how-we-work-cards" ref={cardsRef}>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-1.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Análisis / Consulta</h3>
            </div>
            <p className="md">
              Análisis biométrico avanzado con tecnología europea certificada.
              Medimos parámetros específicos de tu piel, no hacemos consultas
              genéricas. Este análisis determina exactamente qué necesita tu
              piel y qué resultados podemos garantizar.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-2.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Protocolo / Diseño</h3>
            </div>
            <p className="md">
              Diseñamos tu protocolo Harmony exclusivo combinando Biologique
              Recherche con tecnologías certificadas por la CED europea. No
              usamos protocolos estándar: cada tratamiento se crea específicamente
              para ti basado en tu análisis biométrico.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-3.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Tratamiento / Aplicación</h3>
            </div>
            <p className="md">
              Aplicación por especialistas certificados IACD y CED. Usamos
              exclusivamente Biologique Recherche y tecnologías europeas
              certificadas. Cada sesión se documenta y ajusta según la evolución
              de tu piel, no aplicamos tratamientos en serie.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-4.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Seguimiento / Resultados</h3>
            </div>
            <p className="md">
              Seguimiento con mediciones biométricas post-tratamiento. No te
              dejamos con recomendaciones genéricas: medimos tus resultados,
              ajustamos el protocolo si es necesario y te damos un plan de
              mantenimiento personalizado para que los resultados perduren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
