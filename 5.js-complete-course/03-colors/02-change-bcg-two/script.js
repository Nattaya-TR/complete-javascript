/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var user = document.querySelector ('input');
    var button = document.querySelector('button');

    button.addEventListener('click', function( event ) {

        var color = user.value;
        document.body.style.background = color;
    });
})();