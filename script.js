let submitBtn = document.querySelector(".arrow-icon");
let inputField = document.querySelector(".input-field input");
let errorMsg = document.querySelector(".error-message");
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
submitBtn.addEventListener("click", function () {
  errorMsg.classList.add("--active");
  if (!validateEmail(inputField.value)) {
    errorMsg.innerHTML = "Please provide a valid email!";
  } else {
    errorMsg.innerHTML = "Email submitted succesfully!";
  }
});
