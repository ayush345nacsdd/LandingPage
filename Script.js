// Mobile Menu Toggle
document.getElementById("menu-toggle").onclick = function() {
  document.getElementById("nav-links").classList.toggle("show");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    e.preventDefault();
  }
});
