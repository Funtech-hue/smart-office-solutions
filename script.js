// Simple mobile menu toggle (optional)
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Handle contact form submit (demo)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully! Thank you for contacting Smart Office Solutions.');
    form.reset();
  });
}
