
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
    let delValue = document.getElementById("rowDelete").value;

    if(delValue > numberOfRows) {
        alert("This row doesn't exist!")
    }
    document.getElementById("myTable").deleteRow(delValue-1);
    document.getElementById("rowDelete").value = " ";


    let counter = myTable.rows.length -1;
    document.getElementById("totalNumberOfTasks").innerHTML = counter;
}

let mouseBold = document.getElementById("myTable");

mouseBold.addEventListener('mouseover', function(boldify) {
    boldify.target.style.fontWeight = 'bold';
})

mouseBold.addEventListener('mouseout' , function(boldify) {
    boldify.target.style.fontWeight = 'normal';
}) 

let myTable1 = document.getElementById("myTable");

let enterKey = document.getElementById("taskSearch");
document.getElementById('taskSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    let searchFor = document.getElementById("taskSearch").value;
    let nrOfRows = table.rows.length;
    console.log("Press the enter key");
    console.dir(myTable1);
        for (i=0; i<nrOfRows; i++) {
            let currentTaskName = myTable1.rows[i].innerText;
            if (currentTaskName.includes(searchFor)) {
                myTable1.rows[i].style.display = "block";
                document.getElementById("delete").disabled = true; 
            } else {
                myTable1.rows[i].style.display = "none";
        }
    } 
    }
});