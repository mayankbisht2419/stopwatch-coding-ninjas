var hr=0;
var sec=0;
var miliseconds=0;
var hrString="00";
var secString="00";
var milisecondsString="00";
var interval;
function stopWatch() {
    console.log("stopCalled");
    clearInterval(interval);
}

function startWatch() {
    console.log("startWatch");
    interval = setInterval(function() {
        // Calculate the elapsed time since the stopwatch was started.
        miliseconds++;
        if(miliseconds>99){
            miliseconds=0;
            sec++;
        }
        if(sec>59){
            hr++;
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
        if(hr<10){
            hrString="0" + hr;
        }else{
            hrString=hr;
        }
        document.getElementById("Hours").innerHTML=hrString;
        document.getElementById("seconds").innerHTML=secString;
        document.getElementById("milliseconds").innerHTML=milisecondsString;

      }, 10);
}

function resetWatch() {
    console.log("resetWatch");
    clearInterval(interval);
    hr=0,sec=0,miliseconds=0;
    document.getElementById("Hours").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("milliseconds").innerHTML="00";
}

