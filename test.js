const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const indicator = document.getElementById("indicator");

function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  indicator.style.transform = "translateX(0)";
}

function showRegister() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  indicator.style.transform = "translateX(100%)";
}

// Initialize with login form visible
showLogin();
