/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let div = document.getElementById ("target");
    let myTable = document.createElement("TABLE");

        myTable.setAttribute("id", "myTable");
        div.appendChild(myTable);

    let myCol = document.createElement("td");

        myTable.appendChild(myCol);

         for (let i = 0; i < 10; i++) {
             myCol.appendChild(document.createElement("tr"));
         }

})();