// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple form handler (placeholder, can be replaced with real backend)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
