// -------------------- PORTFOLIO FILTER LOGIC -------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "*" ||
          item.classList.contains(filterValue.substring(1))
        ) {
          item.style.display = "block";
          item.classList.add("animate__animated", "animate__fadeIn");
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // -------------------- PORTFOLIO MODAL LOGIC JS-------------------- //

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal");
      const modal = document.getElementById(targetId);
      if (modal) modal.style.display = "block";
    });
  });

  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");
      if (modal) modal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // -------------------- PORTFOLIO LIGHTBOX LOGIC JS -------------------- //

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxPrev = document.querySelector(".lightbox-prev");
  const lightboxNext = document.querySelector(".lightbox-next");
  const lightboxImages = document.querySelectorAll(".lightbox-trigger");

  let currentImages = [];
  let currentIndex = 0;

  document.querySelectorAll(".portfolio-thumbs img").forEach((img) => {
    img.addEventListener("click", () => {
      const parentThumbs = img.closest(".portfolio-thumbs");
      const imageElements = parentThumbs.querySelectorAll("img");

      currentImages = Array.from(imageElements).map(
        (imgEl) => imgEl.getAttribute("data-full") || imgEl.src
      );
      currentIndex = Array.from(imageElements).indexOf(img);

      showLightbox(currentImages[currentIndex]);
    });
  });

  document.querySelectorAll(".lightbox-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      currentImages = [];
      currentIndex = 0;
    });
  });

  function showLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    currentImages = [];
    currentIndex = 0;
  }

  function showPrev() {
    if (currentImages.length === 0) return;
    currentIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    showLightbox(currentImages[currentIndex]);
  }

  function showNext() {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    showLightbox(currentImages[currentIndex]);
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", showPrev);
  if (lightboxNext) lightboxNext.addEventListener("click", showNext);

  document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeLightbox();
    }
  });
});

// -------------------- PORTFOLIO VIDEO MODAL LOGIC JS -------------------- //

document.addEventListener("DOMContentLoaded", function () {
  // Open modals when button is clicked
  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal");
      const modal = document.getElementById(targetId);
      if (modal) modal.style.display = "block";
    });
  });

  // Close modals when clicking close button
  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");
      if (modal) {
        modal.style.display = "none";
        stopVideoInModal(modal);
      }
    });
  });

  // Close modals when clicking outside the modal content
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
        stopVideoInModal(modal);
      }
    });
  });

  // -------------------- PORTFOLIO STOP VIDEO INSIDE LOGIC -------------------- //

  function stopVideoInModal(modal) {
    const video = modal.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
});

// -------------------- PORTFOLIO MODAL SINGLE/ZOOM LOGIC -------------------- //

document.querySelectorAll('.portfolio-thumb-single img.zoomable').forEach((img) => {
  img.addEventListener('click', () => {
    // Clone the image
    const zoomedImg = img.cloneNode(true);
    zoomedImg.classList.add('zoomed');

    // Create a close button
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('zoom-close-btn');
    closeBtn.innerHTML = '&times;'; // X symbol

    // Close zoom on button click
    closeBtn.addEventListener('click', () => {
      zoomedImg.remove();
      closeBtn.remove();
      document.body.classList.remove('zoom-active');
    });

    // Add close on image click too
    zoomedImg.addEventListener('click', () => {
      zoomedImg.remove();
      closeBtn.remove();
      document.body.classList.remove('zoom-active');
    });

    // Append to body
    document.body.appendChild(zoomedImg);
    document.body.appendChild(closeBtn);
    document.body.classList.add('zoom-active');
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const zoomedImg = document.querySelector('img.zoomed');
    const closeBtn = document.querySelector('.zoom-close-btn');
    if (zoomedImg) zoomedImg.remove();
    if (closeBtn) closeBtn.remove();
    document.body.classList.remove('zoom-active');
  }
});
