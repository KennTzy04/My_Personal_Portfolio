const count_particles = document.querySelector(".js-count-particles");

function updateStats() {
  const particles = window.pJSDom?.[0]?.pJS?.particles?.array;
  if (particles && count_particles) {
    count_particles.innerText = particles.length;
  }

  requestAnimationFrame(updateStats);
}
requestAnimationFrame(updateStats);

// Function to create particles with dynamic color
function loadParticles(particleColor = "#00FFFF", lineColor = "#00FFFF") {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 },
      },
      color: { value: particleColor },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#00FFFF" },
      },
      opacity: { value: 0.5 },
      size: { value: 5, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: lineColor,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
}

// Initial load
loadParticles();


