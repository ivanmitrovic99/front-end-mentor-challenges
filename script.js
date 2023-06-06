let ratings = document.querySelector(".ratings");
let ratingBtns = document.querySelectorAll(".ratings .rating-btn");
let submitBtn = document.querySelector(".submit-btn");
let ratingState = document.querySelector(".rating-state");
let submittedState = document.querySelector(".submitted-state");
let submittedMsg = document.querySelector(".submitted-state .submitted-msg");
let warningMsg = document.querySelector(".warning-msg");
let rating = 0;
ratings.addEventListener("click", function (event) {
  if (event.target.classList.contains("rating-btn")) {
    ratingBtns.forEach(el => {
      el.classList.remove("rating-active");
    });
    event.target.classList.add("rating-active");
    rating = event.target.dataset.value;
  }
});
submitBtn.addEventListener("click", function () {
  if (rating == 0) {
    warningMsg.classList.add("--active");
    return;
  }
  ratingState.classList.remove("--active");
  submittedState.classList.add("--active");
  submittedMsg.innerHTML = `You selected ${rating} out of 5`;
});
