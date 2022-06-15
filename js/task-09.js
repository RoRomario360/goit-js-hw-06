const body = document.querySelector("body");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  return (body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
