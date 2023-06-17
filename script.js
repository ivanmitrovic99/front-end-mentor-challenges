let inputField = document.querySelector("input");
let submitBtn = document.querySelector(".submit-button");
let errorMsg = document.querySelector(".error-message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
submitBtn.addEventListener("click", function () {
  if (!emailRegex.test(inputField.value)) {
    inputField.classList.add("--active");
    errorMsg.classList.add("--active");
  } else {
    inputField.classList.remove("--active");
    errorMsg.classList.remove("--active");
  }
});
