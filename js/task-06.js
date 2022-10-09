const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', onLength);
 function onLength(event) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invald');
    
    if (event.currentTarget.value.length == inputEl.dataset.length) {
          inputEl.classList.add('valid');
    } else   inputEl.classList.add('invalid');
    
 }
    console.log(inputEl);

