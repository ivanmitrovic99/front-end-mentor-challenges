let faqQuestions = document.querySelectorAll(".faq-question");
let faqAnswers = document.querySelectorAll(".faq-answer");
let faqItems = document.querySelectorAll(".faq-item");
function resetClasses() {
  faqItems.forEach(el => {
    el.querySelector(".faq-answer").classList.remove("--active");
    el.querySelector("img").classList.remove("--rotate");
    el.querySelector(".faq-question").classList.remove("--bold");
  });
}
faqQuestions.forEach(el => {
  el.addEventListener("click", function () {
    if (!el.parentNode.querySelector(".faq-answer").classList.contains("--active")) resetClasses();
    el.parentNode.querySelector(".faq-answer").classList.toggle("--active");
    el.querySelector("img").classList.toggle("--rotate");
    el.classList.toggle("--bold");
  });
});
