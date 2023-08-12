function groceryShopping(e) {
  e.preventDefault();
  const pickedGroceries = document.querySelectorAll(
    "input[name=groceries]:checked"
  );

  const pickedGroceriesArray = [];
  console.log(pickedGroceriesArray);

  const mainDiv = document.createElement("div");
  const ul = document.createElement("ul");

  pickedGroceries.forEach(function (item) {
    pickedGroceriesArray.push(item.value);
    pickedGroceriesArray.sort();
  });
  pickedGroceriesArray.forEach(function (item) {
    const listed = document.createElement("li");
    listed.textContent = item.toUpperCase();
    ul.append(listed);
    console.log(item);
  });
  mainDiv.append(ul);
  document.body.append(mainDiv);
  
  const form = document.querySelector("form");
  form.style.display = 'none';
}
window.addEventListener("load", function () {
  const form = document.querySelector(".btn");
  form.addEventListener("click", groceryShopping);
});
