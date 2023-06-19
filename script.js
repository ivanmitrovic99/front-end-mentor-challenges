let submitBtn = document.querySelector(".submit-btn");
let emailField = document.querySelector("input");
let emailBox = document.querySelector(".content");
let successBox = document.querySelector(".success-msg");
let errorMsg = document.querySelector(".error-msg");
let emailValue = document.querySelector(".email-value");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
submitBtn.addEventListener("click", function () {
  if (emailRegex.test(emailField.value)) {
    emailBox.classList.remove("--active");
    successBox.classList.add("--active");
    emailValue.innerHTML = emailField.value;
  } else {
    emailField.classList.add("--active");
    errorMsg.classList.add("--active");
  }
});
