/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate ();
    let year = d.getFullYear () ;
    let hour = d.getHours () ;
    let minute = d.getMinutes () ;

    let today = day[d.getDay ()] + date + month[d.getMonth ()] + year +"," + hour + "h" + minute ;

    document.getElementById("target").innerHTML = today ;
})();