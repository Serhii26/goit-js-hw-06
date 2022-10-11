const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', changeColor );
function changeColor (){
  const changeStyleColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changeStyleColor;
  spanEl.textContent = changeStyleColor;
}
 
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}