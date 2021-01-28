/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let valid = document.getElementById("validity");
    let input = document.getElementById("pass-one ");


    input.addEventListener("input", function() {

        if ((input.value.length > 7) || (input.value.match(/[a-z]g/)) || (input.value.match(/[A-Z]/g)))
        {
            valid.innerText = "OK";
        }
    });
})();