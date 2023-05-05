const bgcolor = document.querySelector(".color");
const button = document.getElementById("btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  bgcolor.textContent = hexColor;
  document.body.style.background = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
