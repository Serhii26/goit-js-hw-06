 const targetDecrementBtn = document.querySelector('[data-action=decrement]');
 const targetIncrementBtn = document.querySelector('[data-action=increment]');

 let counterValue = 0;
 targetDecrementBtn.addEventListener('click', () => {
   counterValue -=1;
   document.getElementById('value').textContent =counterValue;
   
 });
 targetIncrementBtn.addEventListener('click' , () => {
   counterValue +=1;
   document.getElementById('value').textContent =counterValue;
   
 });




