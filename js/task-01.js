const ulEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulEl.length}`);

ulEl.forEach(group => {
    
    const allGroupEl = [...group.children];
   allGroupEl.forEach(element =>{
    if(element.tagName === 'H2')
    {console.log(`Category: ${element.textContent}`);}

    
   })
   allGroupEl.forEach(element => {
    if (element.tagName === "UL"){
        console.log(`Element: ${element.children.length}`);
    }
   })
})