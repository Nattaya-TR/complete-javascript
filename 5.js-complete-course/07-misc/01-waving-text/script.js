/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target") ;
    let text =  target.innerText;
    target.innerText = "";

    let word = text.split("");

    word.forEach(function (element, i)
        {
            let letter = document.createElement("span");

            letter.innerText = element;

            letter.style.fontSize = Math.ceil((Math.sin((i + 2) * .2) * 15) + 20) + "px";

            target.appendChild(letter);
        })

})();
