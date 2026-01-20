"use client";
import "./CTAWindow.css";

import Copy from "../Copy/Copy";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const CTAWindow = ({ img, header, callout, description, showButton = false, buttonLabel, buttonRoute }) => {
  return (
    <section className="cta-window">
      <div className="container">
        <div className="cta-window-img-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="cta-window-img-overlay"></div>
        <div className="cta-window-header">
          <Copy delay={0.1}>
            <h1>{header}</h1>
          </Copy>
          {showButton && (
            <div className="cta-window-button">
              <AnimatedButton
                label={buttonLabel || "Reservar cita"}
                route={buttonRoute || "/connect"}
                delay={0.2}
                animateOnScroll={false}
              />
            </div>
          )}
        </div>
        <div className="cta-window-footer">
          <div className="cta-window-callout">
            <Copy delay={0.1}>
              <h3>{callout}</h3>
            </Copy>
          </div>
          <div className="cta-window-description">
            <Copy delay={0.1}>
              <p>{description}</p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWindow;
