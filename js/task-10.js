function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestoy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesCharge = document.querySelector('#boxes');

inputEl.addEventListener('input', inputValue);
buttonCreate.addEventListener('click', creteBoxes);

// function inputValue(event){
//   return event.currentTarget.value;
// }

// function creteBoxes(amount){
//    boxesCharge.innerHTML = '';
//   amount = Number(inputEl.value);
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
    
//     box.style.width = String(30 + 10 * i) + 'px';
//     box.style.heigth = String(30 + 10 * i) + 'px';
//     box.style.backgroundColor = getRandomHexColor();
//     boxesCharge.appendChild(box);
//     console.log(boxesCharge);
//   }
 
// }

// const inputNumberRef = document.querySelector('input');
// const createButton = document.querySelector('[data-create]');
// const destroyButton = document.querySelector('[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');
// inputNumberRef.addEventListener('input', getCurrentInputValue);
// createButton.addEventListener('click', createBoxes);
// function getCurrentInputValue(event) {
//   return event.currentTarget.value;
// }
// function createBoxes(amount) {
//   boxesContainer.innerHTML = "";
//   amount = Number(inputNumberRef.value);
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = `${30 + 10 * i}px`;
//     box.style.height = `${30 + 10 * i}px`;
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     box.style.marginTop = '20px';
//     boxesContainer.appendChild(box);
//   }
// }
