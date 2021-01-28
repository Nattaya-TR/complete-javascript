/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here

function agt() {

    var age=prompt('How old are you?');
    var gender=prompt('What is your gender?');
    var town=prompt('Where do you live?');

    var _result=confirm('your age is '+ age +' your gender is '+ gender +' your town is '+ town);

    if (_result==true) {
        alert('Thank you');
    } else {
        agt();
    }
};


