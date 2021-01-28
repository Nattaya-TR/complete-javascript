/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', function ()
    {
        let inputyear = document.getElementById('dob-year').value;
        let inputmonth = document.getElementById('dob-month').value;
        let inputday = document.getElementById('dob-day').value;

        let recentyear = new Date().getFullYear();
        let recentmonth = new Date().getMonth();
        let recentday = new Date().getDay();

        let age = recentyear - inputyear;

        if (recentmonth + 1 < inputmonth || (recentmonth + 1 === inputmonth && recentday < inputday))
            age--;

        alert(" You are " + age + " years old.");
    });
})();