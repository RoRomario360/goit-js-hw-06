const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onInputInBlur);

function onInputInBlur() {
  if (inputText.value.length === Number(inputText.dataset.length)) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
    return;
  }

  inputText.classList.add("invalid");
  inputText.classList.remove("valid");
}
