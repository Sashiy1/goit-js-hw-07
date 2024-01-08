function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");



createButton.addEventListener("click", () => {
destroyBoxes()
const inputValue = input.value;
createBoxes(inputValue)
input.value = "";
});



destroyButton.addEventListener("click", () => {
  destroyBoxes();
})


function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const boxArray = [];
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
      size += 10;
      const color = getRandomHexColor();
      const newBox = `<div 
      style= "width: ${size}px;
      height: ${size}px; 
      background-color: ${color};">
      </div>`;
      boxArray.push(newBox);
    }
    boxes.innerHTML = boxArray.join();
  }
}

function destroyBoxes() {
  return (boxes.innerHTML = "");
}
