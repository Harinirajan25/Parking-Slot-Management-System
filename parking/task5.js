let table = document.createElement("table");
document.body.append(table);
let thead = document.createElement("thead");
table.appendChild(thead);
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");
let th6 = document.createElement("th");
thead.appendChild(th1);
thead.appendChild(th2);
thead.appendChild(th3);
thead.appendChild(th4);
thead.appendChild(th5);
thead.appendChild(th6);
th1.textContent = "Sno";
th2.textContent = "Customer name";
th3.textContent = "Bike No";
th4.textContent = "Check in";
th5.textContent = "Check out";
th6.textContent = "Delete";

let tbody = document.createElement("tbody");
table.appendChild(tbody)


let i = 1;
btn.addEventListener("click", () => {
    let btn = document.getElementById("btn");
    let tr = document.createElement("tr");
    let t1 = tr.className = "crt"

    tbody.appendChild(tr);



    let td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.textContent = i++;

    let td2 = document.createElement("td");
    tr.appendChild(td2);
    let ip2 = document.getElementById("un");
    td2.textContent = ip2.value;

    let td3 = document.createElement("td");
    tr.appendChild(td3);
    let ip3 = document.getElementById("bk");
    td3.textContent = ip3.value;

    let td4 = document.createElement("td");
    tr.appendChild(td4);
    let ip4 = document.getElementById("ci");
    td4.textContent = ip4.value;

    let td5 = document.createElement("td");
    tr.appendChild(td5);
    let ip5 = document.getElementById("co");
    td5.textContent = ip5.value;



    let td6 = document.createElement("td");
    let btn1 = document.createElement("button");
    let b1 = btn1.className = "crt"


    btn1.textContent = "delete";
    btn1.style.fontSize = "16px";
    btn1.style.padding = "5px";
    td6.appendChild(btn1);
    tr.appendChild(td6);



    btn1.addEventListener("click", (element) => {
        let row = element.currentTarget.closest("tr");
        if (t1 == b1) {
            row.remove();
            let rows = tbody.querySelectorAll("tr");
            let counter = 1;

            for (let i = 0; i < rows.length; i++) {
                rows[i].cells[0].textContent = counter++;

            }
            counter++;


        }



    });




    ip2.value = "";
    ip3.value = "";
    ip4.value = "";
    ip5.value = "";
}, false);


