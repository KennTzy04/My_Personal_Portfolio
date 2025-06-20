//CERT SECTION CLOSE BUTONS

/* -------------------- CLOSE THE MODAL WHEN CLICKING THE CLOSE ICON -------------------- */

document.addEventListener("DOMContentLoaded", function () {
  // Open modal
  document.querySelectorAll(".open-modal").forEach((btn) => {
    btn.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  // Close modal when clicking the close button
  document.querySelectorAll(".custom-modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      const modal = this.closest(".custom-modal");
      if (modal) modal.style.display = "none";
    });
  });

  // Close modal when clicking outside the modal content
  document.querySelectorAll(".custom-modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

/* -------------------- LIGHTBOX FOR FULL CERTIFICATES -------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const viewFullButtons = document.querySelectorAll(".view-full-cert");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.querySelector(".lightbox-close");

  // Open Lightbox
  viewFullButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const imgSrc = this.getAttribute("data-img");
      lightboxImage.src = imgSrc;
      lightboxModal.style.display = "flex";
      document.body.style.overflow = "hidden"; // Lock background scroll
    });
  });

  // Close Lightbox
  lightboxClose.addEventListener("click", function () {
    lightboxModal.style.display = "none";
    lightboxImage.src = "";
    document.body.style.overflow = ""; // Restore scroll
  });

  // Close on outside click
  lightboxModal.addEventListener("click", function (e) {
    if (e.target === lightboxModal) {
      lightboxModal.style.display = "none";
      lightboxImage.src = "";
      document.body.style.overflow = "";
    }
  });
});
