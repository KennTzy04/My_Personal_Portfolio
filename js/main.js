//----------------GENERAL JAVASCRIPT----------------//

(function ($) {
  "use strict";

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").fadeOut("slow", function () {
          $(this).remove();
        });
      }
    }, 2000);
  };
  loader();

  // -------------------- YEAR CURRENT  -------------------- //

  document.getElementById("year").textContent = new Date().getFullYear();

  // -------------------- NAVBAR MOBILE MOOD -------------------- //

  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");
    const navbar = document.getElementById("mainNavbar");

    function toggleNavbar() {
      if (window.innerWidth <= 991) {
        // Bootstrap mobile breakpoint
        if (checkbox.checked) {
          navbar.classList.add("show");
        } else {
          navbar.classList.remove("show");
        }
      } else {
        navbar.classList.add("show"); // Always show on desktop
      }
    }

    // Toggle when checkbox changes
    checkbox.addEventListener("change", toggleNavbar);

    // Update on window resize (for responsiveness)
    window.addEventListener("resize", toggleNavbar);

    // Initial check
    toggleNavbar();
  });

  // -------------------- DARK MODE -------------------- //

  const switchToggle = document.getElementById("switch");
  const body = document.body;

  // Apply saved theme on load
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      switchToggle.checked = true;
    }
  });

  // Toggle dark mode on switch
  switchToggle.addEventListener("change", () => {
    if (switchToggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

  // -------------------- RELOAD GO TO HOME PAGE -------------------- //

  window.addEventListener("DOMContentLoaded", () => {
    // Scroll to top instantly on page load
    window.scrollTo(0, 0);

    // Replace current hash with #home without affecting scroll
    if (window.location.hash !== "#home") {
      history.replaceState(null, null, "#home");
    }
  });

  // -------------------- INITIALIZE WOW -------------------- //

  new WOW().init();

  // -------------------- BACK TO TOP -------------------- //

  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show only if the user is near the bottom (e.g., within 200px of the bottom)
    if (scrollTop + windowHeight >= documentHeight - 200) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // -------------------- INTERACTION TO ALLOW SCROLL ON MOBILE -------------------- //

  let currentSection = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        const inCenter = entry.isIntersecting && entry.intersectionRatio > 0.6;

        if (inCenter) {
          // Remove active from others
          document.querySelectorAll("[data-section]").forEach((sec) => {
            sec.classList.remove("active-focus");
            sec.dataset.focusable = "false";
          });

          // Activate current
          section.classList.add("active-focus");
          section.dataset.focusable = "true";
          currentSection = section;
        }
      });
    },
    { threshold: 0.6 }
  );

  // Observe all sections
  document.querySelectorAll("[data-section]").forEach((section) => {
    observer.observe(section);

    // Add click/tap listener
    section.addEventListener("click", () => {
      if (section.dataset.focusable === "true") {
        handleSectionClick(section.id);
      }
    });
  });

  // Handle the 1-tap action
  function handleSectionClick(id) {
    switch (id) {
      case "about":
        alert("Showing About Details");
        break;
      case "skills":
        alert("Opening Skills Modal");
        break;
      case "portfolio":
        alert("Opening Portfolio Showcase");
        break;
      case "contact":
        alert("Jump to Contact Form or expand details");
        break;
      default:
        alert("Section: " + id);
    }
  }

  // -------------------- STICKY NAVBAR -------------------- //

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // -------------------- SMOOTH SCROLLING ON THE NAVBAR LINKS AND CLOSE MOBILE MENU WHEN CLICKED -------------------- //

  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      //-----CLOSE MOBILE MENU-----//
      $(".navbar-collapse").collapse("hide");

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // -------------------- CLOSE MOBILE MENU WHEN CLICKING OUTSIDE -------------------- //

  $(document).click(function (event) {
    if (!$(event.target).closest(".navbar").length) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // -------------------- TYPED INITIATE -------------------- //

  $(document).ready(function () {
    if ($(".typed-text-output").length == 1) {
      var typed_strings = $(".typed-text").text();
      var typed = new Typed(".typed-text-output", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  });

  // -------------------- SKILLS SECTION -------------------- //

  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // -------------------- PRELOADER -------------------- //

  $(window).on("load", function () {
    if ($("#loader").length) {
      $("#loader").fadeOut("slow", function () {
        $(this).remove();
      });
    }
  });

  // -------------------- INITIALIZE OWL CAROUSEL -------------------- //

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  // -------------------- SMOOTH SCROLLING FOR NAVIGATION LINKS -------------------- //

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 0,
      },
      500,
      "linear"
    );
  });

  // -------------------- NAVBAR DROPDOWN SECTION -------------------- //

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#FFFFFF",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#FFFFFF",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
        },
      },
    });

    console.log("particles.js initialized!");
  });

  // -------------------- NAVBAR SCROLL -------------------- //

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const sections = Array.from(navLinks).map((link) => {
      const id = link.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    });

    function onScroll() {
      // Optional: Add or remove .nav-sticky class
      if (window.scrollY > 50) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }

      // Determine active section
      let currentSectionId = null;
      const scrollPos = window.scrollY + 100; // Adjust based on navbar height

      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos) {
          currentSectionId = section.id;
        }
      });

      // -------------------- HIGHLIGHT THE CORRECT NAV LINK -------------------- //

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }

    // -------------------- SMOOTH SCROLL + COLLAPSE NAVBAR ON LINK CLICK -------------------- //

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          e.preventDefault();
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth",
          });
        }

        // Collapse mobile menu
        const navbarCollapse = document.getElementById("navbarCollapse");
        if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });

    // -------------------- LISTEN FOR SCROLL -------------------- //

    window.addEventListener("scroll", onScroll);

    // -------------------- TRIGGER ON PAGE RELOAD -------------------- //

    onScroll();
  });

  // -------------------- INITIALIZE LIGHTBOX -------------------- //

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    albumLabel: "Image %1 of %2",
  });

  // -------------------- PORTFOLIO FILTER SECTION -------------------- //

  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Toggle active state
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.dataset.filter.replace(".", "");

        portfolioItems.forEach((item) => {
          const match =
            filterValue === "*" || item.classList.contains(filterValue);

          // Add fade-in if visible, fade-out if hidden
          if (match) {
            item.style.display = "block";
            item.classList.remove("animate__fadeOut");
            item.classList.add("animate__animated", "animate__fadeIn");
          } else {
            item.classList.remove("animate__fadeIn");
            item.classList.add("animate__fadeOut");

            // Wait for animation before hiding
            setTimeout(() => {
              item.style.display = "none";
            }, 300); // match fadeOut duration
          }
        });
      });
    });
  });

  // -------------------- JAVASCRIPT (DISABLE AND RE-ENABLE) -------------------- //

  const viewBtn = document.getElementById("viewBtn");
  const liveDemoBtn = document.getElementById("liveDemoBtn");
  const modal = document.getElementById("modal3");
  const closeBtn = modal.querySelector(".custom-modal-close");

  function setDisabled(state) {
    viewBtn.disabled = state;
    liveDemoBtn.classList.toggle("disabled", state);
  }

  // When "View Project" is clicked:
  viewBtn.addEventListener("click", () => {
    setDisabled(true); // Disable both
    modal.style.display = "flex";
    setTimeout(() => setDisabled(false), 3000); // Re-enable after 3s
  });

  // Close the modal & re-enable
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    setDisabled(false);
  });

  // Optional: click outside to close
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      setDisabled(false);
    }
  });

  // -------------------- NAVBAR HIDE ON SCROLL -------------------- //

  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.top = "-100px"; // hide navbar
    } else {
      // Scrolling up
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
  });

  // -------------------- END OF SCRIPT -------------------- //
})(jQuery);
