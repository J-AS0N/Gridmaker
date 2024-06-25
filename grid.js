let colorSelected;

function addRow () {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);
    } else {
        let numCols = rows[0].childElementCount;
        let row = document.createElement("tr");

        for(let i = 0; i < numCols; i++) {
            let col = document.createElement("td");
            col.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function addCol() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");

        col.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);
    } else {
        for (let i = 0; i < rows.length; i++) {
            let col = document.createElement("td");
            col.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
            rows[i].appendChild(col);
        }
    }
}

function removeRow() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        alert("There is nothing to delete!");
        return;
    }

    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
}

function removeCol() {
    let rows = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");

    if (rows.length === 0) {
        alert ("There is nothing to delete!");
        return;
    }

    if (rows[0].childElementCount === 1) {
        grid.innerHTML = "";
        return;
    }

    for (let i = 0; i < rows.length; i++) {
        let col = rows[i].lastElementChild;
        rows[i].removeChild(col);
    }
}

function selected() {
    colorSelected = document.getElementById("selectedID").value;

    // if (colorSelected === "Red") {
    //     colorSelected.style.backgroundColor = "red";
    // } else if (colorSelected === "Blue") {
    //     colorSelected.style.backgroundColor = "blue";
    // } else if (colorSelected === "Green") {
    //     colorSelected.style.backgroundColor = "green";
    // } else if (colorSelected === "Yellow") {
    //     colorSelected.style.backgroundColor = "yellow";
    // }
}

function fill() {
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll() {
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
}

function fillU() {
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor == "") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}