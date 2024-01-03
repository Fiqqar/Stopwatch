window.onload = function() {
    var seconds = 0;
    var tens = 0;
    var text_tens = document.getElementById("tens");
    var text_seconds = document.getElementById("seconds");
    var button_start = document.getElementById("button-start");
    var button_stop = document.getElementById("button-stop");
    var button_reset = document.getElementById("button-reset");
    var interval;
    
    button_start.onclick = function() {
        clearInterval(interval);
        interval = setInterval(start_timer, 10);
    }
    button_stop.onclick = function() {
        clearInterval(interval);
    }
    button_reset.onclick = function() {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        text_seconds.innerHTML = "00";
        text_tens.innerHTML = "00";
    }
    function start_timer() {
        tens = tens + 1;
        text_tens.innerHTML = tens; 
        if (tens >= 99) {
            tens = 0;
            seconds = seconds + 1;
            text_seconds.innerHTML = seconds;
        }
        if (tens <= 9) {
            text_tens.innerHTML = "0" + tens; 
        }
        if (seconds <= 9) {
            text_seconds.innerHTML = "0" + seconds; 
        }
    }
}