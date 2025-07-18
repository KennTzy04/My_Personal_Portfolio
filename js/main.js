/* -------------------- PRELOADER -------------------- */



/* -------------------- CURRENT YEAR -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

/* -------------------- DARK MODE FUNCTIONALITY -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("switch");
  const body = document.body;
  
  // Check for saved dark mode preference or system preference
  const getDarkModePreference = () => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return saved === "true";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  // Apply dark mode styles
  const applyDarkMode = (isDark) => {
    if (isDark) {
      body.classList.add("dark-mode");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      document.documentElement.setAttribute("data-theme", "light");
    }
    
    // Update toggle state
    if (darkModeToggle) {
      darkModeToggle.checked = isDark;
    }
    
    // Save preference
    localStorage.setItem("darkMode", isDark.toString());
    
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { isDark } }));
  };

  // Initialize dark mode
  const initDarkMode = () => {
    const isDark = getDarkModePreference();
    applyDarkMode(isDark);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const isDark = !body.classList.contains("dark-mode");
    applyDarkMode(isDark);
    
    // Add animation class for smooth transition
    body.classList.add("theme-transition");
    setTimeout(() => {
      body.classList.remove("theme-transition");
    }, 300);
  };

  // Event listeners
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", toggleDarkMode);
  }

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("darkMode") === null) {
      applyDarkMode(e.matches);
    }
  });

  // Initialize on page load
  initDarkMode();
  
  // Add keyboard shortcut (Ctrl/Cmd + J)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "j") {
      e.preventDefault();
      toggleDarkMode();
    }
  });
});

/* -------------------- PDF DONDLOAD SECTION -------------------- */

function toggleCustomDropdown(event) {
  event.stopPropagation();

  const dropdown = event.currentTarget.nextElementSibling;
  const isOpen = dropdown.classList.contains('open');

  // Close all dropdowns first (optional)
  document.querySelectorAll('.submenu.open').forEach(el => el.classList.remove('open'));

  // Toggle current dropdown only if it was closed
  if (!isOpen) {
    dropdown.classList.add('open');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function () {
  document.querySelectorAll('.submenu.open').forEach(el => el.classList.remove('open'));
});
/* -------------------- NAVBAR TOGGLE & SCROLL -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  checkbox?.addEventListener("change", () => {
    navbarCollapse?.classList.toggle("show", checkbox.checked);
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".navbar") && !e.target.closest(".toggle")) {
      if (checkbox && checkbox.checked) {
        checkbox.checked = false;
        navbarCollapse?.classList.remove("show");
      }
    }
  });

  // Close mobile menu on Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && checkbox && checkbox.checked) {
      checkbox.checked = false;
      navbarCollapse?.classList.remove("show");
    }
  });

  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    navbar.style.top = scrollTop > lastScrollTop ? "-100px" : "0";
    lastScrollTop = Math.max(scrollTop, 0);
  });
});

/* -------------------- DROPDOWN MENU TOGGLE -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const parent = toggle.closest(".dropdown");
      const menu = parent.querySelector(".dropdown-menu");
      parent.classList.toggle("show");
      menu?.classList.toggle("show");
      menu?.classList.add("fade", "slide-down");
    });
  });

  // Close dropdown when clicking on dropdown items
  document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      const dropdown = item.closest(".dropdown");
      const menu = dropdown?.querySelector(".dropdown-menu");
      
      // Close the dropdown
      dropdown?.classList.remove("show");
      menu?.classList.remove("show");
      
      // Close mobile menu if on mobile
      if (window.innerWidth <= 991) {
        document.getElementById("checkbox").checked = false;
        document.querySelector(".navbar-collapse")?.classList.remove("show");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.classList.remove("show");
        const menu = dropdown.querySelector(".dropdown-menu");
        menu?.classList.remove("show");
      });
    }
  });
});

/* -------------------- SMOOTH SCROLL & ACTIVE LINK -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link[href^='#']");
  const offset = 70;

  const setActiveLink = () => {
    const fromTop = window.scrollY + offset;
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section?.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  };

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.offsetTop - offset + 1, behavior: "smooth" });
        if (window.innerWidth <= 991) {
          document.getElementById("checkbox").checked = false;
          document.querySelector(".navbar-collapse")?.classList.remove("show");
        }
      }
    });
  });

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});

/* -------------------- BACK TO TOP BUTTON -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;
  window.addEventListener("scroll", () => {
    const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200;
    backToTopBtn.style.display = nearBottom ? "flex" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* -------------------- SECTION OBSERVER FOCUS -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  let currentSection = null;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const section = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        if (currentSection !== section) {
          document.querySelectorAll("[data-section]").forEach(sec => {
            sec.classList.remove("active-focus");
            sec.dataset.focusable = "false";
          });
          section.classList.add("active-focus");
          section.dataset.focusable = "true";
          currentSection = section;
        }
      }
    });
  }, {
    threshold: [0.6],
    rootMargin: "0px 0px -20% 0px"
  });

  document.querySelectorAll("[data-section]").forEach(section => {
    observer.observe(section);
    section.addEventListener("click", () => {
      if (section.dataset.focusable === "true") {
        switch (section.id) {
          case "about": alert("Showing About Details"); break;
          case "skills": alert("Opening Skills Modal"); break;
          case "portfolio": alert("Opening Portfolio Showcase"); break;
          case "contact": alert("Jump to Contact Form or expand details"); break;
          default: alert("Section: " + section.id);
        }
      }
    });
  });
});

/* -------------------- TYPED.JS INITIALIZATION -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const output = document.querySelector(".typed-text-output");
  const stringsSource = document.querySelector(".typed-text");
  if (output && stringsSource) {
    new Typed(output, {
      strings: stringsSource.textContent.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }
});

/* -------------------- OWL CAROUSEL -------------------- */

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 30,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});

/* -------------------- PARTICLES.JS -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#FFFFFF" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
    console.log("particles.js initialized!");
  }
});

/* -------------------- WOW.JS INITIALIZATION -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof WOW !== "undefined") new WOW().init();
});

/* -------------------- LIGHTBOX CONFIGURATION -------------------- */

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  albumLabel: "Image %1 of %2",
});

/* -------------------- PORTFOLIO FILTER -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter.replace(".", "");
      items.forEach(item => {
        const match = filter === "*" || item.classList.contains(filter);
        item.style.display = match ? "block" : "none";
        item.classList.toggle("animate__fadeIn", match);
        item.classList.toggle("animate__fadeOut", !match);
      });
    });
  });
});

/* -------------------- MODAL VIEW DISABLER -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const viewBtn = document.getElementById("viewBtn");
  const liveDemoBtn = document.getElementById("liveDemoBtn");
  const modal = document.getElementById("modal3");
  const closeBtn = modal?.querySelector(".custom-modal-close");

  function setDisabled(state) {
    if (viewBtn) viewBtn.disabled = state;
    if (liveDemoBtn) liveDemoBtn.classList.toggle("disabled", state);
  }

  viewBtn?.addEventListener("click", () => {
    setDisabled(true);
    if (modal) modal.style.display = "flex";
    setTimeout(() => setDisabled(false), 3000);
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
    setDisabled(false);
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      setDisabled(false);
    }
  });
});
