const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const newArrey = [];
// for (let i = 0; i < ingredients.length; i +=1) {
//   const element = ingredients[i];
  
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredients[i];
//   newArrey.push(itemEl);
  
// }
//  ulEl.append(...newArrey);
//  console.log(ulEl);

 const ulEl = document.querySelector('Ul');

 const newArrey = [];

const elementIngredient = ingredients.map((ingredient) => {
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  newArrey.push(itemEl);
  
  // console.log(itemEl);

})
ulEl.append(...newArrey);

