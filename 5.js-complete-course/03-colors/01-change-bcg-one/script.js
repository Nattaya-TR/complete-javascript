/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// your code here
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let yellow = document.querySelector('#yellow');
let blue = document.querySelector('#blue');

red.addEventListener('click', () => {
    document.body.style.background = "red" ;
})

green.addEventListener('click', () => {
    document.body.style.background = "green" ;
})

yellow.addEventListener('click', () => {
    document.body.style.background = "yellow" ;
})

blue.addEventListener('click', () => {
    document.body.style.background = "blue" ;
})