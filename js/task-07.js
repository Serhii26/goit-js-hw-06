const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


inputEl.addEventListener('input', onTextChandes);
 function onTextChandes (event){
    
    textEl.style.fontSize = event.currentTarget.value + "px";
    console.log(event);
 }
