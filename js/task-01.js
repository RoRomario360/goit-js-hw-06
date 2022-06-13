const showCategories = document.querySelector("ul#categories");
console.log("Number of categories :", showCategories.children.length);

const listArray = [...showCategories.children];
listArray.forEach((elem) => {
  console.log("Category:", elem.children[0].textContent);
  console.log("Elements:", elem.children[1].children.length);
});
