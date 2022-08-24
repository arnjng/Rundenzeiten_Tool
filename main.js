document.body.onload = fillTable;

function generateTime(){

    var time;
    var timeMulti=0;

    while(timeMulti > 1.025 || timeMulti < 0.975){

        timeMulti = Math.random() * 2;

    }
    
    time = timeMulti * 87;

    time2 = timeConvert(time);

    return time2;

}

function fillTable(){

    for(var i=0; i<6; i++){

        const row = document.createElement("tr");
        row.appendChild(document.createTextNode(generateTime()));

        document.getElementById("times").appendChild(row);

    }

}

function timeConvert(time){

    var timeMin = time/60;
    timeMin2 = Math.floor(timeMin);
    
    var TIME = timeMin2;


    while(timeMin > 1){

        timeMin--;

    }
    var timeSec = timeMin * 60;
    timeSec2 = Math.floor(timeSec);

    var TIME = TIME + ":" + timeSec2;


    while(timeSec > 1){

        timeSec--;

    }
    var timeMiliSec = timeSec * 1000;
    timeMiliSec2 = Math.floor(timeMiliSec);

    if(timeMiliSec2 < 100){

        timeMiliSec2 = "0" + timeMiliSec2;

    }


    var TIME = TIME + ":" + timeMiliSec2;
    return TIME;
}

function averageTime(){

    var timeGlob = 0;

    for(var i=0; i<1000; i++){

        var time = generateTime();
        timeGlob += time;

    }

    var timeAv = timeConvert(timeGlob / 1000);

    document.getElementById("test").innerHTML = timeAv;

}