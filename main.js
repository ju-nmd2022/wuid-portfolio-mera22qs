const greenBtn = document.getElementById("btn-green");
const pinkBtn = document.getElementById("btn-pink");
const blueBtn = document.getElementById("btn-blue");
const bodyElement = document.querySelector("body");

greenBtn.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#d2e8d7";
});

pinkBtn.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#f4d7ec";
});

blueBtn.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#dde3e3";
});
