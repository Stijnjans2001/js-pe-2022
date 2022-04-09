const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let oefening2 = () => {
    // Maak hier oefening 2
    let tablerow = document.getElementById('tableRow');
    let tablebody = document.getElementById('tableBody');
    tablerow.innerHTML = "";
    createFirstRow();

    function createFirstRow() {
        for (let i = 0; i < rainbow.length; i++) {
            let tableitem = document.createElement('td');
            tableitem.innerText = rainbow[i]
            tableitem.style.width = (100 / rainbow.length) + '%';
            tableitem.addEventListener("mouseover", function() {
                tableitem.style.backgroundColor = rainbow[i];
                tableitem.style.color = 'white';
                tableitem.style.textAlign = 'center';
            });
            tableitem.addEventListener("mouseout", function() {
                tableitem.style.backgroundColor = 'white';
                tableitem.style.color = 'black';
                tableitem.style.textAlign = 'center';
            });
            tableitem.addEventListener("click", function() {
                let input = 0;
                while (input > 7 || input < 1) {
                    input = prompt(`At which position i add it (1-${rainbow.length})?`);
                }
                let nieuweRij = document.createElement('tr');
                tablebody.append(nieuweRij);
                for (let i = 0; i < rainbow.length; i++) {
                    if (i == input - 1) {
                        let newTableitem = document.createElement('td');
                        newTableitem.innerText = tableitem.innerText;
                        newTableitem.style.backgroundColor = tableitem.innerText;
                        newTableitem.style.color = 'white';
                        newTableitem.style.textAlign = 'center';
                        newTableitem.style.width = (100 / rainbow.length) + "%";
                        nieuweRij.appendChild(newTableitem);
                        newTableitem.addEventListener("click", function() {
                            let input1 = "not valid";
                            while (isValidColor(input1) == false && (input1.lastIndexOf('#') != 0 || input1.length != 7)) {
                                input1 = prompt("Which color would you like to add?");
                            }
                            newTableitem.style.backgroundColor = input1;
                            newTableitem.style.textAlign = 'center';
                            newTableitem.innerText = input1;
                        })
                    } else {
                        let newTableitem = document.createElement('td');
                        newTableitem.style.width = (100 / rainbow.length) + '%';
                        nieuweRij.appendChild(newTableitem);
                        newTableitem.addEventListener("click", function() {
                            let input1 = "not valid";
                            while (isValidColor(input1) == false && (input1.lastIndexOf('#') != 0 || input1.length != 7)) {
                                input1 = prompt("Which color would you like to add?");
                            }
                            newTableitem.style.backgroundColor = input1;
                            newTableitem.style.color = 'white';
                            newTableitem.style.textAlign = 'center';
                            newTableitem.innerText = input1;
                        })
                    }
                }
            });
            tablerow.appendChild(tableitem);
            tablerow.style.textAlign = 'center';
        }

        function isValidColor(strColor) {
            let s = new Option().style;
            s.color = strColor;
            return s.color == strColor.toLowerCase();
        }
    }
}