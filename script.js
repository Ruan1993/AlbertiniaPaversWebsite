// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            // Optional: Show a brief "Submitting..." message
            setTimeout(() => {
                alert("Your message has been sent! We will get back to you soon.");
            }, 500);
        });
    }

    // Automatically Update Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});