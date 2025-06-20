(function($) {
    "use strict";

    // Verify EmailJS is loaded
    console.log('EmailJS loaded:', typeof emailjs !== 'undefined');
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded!');
        return;
    }

    // Phone number validation
    function validatePhoneNumber(phone) {
        // Remove spaces and dashes
        const cleaned = phone.replace(/[\s-]/g, '');
        // Check if it starts with +63 and has 12-13 digits total
        const phoneRegex = /^\+63\d{10}$/;
        return phoneRegex.test(cleaned);
    }

    // Contact Form
    $(".contact-form").submit(function(e) {
        e.preventDefault();
        
        var $form = $(this);
        var $submit = $form.find('button[type="submit"]');
        var submitText = $submit.text();
        var $success = $('#success');
        
        // Reset error messages
        $('.error-message').text('');
        
        // Get form data
        var formData = {
            firstName: $form.find('#firstName').val().trim(),
            lastName: $form.find('#lastName').val().trim(),
            email: $form.find('#email').val().trim(),
            phone: $form.find('#phone').val().trim(),
            message: $form.find('#message').val().trim()
        };

        // Validate form data
        var isValid = true;

        // First Name validation
        if (!formData.firstName) {
            $('#firstNameError').text('First name is required');
            isValid = false;
        }

        // Last Name validation
        if (!formData.lastName) {
            $('#lastNameError').text('Last name is required');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            $('#emailError').text('Email is required');
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            $('#emailError').text('Please enter a valid email address');
            isValid = false;
        }

        // Phone validation
        if (!formData.phone) {
            $('#phoneError').text('Phone number is required');
            isValid = false;
        } else if (!validatePhoneNumber(formData.phone)) {
            $('#phoneError').text('Please enter a valid phone number (e.g., +639261442093)');
            isValid = false;
        }

        // Message validation
        if (!formData.message) {
            $('#messageError').text('Message is required');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Show loading state
        $submit.prop('disabled', true).text('Sending...');
        
        // Hide any existing messages
        $success.removeClass('success error').hide();

        // Prepare data for EmailJS - match the template parameters exactly
        const emailData = {
            to_name: "Kenneth Casing",
            from_name: formData.firstName + ' ' + formData.lastName,
            from_email: formData.email,
            phone: formData.phone,  // Make sure this matches your EmailJS template parameter
            message: formData.message
        };

        // Send email using EmailJS
        console.log('Attempting to send email with data:', emailData);
        emailjs.send("service_a2x6re5", "template_53po9az", emailData)
            .then(function(response) {
                console.log('SUCCESS!', response);
                $success
                    .text('Message sent successfully! Thank you for contacting me.')
                    .addClass('success')
                    .fadeIn();
                $form[0].reset();
               
            })
            
            .catch(function(error) {
                console.error('EmailJS Error:', error);
                $success
                    .text('Error sending message. Please try again.')
                    .addClass('error')
                    .fadeIn();
            })
            .finally(function() {
                // Reset button state
                $submit.prop('disabled', false).text(submitText);
                
                // Auto-hide messages after 5 seconds
                setTimeout(function() {
                    $success.fadeOut();
                }, 5000);
            });
    });
})(jQuery);
