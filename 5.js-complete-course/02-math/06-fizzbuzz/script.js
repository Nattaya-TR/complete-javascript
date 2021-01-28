/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    for (var i=1; i <= 100; i++)
        console.log((i % 3 ? "" : "Fizz") + (i %  5 ? "" : "Buzz") || i)

})();
