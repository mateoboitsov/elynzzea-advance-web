"use client";
import "./studio.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page studio">
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <p>
                  Elynzzéa Advance es el único centro en Sevilla que combina
                  análisis biométrico avanzado con Biologique Recherche y
                  tecnologías certificadas por la CED europea. Nuestra metodología
                  Harmony es exclusiva y no la encontrarás en ningún otro lugar.
                </p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <h2>
                  Con 15 años de experiencia y más de 5000 protocolos completados,
                  somos especialistas certificados por IACD y CED. Cada tratamiento
                  comienza con un análisis biométrico personalizado y termina con
                  resultados medibles que perduran.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/studio/about-hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Protocolos completados</p>
                  <h2>5000+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Años de experiencia</p>
                  <h2>15</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Especialistas certificados</p>
                  <h2>20+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Tasa de satisfacción</p>
                  <h2>98%</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Tecnologías certificadas</p>
                  <h2>10+</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        <CTAWindow
          img="/studio/about-cta-window.jpg"
          header="Elynzzéa Advance"
          callout="Metodología Harmony: exclusiva de Elynzzéa Advance"
          description="La única metodología que combina análisis biométrico personalizado con Biologique Recherche y tecnologías CED. 15 años perfeccionando protocolos que se adaptan a tu evolución natural. Resultados medibles, no promesas genéricas."
        />
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
