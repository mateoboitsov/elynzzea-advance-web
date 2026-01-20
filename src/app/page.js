"use client";
import "./under-construction/under-construction.css";

/*import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";*/
import Copy from "@/components/Copy/Copy";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import GSAPFadeIn from "@/components/GSAPFadeIn/GSAPFadeIn";

// ============================================
// PÁGINA DE CONSTRUCCIÓN - PÁGINA PRINCIPAL
// ============================================
// Para restaurar la página original, descomenta el código al final del archivo
// y elimina o comenta este bloque.

export default function Home() {
  return (
    <>
      <div className="page under-construction">
        <section className="construction-hero">
          <div className="container">
            <div className="construction-content">
              <GSAPFadeIn delay={0.3} animateOnScroll={true}>
                <img style={{ width: "50%" }} src="/elynzzea-advance-logo.svg" alt="Elynzzéa Advance" />              
              </GSAPFadeIn>
              <Copy delay={0.2} animateOnScroll={true}>
                <h1>Estamos construyendo algo increíble</h1>
              </Copy>
              <Copy delay={0.3} animateOnScroll={true}>
                <p className="lg">
                  Este centro médico estético y su web pronto estarán disponibles con contenido exclusivo y nuevas funcionalidades.
                </p>
              </Copy>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ============================================
   CÓDIGO ORIGINAL - COMENTADO PARA RESTAURAR
   ============================================
   
"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import ServicesGallery from "@/components/ServicesGallery/ServicesGallery";

let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);
      const counts = document.querySelectorAll(".count");

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-100%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }
      });

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () =>
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            const heroImg = document.querySelector(".hero-bg img");
            if (heroImg) {
              gsap.to(heroImg, { scale: 1, duration: 2, ease: "hop" });
            }
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Elynzzéa</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Advance</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <img src="/home/hero.jpg" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={showPreloader ? 10 : 0.85}>
                <h1>Belleza que se adapta a ti, resultados que perduran</h1>
              </Copy>
            </div>
            <div className="hero-tagline">
              <Copy animateOnScroll={false} delay={showPreloader ? 10.15 : 1}>
                <p>
                  En Elynzzéa Advance, cada protocolo se diseña mediante análisis
                  biométrico personalizado, combinando tecnologías europeas
                  certificadas con nuestra metodología exclusiva Harmony.
                </p>
              </Copy>
            </div>
            <AnimatedButton
              label="Descubre Más"
              route="/studio"
              animateOnScroll={false}
              delay={showPreloader ? 10.3 : 1.15}
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.1}>
                  <h2>5000+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.15}>
                  <p>Protocolos Harmony completados con excelencia</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.2}>
                  <h2>15</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.25}>
                  <p>Años perfeccionando nuestra metodología única</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.3}>
                  <h2>20+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.35}>
                  <p>Especialistas certificados por IACD y CED</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.4}>
                  <h2>98%</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.45}>
                  <p>Pacientes que recomiendan Elynzzéa Advance</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h1>
                <span className="spacer">&nbsp;</span>
                En Elynzzéa Advance, desarrollamos cada protocolo mediante nuestra
                metodología Harmony, un sistema exclusivo que combina análisis
                biométrico avanzado con tecnologías certificadas europeas.
              </h1>
            </Copy>
          </div>
          <ServicesGallery />
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <p>Lo que nos diferencia</p>
              </Copy>

              <Copy delay={0.15}>
                <p className="lg">
                  Nuestra metodología Harmony es exclusiva de Elynzzéa Advance, combinando
                  análisis biométrico personalizado con marcas como Biologique
                  Recherche y tecnologías certificadas por la CED europea.
                </p>
              </Copy>
            </div>
            <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div className="what-we-do-tag">
                  <h3>Personalizado</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Premium</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Exclusivo</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Natural</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Profesional</h3>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </section>
      <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout">
            <Copy delay={0.1}>
              <p>Lo que nos diferencia</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>Cuatro pilares exclusivos que solo encontrarás en Elynzzéa Advance</h2>
            </Copy>
          </div>
        </div>
        <FeaturedProjects />
      </section>
      <section className="client-reviews-container">
        <div className="container">
          <div className="client-reviews-header-callout">
            <p>Testimonios de nuestros pacientes</p>
          </div>
          <ClientReviews />
        </div>
      </section>
      <section className="map-container">
        <div className="container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5641.787243842952!2d-5.914959667863014!3d37.376419359022236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f6c210cafbd%3A0xe5bb7273527e9083!2sC.%20Columbretes%2C%201%2C%20local%207%2C%2041016%20Sevilla!5e0!3m2!1ses!2ses!4v1765296072568!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Elynzzéa Advance - Calle Columbretes, 1, local 7, 41016 Sevilla"
            ></iframe>
            <div className="map-overlay"></div>
          </div>
        </div>
      </section>
      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="/gallery-callout/gallery-callout-1.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="/gallery-callout/gallery-callout-2.jpg" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>500+</h3>
                  <p>Resultados Reales</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="/gallery-callout/gallery-callout-3.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="/gallery-callout/gallery-callout-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                  Elynzzéa Advance: el único centro en Sevilla con metodología Harmony.
                  15 años, 5000+ protocolos, especialistas IACD y CED. Análisis
                  biométrico + Biologique Recherche + tecnologías europeas certificadas.
                  No promesas genéricas, resultados medibles.
                </h3>
              </Copy>
              <AnimatedButton label="Sobre Nosotros" route="studio" />
            </div>
          </div>
        </div>
      </section>
      <CTAWindow
        img="/home/home-cta-window.jpg"
        header="Elynzzéa Advance"
        callout="Belleza que evoluciona contigo"
        description="Nuestra metodología Harmony se guía por análisis biométrico personalizado y tecnologías certificadas, creando protocolos únicos que se adaptan a tu evolución natural."
      />
      <ConditionalFooter />
    </>
  );
}
*/