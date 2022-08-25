
//initial variable

/*var zeitenArray;*/
var completedLaps = 0;

//provisionally initialize simulation of lap times, will later be moved to a button or sthm
document.body.onload = simulateNewLap;

//simulates a race lap and prints the current/last lap time to the table in the HTML; shall later also move the lap times to an array and call a function to print the current best time
function simulateNewLap(){

    /*if(completedLaps > 0){



    }*/

    //raises lap counter
    completedLaps++;

    //provisionally builds the HTML table, will be organized
    for(var i=0; i<6; i++){

        //TODO: move whole creation of the table to js code

        const row = document.createElement("tr");

        const cellA = document.createElement("td");
        cellA.textContent = (i+1).toString();
        const pilotNo = i+1;
        cellA.id = "pilot"+pilotNo.toString();
        cellA.className = "pilotNumber";

        const cellB = document.createElement("td");
        cellB.appendChild(document.createTextNode(generateTime()));
        cellB.id = "currentLap"+i;
        cellB.className = "currentLap";

        const cellC = document.createElement("td");
        cellC.appendChild(document.createTextNode("N. A."));
        cellC.id = "bestLap"+i;
        cellC.className = "bestLap";

        row.appendChild(cellA);
        row.appendChild(cellB);
        row.appendChild(cellC);

        document.getElementById("tableLapTimes").appendChild(row);

    }

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

/*function averageTime(){

    var timeGlob = 0;

    for(var i=0; i<1000; i++){

        var time = generateTime();
        timeGlob += time;

    }

    var timeAv = timeConvert(timeGlob / 1000);

    document.getElementById("test").innerHTML = timeAv;

}*/