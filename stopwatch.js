// variables for number values
var min=0;
var sec=0;
var miliseconds=0;
// values for displaying as html
var minString="00";
var secString="00";
var milisecondsString="00";
// out interval
var interval;
function stopWatch() {
    console.log("stopCalled");
    clearInterval(interval);
}

function startWatch() {
    console.log("startWatch");
    // interval for every 10ms
    interval = setInterval(function() {
        // inc sec if ms has reached 100
        miliseconds++;
        if(miliseconds>99){
            miliseconds=0;
            sec++;
        }
        // inc min if sec has reached 60
        if(sec>59){
            min++;
            sec=0;
        }
        if(miliseconds<10){
            milisecondsString="0" + miliseconds;
        }else{
            milisecondsString=miliseconds
        }
        if(sec<10){
            secString="0" + sec;
        }else{
            secString=sec;
        }
        if(min<10){
            minString="0" + min;
        }else{
            minString=min;
        }
        document.getElementById("mins").innerHTML=minString;
        document.getElementById("seconds").innerHTML=secString;
        document.getElementById("milliseconds").innerHTML=milisecondsString;

      }, 10);
}

function resetWatch() {
    console.log("resetWatch");
    clearInterval(interval);
    min=0,sec=0,miliseconds=0;
    document.getElementById("mins").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("milliseconds").innerHTML="00";
}
