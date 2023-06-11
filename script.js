let shareBtnDesktop = document.querySelector(".share img.share-icon.icon-desktop");
let shareBtnMobile = document.querySelector(".share img.share-icon.icon-mobile");
let bubble = document.querySelector(".share .socials.socials-desktop");
let bubbleMobile = document.querySelector(".user-mobile");
let userEl = document.querySelector(".user");
shareBtnDesktop.addEventListener("click", function () {
  if (window.innerWidth > 767) {
    bubble.classList.toggle("--active");
    shareBtnDesktop.classList.toggle("--bubble-active");
  } else {
    bubbleMobile.classList.toggle("--active-mobile");
    userEl.style.display = "none";
  }
});
shareBtnMobile.addEventListener("click", function () {
  bubbleMobile.classList.toggle("--active-mobile");
  userEl.style.display = "flex";
});
