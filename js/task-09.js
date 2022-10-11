const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

 const change = getRandomHexColor();

buttonEl.addEventListener('click', changeColor );
function changeColor (){
  
  bodyEl.style.backgroundColor = change;
  spanEl.textContent = change;
}
 
 
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}