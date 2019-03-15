var feedback = document.querySelector(".feedback-button");

var popup = document.querySelector(".feedback-form");
var overlay = document.querySelector(".overlay")
var close = popup.querySelector(".modal-close");

var person = popup.querySelector("[name=person]");
var mail = popup.querySelector("[name=mail]");
var letter = popup.querySelector("[name=letter]");


feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  person.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

popup.addEventListener("submit", function (evt) {
  if (!person.value || !mail.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});
