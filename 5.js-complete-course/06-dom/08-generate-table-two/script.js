/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let table = document.createElement("table");
        
        document.getElementById("target").appendChild(table);

    for (let a = 0; a < 10; a++) {
        let row = document.createElement("tr");
        table.appendChild(row);

        for (let b = 0; b < 10; b++) {
            let col = document.createElement("td");

            col.innerText=((a+1)*(b+1)).toString();
            
        row.appendChild(col);
}

    }


})();