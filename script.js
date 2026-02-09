const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");
const btn = document.getElementById("loginBtn");
const loader = document.querySelector(".loader");
const btnText = document.querySelector(".btn-text");

/* SHOW / HIDE PASSWORD */
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  togglePassword.textContent = type === "password" ? "👁" : "🙈";
});

/* FORM SUBMIT */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (!email.value.includes("@")) {
    emailError.textContent = "Please enter a valid email";
    valid = false;
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (!valid) return;

  // Simulate loading
  btn.disabled = true;
  btnText.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    alert("Login successful 🎉");
    btn.disabled = false;
    btnText.style.display = "inline";
    loader.style.display = "none";
    form.reset();
  }, 2000);
});
