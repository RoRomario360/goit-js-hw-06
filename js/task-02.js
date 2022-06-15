const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listInput = ingredients.map((elem) => {
  const listName = document.createElement("li");
  listName.textContent = `${elem}`;
  listName.classList.add("item");

  return listName;
});
const listOgElem = document.querySelector("#ingredients");
listOgElem.append(...listInput);
