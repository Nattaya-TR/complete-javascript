/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    let performOperation = function(operation) {
        let num1=document.getElementById('op-one').value;
        let num2=document.getElementById('op-two').value;
        switch (operation) {

            case "addition":
                alert (parseInt(num1) + parseInt(num2));
                break;
            case "substraction":

                alert (parseInt(num1) - parseInt(num2));
                break;
            case "multiplication":

                alert (parseInt(num1) * parseInt(num2));
                break;
            case "deviced":

                alert (parseInt(num1) / parseInt(num2));
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
