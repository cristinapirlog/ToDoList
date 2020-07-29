
let table = document.getElementById("myTable");


function newTask() {
    let numberOfRows =  document.getElementById("myTable").rows.length;
    let positionValue = document.getElementById("numberOfTask").value;
    if ( positionValue > numberOfRows) {
        alert("This position is too high!")
    } else { let row = table.insertRow(positionValue);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerText = document.getElementById("myInput").value;
            cell2.innerText = document.getElementById("myDate").value;
    }
    
    document.getElementById("myInput").value = "";
    document.getElementById("numberOfTask").value = "";
    
    let counter = myTable.rows.length -1;
    document.getElementById("totalNumberOfTasks").innerHTML = counter;
    
}

function Delete() {
    let numberOfRows =  document.getElementById("myTable").rows.length;
    let delValue = document.getElementById("rowDel").value;

    if(delValue > numberOfRows) {
        alert("This row doesn't exist!")
    }
    document.getElementById("myTable").deleteRow(delValue-1);
    document.getElementById("rowDel").value = " ";


    let counter = myTable.rows.length -1;
    document.getElementById("totalNumberOfTasks").innerHTML = counter;
}
