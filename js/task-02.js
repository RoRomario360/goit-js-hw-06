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
  const ulResult = document.querySelector("#ingredients").append(listName);
});

// ulResult.append(listName);
