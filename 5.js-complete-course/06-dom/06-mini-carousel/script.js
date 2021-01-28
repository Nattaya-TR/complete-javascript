/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('next').addEventListener('click', next);

    let gallery= [
        "bell.svg",
        "clock.svg",
        "compass.svg",
        "lemon.svg",
        "map.svg",
    ];

    // your code here
     let change = document.querySelector('img');
     let counter = 0;

     function next() {
         counter += 1;
         if (counter > gallery.length -1) {
             counter = 0;
         }
         change.src = gallery[counter];
     }

})();