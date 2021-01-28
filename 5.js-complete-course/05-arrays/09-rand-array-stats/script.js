/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // your code here

    document.getElementById("run").addEventListener("click", function () {

            let lucky = [0,0,0,0,0,0,0,0,0,0];


            for (let i = 0; i < lucky.length; i++) {

                let random = Math.floor(Math.random() * 100 + 1);
                lucky[i] = random;

                document.getElementById('n-' + (i+1)).innerText = random;
            }

            document.getElementById("min").innerText = Math.min.apply( null, lucky);
            document.getElementById("max").innerText = Math.max.apply(null, lucky);
            document.getElementById("sum").innerText = lucky.reduce(function(a,b) {return (a + b)},0);
            document.getElementById("average").innerText = lucky.reduce(function (a,b) {return (a + b)},0)/10;

        })
    })();
