"use strict";

// Modal
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelector(".show-modal");

btnShowModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// toast
function showToast(text) {
  var x = document.getElementById("toast");
  x.classList.add("show");
  x.innerHTML = text;
  setTimeout(function () {
    x.classList.remove("show");
  }, 3000);
}