document.body.onload = buildPage();

/*var zeitenArray;*/
var completedLaps = 0;

function buildPage(){

    document.getElementById("remove").remove();

    const table = document.createElement("table");
    
    const tableBody = document.createElement("tablebody", id = "tablebody");

    const tableHeadPilot = document.createElement("th", id = "tableHeadPilot", className = "tableHead");
    const tableHeadLastLap = document.createElement("th", id = "tableHeadLastLap" ,className = "tableHead");
    const tableHeadBestLap = document.createElement("th", id = "tableHeadtableHeadBestLap", className = "tableHead");

    const headerRow = document.createElement("tr", id = "headerRow", className = "tableHeadRow");

    headerRow.appendChild(tableHeadPilot);
    headerRow.appendChild(tableHeadLastLap);
    headerRow.appendChild(tableHeadBestLap);

    tableBody.appendChild(headerRow);

    for(var i = 0; i < 6; i++){

        const row = document.createElement("tr", id = "row"+i.toString(), className = "tableRow");

        const cellA = document.createElement("td", id = "driver"+i.toString(), className = "pilotNo");
        const cellB = document.createElement("td", id = "lastTime"+i.toString(), className = "lastTime");
        const cellC = document.createElement("td", id = "bestTime"+i.toString(), className = "bestTime");

        row.appendChild(cellA);
        row.appendChild(cellB);
        row.appendChild(cellC);

        tableBody.appendChild(row);

    }
    
    table.appendChild(tableBody);
    document.body.appendChild(table);

}

//TODO: implement function that prints the best lap time

function fillArray(){

    zeitenArray = [generateTime(), generateTime(), generateTime(), generateTime(), generateTime(), generateTime()];

}

//quick sort fuction for arrays, shall later on be used to sort lap times per race pilot and find the best lap time
function quickSort(originalArr) {
    if (originalArr.length <= 1) {
       return originalArr;
       } else {
             var leftArr = [];              
             var rightArr = [];
             var newArr = [];
             var pivot = originalArr.pop();      //  Take a pivot value
             var length = originalArr.length;
             for (var i = 0; i < length; i++) {
                if (originalArr[i] <= pivot) {    // using pivot value start comparing
                   leftArr.push(originalArr[i]);      
             } else {
                     rightArr.push(originalArr[i]);
           }
         }
       return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // array will be returned untill sorting occurs
    }
 }

//randomly generates a lap time in seconds (between 84.825 and 89.175 seconds)
function generateTime(){

    var time;
    var timeMulti=0;

    while(timeMulti > 1.025 || timeMulti < 0.975){

        timeMulti = Math.random() * 2;

    }
    
    time = timeMulti * 87;

    var time2 = timeConvert(time);
    time2 = time2.toString();

    return time2;

}

//converts the output from generateTime() to a string representation in minutes, seconds, milliseconds
function timeConvert(time){

    var timeMin = time/60;
    var timeMin2 = Math.floor(timeMin);
    
    var TIME = timeMin2;


    while(timeMin > 1){

        timeMin--;

    }
    var timeSec = timeMin * 60;
    var timeSec2 = Math.floor(timeSec);

    var TIME = TIME + ":" + timeSec2;


    while(timeSec > 1){

        timeSec--;

    }
    var timeMiliSec = timeSec * 1000;
    var timeMiliSec2 = Math.floor(timeMiliSec);

    if(timeMiliSec2 < 100){

        timeMiliSec2 = "0" + timeMiliSec2;

    }


    var TIME = TIME + ":" + timeMiliSec2;
    return TIME;
}

//legacy function for testing
/*function averageTime(){

    var timeGlob = 0;

    for(var i=0; i<1000; i++){

        var time = generateTime();
        timeGlob += time;

    }

    var timeAv = timeConvert(timeGlob / 1000);

    document.getElementById("test").innerHTML = timeAv;

}*/