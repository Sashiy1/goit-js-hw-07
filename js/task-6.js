function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input')
const boxes = document.querySelector('#boxes')
const buttons = document.querySelectorAll('button')


console.log(buttons)