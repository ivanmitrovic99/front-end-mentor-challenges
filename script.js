let firstNameField = document.getElementById("fname");
let lastNameField = document.getElementById("lname");
let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let submitBtn = document.querySelector(".submit-button");
let inputFields = document.querySelectorAll("input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener("click", function () {
  inputFields.forEach(el => {
    if (el.value == "") {
      el.parentNode.querySelector("img").classList.add("--active");
      el.parentNode.querySelector(".error-msg").classList.add("--active");
      el.parentNode.querySelector(".error-msg").innerHTML = `${el.dataset.name} cannot be empty`;
      el.classList.add("--active");
      el.placeholder = "";
    } else {
      el.parentNode.querySelector("img").classList.remove("--active");
      el.parentNode.querySelector(".error-msg").classList.remove("--active");
      el.classList.remove("--active");
    }
    if (el.dataset.name == "Email" && !emailRegex.test(el.value)) {
      el.parentNode.querySelector(".error-msg").innerHTML = `Looks like this is not an email`;
    }
  });
});
