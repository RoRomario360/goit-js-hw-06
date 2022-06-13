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
  console.log(listName);
  const ulResult = document.querySelector("#ingredients");
  ulResult.append(listName);
});
