/* --------------------  SCROLL SECTION REVEAL JS -------------------- */

/* --------------------  INITIALIZE SECTION REVEAL -------------------- */

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false,
});

/* --------------------  NAVBAR SECTION REVEAL -------------------- */



/* --------------------  HEADER SECTION REVEAL -------------------- */

sr.reveal(".section-header", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 200,
  opacity: 0,
  easing: "ease-in-out",
  reset: false,
});

/* --------------------  HERO SECTION REVEAL -------------------- */

sr.reveal(".hero .hero-text p", { delay: 100 });
sr.reveal(".hero .hero-text h1", { delay: 200 });
sr.reveal(".hero .hero-text h2", { delay: 300 });
sr.reveal(".hero .typed-cursor", { delay: 400 });

sr.reveal(".hero .hero-btn", {
  delay: 500,
  interval: 100,
  origin: "bottom",
  scale: 0.95,
});

sr.reveal(".hero .hero-image", {
  origin: "top",
  delay: 600,
  distance: "80px",
  scale: 0.95,
});

/* --------------------  HERO ICONS SECTION REVEAL -------------------- */

sr.reveal(".hero-social", {
  origin: "bottom",
  distance: "40px",
  delay: 1200,
  duration: 800,
  easing: "ease-in-out",
  reset: false,
});

sr.reveal(".hero-social a", {
  origin: "bottom",
  distance: "30px",
  interval: 100,
  delay: 1300,
  duration: 700,
  easing: "ease-in-out",
  reset: false,
});

/* --------------------  ABOUT SECTION REVEAL -------------------- */

sr.reveal(".about .section-header", {
  origin: "top",
  delay: 200,
  opacity: 0,
});

sr.reveal(".about .about-img", {
  origin: "left",
  delay: 300,
  opacity: 0,
});

sr.reveal(".about .about-title", {
  origin: "top",
  distance: "30px",
  delay: 300,
  duration: 800,
  opacity: 0,
  easing: "ease-in-out",
  reset: false,
});

sr.reveal(".about .col-lg-7 h3", {
  origin: "bottom",
  distance: "40px",
  delay: 450,
  duration: 1000,
  opacity: 0,
  easing: "ease-in-out",
  reset: false,
});

sr.reveal(".about .col-lg-7 p", {
  origin: "bottom",
  distance: "30px",
  delay: 400,
  duration: 800,
  opacity: 0,
  easing: "ease-in-out",
  reset: false,
});

sr.reveal(".about .about-content", {
  origin: "right",
  delay: 400,
  opacity: 0,
});

sr.reveal(".about .about-text p", {
  origin: "bottom",
  interval: 100,
  delay: 500,
  opacity: 0,
});

sr.reveal(".about .skills", {
  origin: "bottom",
  delay: 600,
  opacity: 0,
});

sr.reveal(".about .row .col-sm-6", {
  origin: "bottom",
  interval: 150,
  delay: 650,
  opacity: 0,
});

sr.reveal(".about .btn-outline-primary", {
  origin: "bottom",
  delay: 800,
  scale: 0.9,
  opacity: 0,
});

sr.reveal(".about .animated-border", {
  origin: "bottom",
  delay: 850,
  scale: 0.8,
  opacity: 0,
});

/* --------------------  SERVICES SECTION REVEAL -------------------- */


sr.reveal(".service .section-header", {
  origin: "top",
  delay: 100
});

sr.reveal(".service .service-item", {
  origin: "bottom",
  interval: 150,
  opacity: 0
});

sr.reveal(".service .service-icon", {
  origin: "left",
  distance: "40px",
  delay: 200,
  interval: 150
});

sr.reveal(".service .service-text", {
  origin: "right",
  distance: "40px",
  delay: 300,
  interval: 150
});

/* --------------------  EDUCATION & EXPERIENCE SECTION REVEAL -------------------- */

sr.reveal(".experience .timeline", {
  origin: "top",
  delay: 100,
  opacity: 0
});

sr.reveal(".experience .timeline-item.left", {
  origin: "left",
  delay: 200,
  interval: 200,
  opacity: 0
});

sr.reveal(".experience .timeline-item.right", {
  origin: "right",
  delay: 200,
  interval: 200,
  opacity: 0
});

sr.reveal(".experience .timeline-text", {
  origin: "bottom",
  delay: 300,
  interval: 200,
  opacity: 0
});


/* --------------------  CERTIFICATES SECTION REVEAL -------------------- */

sr.reveal(".certificate-card", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 300,
  opacity: 0,
  scale: 0.85,
  interval: 150,
});

sr.reveal(
  ".certificate-overlay h5, .certificate-overlay small, .certificate-overlay .btn-glow",
  {
    origin: "top",
    distance: "30px",
    duration: 800,
    delay: 400,
    opacity: 0,
    interval: 100,
  }
);

sr.reveal(".certificate-overlay .btn-glow", {
  origin: "bottom",
  distance: "30px",
  duration: 800,
  delay: 500,
  opacity: 0,
});

/* --------------------  SKILLS SECTION REVEAL -------------------- */

sr.reveal(".skills .section-header", {
  origin: "top",
  delay: 100,
  opacity: 0
});

sr.reveal(".skill-grid .flip-card", {
  origin: "bottom",
  interval: 150,
  delay: 200,
  opacity: 0
});

/* --------------------  PORTFOLIO SECTION REVEAL -------------------- */

sr.reveal(".portfolio .section-header", {
  origin: "top",
  delay: 100,
  opacity: 0
});

sr.reveal(".filters .filter-btn", {
  origin: "bottom",
  interval: 100,
  delay: 200,
  opacity: 0
});

sr.reveal(".portfolio .portfolio-item", {
  origin: "bottom",
  interval: 150,
  delay: 300,
  opacity: 0
});

sr.reveal(".portfolio-wrap", {
  origin: "bottom",
  interval: 100,
  opacity: 0
});

/* --------------------  CONTACT SECTION REVEAL -------------------- */

sr.reveal(".contact-section", {
  origin: "bottom",
  opacity: 0
});

sr.reveal(".contact-section .section-header p", {
  origin: "top",
  delay: 100,
  opacity: 0
});

sr.reveal(".contact-section .section-header h2", {
  origin: "top",
  delay: 200,
  opacity: 0
});

sr.reveal(".contact-form-modern .input-group", {
  origin: "bottom",
  interval: 150,
  opacity: 0
});

sr.reveal(".contact-btn", {
  origin: "bottom",
  delay: 600,
  opacity: 0
});


/* --------------------  FOOTER SECTION REVEAL -------------------- */

sr.reveal(".footer", {
  origin: "bottom",
  opacity: 0,
  delay: 100
});

sr.reveal(".footer .footer-social a", {
  origin: "bottom",
  opacity: 0,
  interval: 100,
  delay: 200
});

sr.reveal(".footer .footer-menu a", {
  origin: "bottom",
  opacity: 0,
  interval: 100,
  delay: 300
});

sr.reveal(".footer .copyright", {
  origin: "bottom",
  opacity: 0,
  delay: 500
});
