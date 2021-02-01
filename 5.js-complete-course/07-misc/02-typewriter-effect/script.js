/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let text = document.getElementById("target").innerText;
    let i = 0;
    document.getElementById("target").innerText = "";

    function type() {

        if ( i < text.length) {
            document.getElementById("target").innerText += text.charAt(i);
            i++;
            setTimeout(type,Math.floor(Math.random()*1000));

        }
    }
    type();
})();
