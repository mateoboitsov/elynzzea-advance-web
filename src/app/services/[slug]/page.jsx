"use client";
import "./service.css";
import { useEffect, use, useState } from "react";
import { useLenis } from "lenis/react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import { getServiceBySlug } from "@/components/ServicesGallery/services-content";
import { useViewTransition } from "@/hooks/useViewTransition";

const ServicePage = ({ params }) => {
  const { navigateWithTransition } = useViewTransition();
  const lenis = useLenis();
  // En Next.js 15, params puede ser una Promise
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (!service) {
      navigateWithTransition("/");
    }
  }, [service, navigateWithTransition]);

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    if (lenis && service) {
      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        lenis.scrollTo(0, { immediate: false, duration: 0.5 });
      }, 100);
    }
  }, [lenis, service, resolvedParams.slug]);

  if (!service) {
    return null;
  }

  return (
    <>
      <Nav />
      <div id="page-top" className="page service-page">
        <section className="service-hero">
          <div className="service-hero-img">
            <img src={service.heroImage} alt={service.title} />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="container">
            <div className="service-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>{service.title}</h1>
              </Copy>
            </div>
            <div className="service-content">
              <div className="service-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>{service.location}</p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <h3>{service.description}</h3>
                  </Copy>
                </div>
                <div className="service-content-wrapper service-meta">
                  <div className="service-hero-row">
                    <div className="service-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Duración:</p>
                        <p>{service.qualities.duracion}</p>
                      </Copy>
                    </div>
                    <div className="service-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Resultados:</p>
                        <p>{service.qualities.resultados}</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="service-content-wrapper service-meta">
                  <div className="service-hero-row">
                    <div className="service-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Sesiones recomendadas:</p>
                        <p>{service.qualities.sesionesRecomendadas}</p>
                      </Copy>
                    </div>
                    <div className="service-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Indicado para:</p>
                        {service.qualities.indicadoPara.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-details service-details-1">
          <div className="container">
            <div className="service-col">
              <Copy delay={0.1}>
                <p>Nuestro Enfoque</p>
              </Copy>
            </div>
            <div className="service-col">
              <Copy delay={0.1}>
                {service.story.map((paragraph, index) => (
                  <h3 key={index}>{paragraph}</h3>
                ))}
              </Copy>
              <div className="service-details-img">
                <img src={service.detailImage1} alt={service.title} />
              </div>
            </div>
          </div>
        </section>
        <section className="service-details service-details-2">
          <div className="container">
            <div className="service-col">
              <Copy delay={0.1}>
                <p>Preguntas Frecuentes</p>
              </Copy>
            </div>
            <div className="service-col">
              {service.faqs && service.faqs.length > 0 && (
                <div className="faqs-container">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <button
                        className={`faq-question-button ${openFaqIndex === index ? "open" : ""}`}
                        onClick={() => toggleFaq(index)}
                        aria-expanded={openFaqIndex === index}
                      >
                        <Copy delay={0.1}>
                          <p className="faq-question">{faq.question}</p>
                        </Copy>
                        {openFaqIndex === index ? (
                          <IoIosRemove className="faq-icon" />
                        ) : (
                          <IoIosAdd className="faq-icon" />
                        )}
                      </button>
                      <div
                        className={`faq-answer-wrapper ${openFaqIndex === index ? "open" : ""}`}
                      >
                        <Copy delay={0.15}>
                          <p className="faq-answer">{faq.answer}</p>
                        </Copy>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Agenda cita gratis"
          callout="Conocemos tu caso y te ofrecemos la mejor solución"
          description="En una conversación honesta, analizamos tus objetivos reales y diseñamos un plan que realmente funcione. Sin presiones, sin promesas vacías. Solo resultados que puedas ver y sentir."
          showButton={true}
          buttonLabel="Reservar cita"
          buttonRoute="/connect"
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default ServicePage;

