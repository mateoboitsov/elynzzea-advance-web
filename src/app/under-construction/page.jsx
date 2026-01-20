"use client";
import "./under-construction.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page under-construction">
        <section className="construction-hero">
          <div className="container">
            <div className="construction-content">
              <Copy delay={0.5} animateOnScroll={false}>
                <p className="mono">En Construcción</p>
              </Copy>
              <Copy delay={0.7} animateOnScroll={false}>
                <h1>Estamos trabajando en algo increíble</h1>
              </Copy>
              <Copy delay={0.9} animateOnScroll={false}>
                <p className="lg">
                  Esta sección está en desarrollo. Pronto estará disponible con
                  contenido exclusivo y nuevas funcionalidades.
                </p>
              </Copy>
              <div className="construction-button">
                <AnimatedButton
                  label="Volver al Inicio"
                  route="/"
                  animateOnScroll={false}
                  delay={1.1}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
