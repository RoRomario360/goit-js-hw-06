const sliderElem = document.querySelector("#font-size-control");
const textElementChangeSize = document.querySelector("#text");

sliderElem.addEventListener("input", handleInputRange);
textElementChangeSize.style.fontSize = sliderElem.value + "px";

function handleInputRange(event) {
  textElementChangeSize.style.fontSize = event.currentTarget.value + "px";
}
