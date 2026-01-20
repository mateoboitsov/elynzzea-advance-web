"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  <h1>Aquí puedes contactarnos</h1>
                </Copy>
              </div>
              <div className="contact-copy-year">
                <Copy delay={0.1}>
                  <h1>&copy;25</h1>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>Reservas y Consultas</p>
                    <p>info@elynzzea-advance.com</p>
                    <p>+34 954 00 00 00</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>Horario de Atención</p>
                    <p>Lunes a Viernes: 10:00 - 20:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                    <p>Domingos: Cerrado</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>Dirección</p>
                    <p>Calle Columbretes, 1, local 7</p>
                    <p>41016 Sevilla, España</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.3}>
                    <p>Redes Sociales</p>
                    <p>Instagram</p>
                    <p>Google Maps</p>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Elynzzéa Advance - Centro de estética en Sevilla"
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
