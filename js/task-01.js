const ulEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulEl.length}`);
console.log(ulEl);

ulEl.forEach(group => {
    
    
    console.log(`Category: ${group.firstElementChild.textContent}`);
     console.log(`Element: ${group.lastElementChild.children.length}`);
});

    
  