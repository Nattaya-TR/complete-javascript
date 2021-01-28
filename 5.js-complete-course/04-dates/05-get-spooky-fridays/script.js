/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', function() {

        let counter = '';
        for (let i = 0; i <= 12; i++) {

        let user = new Date(document.getElementById("year").value,i,13);
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let curmonth = month[user.getMonth()];
            if (user.getDay() === 5)counter += curmonth ;
        }
        alert(counter) ;
});
})();