function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const createEl = document.querySelector('[data-create]');
const boxesContainer = document.querySelector('#boxes');

let size = 30; // Początkowy rozmiar kwadratu

const createBoxes = () => {
  const randomColor = getRandomHexColor();
  const boxEl = document.createElement('div');
  boxEl.style.width = `${size}px`; // Ustawienie szerokości
  boxEl.style.height = `${size}px`; // Ustawienie wysokości
  boxEl.style.backgroundColor = randomColor;

  boxesContainer.appendChild(boxEl); // Dodanie wygenerowanego kwadratu do kontenera
  
  size += 10; // Zwiększenie rozmiaru dla kolejnego kwadratu
};

createEl.addEventListener('click', createBoxes);