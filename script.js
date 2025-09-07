
"use strict";

const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const display = document.querySelector('.number')

let count = 0

decrementBtn.addEventListener('click',()=> {
    count = count - 1
    display.value = count  
    console.log('-1, Count is now:', count);
    
})
incrementBtn.addEventListener('click',()=> {
     count = count + 1
     display.value = count  
    console.log('+1, Count is now:', count);
    
})

// Set initial value
display.value = count
