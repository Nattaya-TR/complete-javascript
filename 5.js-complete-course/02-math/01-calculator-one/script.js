/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let num1=document.getElementById('op-one').value;
    let num2=document.getElementById('op-two').value;

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        num1 = document.getElementById('op-one').value;
        num2 = document.getElementById('op-two').value;
        alert(parseInt(num1) + parseInt(num2));
    })

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        num1 = document.getElementById('op-one').value;
        num2 = document.getElementById('op-two').value;
        alert(parseInt(num1) - parseInt(num2));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        num1 = document.getElementById('op-one').value;
        num2 = document.getElementById('op-two').value;
        alert(parseInt(num1) * parseInt(num2));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        num1 = document.getElementById('op-one').value;
        num2 = document.getElementById('op-two').value;
        alert(parseInt(num1) / parseInt(num2));
    });
})();