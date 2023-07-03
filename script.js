submitBtn = document.querySelector(".mid-section img");
let dayValue = document.querySelector("#day");
let monthValue = document.querySelector("#month");
let yearValue = document.querySelector("#year");
let yearLabel = document.querySelector(".year-value");
let dayLabel = document.querySelector(".day-value");
let monthLabel = document.querySelector(".month-value");
let currentDate = new Date();
function addActive(el) {
  el.parentNode.querySelector(".input-label").classList.add("--active");
  el.classList.add("--active");
  el.parentNode.querySelector(".error-msg").classList.add("--active");
}
function removeActive(el) {
  el.parentNode.querySelector(".input-label").classList.remove("--active");
  el.classList.remove("--active");
  el.parentNode.querySelector(".error-msg").classList.remove("--active");
}
submitBtn.addEventListener("click", function () {
  let valid = true;
  if (dayValue.value > 31 || dayValue.value < 1) {
    addActive(dayValue);
    valid = false;
  } else {
    removeActive(dayValue);
  }
  if (monthValue.value > 12 || monthValue.value < 1) {
    addActive(monthValue);
    valid = false;
  } else {
    removeActive(monthValue);
  }
  if (yearValue.value > 2023 || yearValue.value < 1) {
    addActive(yearValue);
    valid = false;
  } else {
    removeActive(yearValue);
  }
  if (!valid) {
    return;
  }
  let inputDate = new Date(`-${yearValue.value}-${monthValue.value}-${dayValue.value}`);

  let timeDiff = currentDate - inputDate;

  let millisecondsPerDay = 1000 * 60 * 60 * 24;
  let millisecondsPerMonth = millisecondsPerDay * 30.44;
  let millisecondsPerYear = millisecondsPerDay * 365.25;

  yearLabel.innerHTML = Math.floor(timeDiff / millisecondsPerYear);
  monthLabel.innerHTML = Math.floor((timeDiff % millisecondsPerYear) / millisecondsPerMonth);
  dayLabel.innerHTML = Math.floor(((timeDiff % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay);
});
