
function groceryShopping(e) {
  e.preventDefault();
  const pickedGroceries = document.querySelectorAll("input[name=groceries]:checked");

  const pickedGroceriesArray = Array.from(pickedGroceries);

  const mainDiv = document.createElement('div');
  const ul = document.createElement('ul');

  pickedGroceriesArray.forEach(function(item) {
    const listed = document.createElement('li');
    listed.append(item.value);
    ul.append(listed);
  })
  mainDiv.append(ul);
  document.body.append(mainDiv);
}
window.addEventListener("load", function () {
  const form = document.querySelector(".btn");
  form.addEventListener("click", groceryShopping);
});
