/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

        let count = document.getElementById("counter");
        let user = document.getElementById("pass-one");


         user.addEventListener("input", function() {

            if (user.value.length > 10) {
                user.value = user.value.slice(0, 10);
            }
             count.innerText = user.value.length+"/10";
        });
})();