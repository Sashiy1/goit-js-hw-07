const listElements = document.querySelectorAll(".item");
const listArray = [...listElements];
console.log("Number of categories:", listArray.length);

const headerElements = document.querySelectorAll("h2");
const headerArray = [...headerElements];

headerArray.forEach((element) => {
  console.log("Category:", element.textContent);
  console.log("Elements:", element.nextElementSibling.childElementCount);
});
