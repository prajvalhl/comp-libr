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

// expanding cards
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("ec-active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("ec-active");
  });
}

// progress steps

const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  progressUpdate();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  progressUpdate();
});

function progressUpdate() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("progress-active");
    } else {
      circle.classList.remove("progress-active");
    }
  });

  const actives = document.querySelectorAll(".progress-active");

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
