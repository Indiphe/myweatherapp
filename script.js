document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-button");
  const infoDisplay = document.getElementById("info-display");

  const infoContent = {
    menu: "This is the menu section.",
    home: "Welcome to the home page.",
    about: "Learn more about us.",
    services: "Discover our services.",
    testimonials: "Read what our clients say.",
    contact: "Get in touch with us.",
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const infoKey = event.target.getAttribute("data-info");
      infoDisplay.textContent =
        infoContent[infoKey] || "Information not available.";
    });
  });
});
document.querySelector(".nav-button").addEventListener("click", function () {
  window.location.href = "info.html";
});
function showMessage() {
  document.getElementById("message").style.display = "block";
}
function checkout() {
  localStorage.removeItem("cart");
  loadCart();
  window.location.href = "index.html";
}
