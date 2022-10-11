const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', onLength);

 function onLength(event) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');

     if (event.currentTarget.value.length === Number(inputEl.dataset.length)){
        inputEl.classList.add('valid');
     } else {
        inputEl.classList.add('invalid');
     }
     
    
 };

    
 