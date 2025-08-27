document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // stop form from reloading the page

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        formResponse.innerHTML = `<div class="alert alert-danger">⚠ Please fill in all fields.</div>`;
        return;
      }

      // Email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formResponse.innerHTML = `<div class="alert alert-danger">⚠ Please enter a valid email address.</div>`;
        return;
      }

      // Simulate success (since we don’t have backend)
      formResponse.innerHTML = `<div class="alert alert-success">✅ Thank you, ${name}! Your message has been sent successfully.</div>`;

      // Reset form after submission
      contactForm.reset();
    });
  }
  console.log("Portfolio JS loaded");
});
