const body = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const showColor = document.querySelector(".color");

changeColor.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  showColor.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
