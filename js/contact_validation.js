//-----CONTACT VALIDATION EMAIL JS-----//

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Optional display areas
  const sentMessage = document.querySelector(".sent-message");
  const errorMessage = document.querySelector(".error-message");
  const messageBox = document.getElementById("formMessage");

  emailjs.init("Me4zgtWzZ1SNamlSp"); // Replace with your EmailJS public key

  if (!form) {
    console.error("❌ contactForm not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Hide all messages before submission
    if (sentMessage) sentMessage.style.display = "none";
    if (errorMessage) errorMessage.style.display = "none";
    if (messageBox) messageBox.style.display = "none";

    emailjs
      .sendForm("service_a2x6re5", "template_53po9az", form)
      .then(() => {
        // Display `.sent-message` if exists
        if (sentMessage) {
          sentMessage.style.display = "block";
          setTimeout(() => {
            sentMessage.style.display = "none";
          }, 9000);
        }

        // Display `#formMessage` if exists
        if (messageBox) {
          messageBox.textContent = "✅ Message sent successfully!";
          messageBox.style.display = "block";
          messageBox.style.backgroundColor = "#d4edda";
          messageBox.style.color = "#155724";
          messageBox.style.border = "1px solid #c3e6cb";

          setTimeout(() => {
            messageBox.style.display = "none";
          }, 9000);
        }

        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        // Display `.error-message` if exists
        if (errorMessage) {
          errorMessage.style.display = "block";
          setTimeout(() => {
            errorMessage.style.display = "none";
          }, 5000);
        }

        // Display `#formMessage` if exists
        if (messageBox) {
          messageBox.textContent =
            "❌ Failed to send message. Please try again.";
          messageBox.style.display = "block";
          messageBox.style.backgroundColor = "#f8d7da";
          messageBox.style.color = "#721c24";
          messageBox.style.border = "1px solid #f5c6cb";

          setTimeout(() => {
            messageBox.style.display = "none";
          }, 5000);
        }
      });
  });
});
