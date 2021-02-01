/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let num1 = document.getElementById("part-one");
    let num2 = document.getElementById("part-two");
    let num3 = document.getElementById("part-three");
    let num4 = document.getElementById("part-four");
    let target = document.getElementById("target");

    function showNum () {
        let phone = ["+",num1.innerText, num2.innerText, num3.innerText, num4.innerText];
        target.innerText = phone.join("");

}
    num1.addEventListener("click", function (){

        num1.innerText = String((parseInt(num1.innerText) + 1));
        if (num1.innerText > num1.getAttribute("data-max")){
            num1.innerText = num1.getAttribute("data-min");
        }
        showNum()
        })


    num2.addEventListener("click", function (){
        num2.innerText = String((parseInt(num2.innerText) + 1));
        if (num2.innerText > num2.getAttribute("data-max")){
            num2.innerText = num2.getAttribute("data-min");
        }
        if (num2.innerText < 10) {
            num2.innerText = "0" + num2.innerText ;
        }
        showNum()
    })


    num3.addEventListener("click", function(){
        num3.innerText = String((parseInt(num3.innerText) + 1));
        if (num3.innerText > num3.getAttribute("data-max")){
            num3.innerText = num3.getAttribute("data-min");
        }
        if (num3.innerText < 10) {
            num3.innerText = "0" + num3.innerText ;
        }
        showNum()
    })

    num4.addEventListener("click", function(){
        num4.innerText = String((parseInt(num4.innerText) + 1));
        if (num4.innerText > num4.getAttribute("data-max")){
            num4.innerText = num4.getAttribute("data-min");
        }
        if (num4.innerText < 10) {
            num4.innerText = "0" + num4.innerText ;
        }
        showNum()
    })
})();
