/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let kiss1 = document.querySelector("img").getAttribute('src');
    let kiss2 = document.querySelector("img").getAttribute('data-hover');

    document.querySelector('img').addEventListener("mouseover", function() {
        document.querySelector('img').setAttribute('src', kiss2)
    });

    document.querySelector('img').addEventListener("mouseout", function() {
        document.querySelector('img').setAttribute('src', kiss1)
    });



})();