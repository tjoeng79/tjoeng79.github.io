// *** Clock ***
const clockInfo_p = document.getElementById("clock-info");

setInterval(() => {
    let today = new Date();
    clockInfo_p.textContent = today.toLocaleDateString() + ' - ' + today.toLocaleTimeString();    
}, 500);


// *** Countdown ***
const countdownTarget_input = document.getElementById('countdown-target');
countdownTarget_input.value = new Date().toISOString().split('T')[0] + 'T00:00';

const countdownInfo_p = document.getElementById('countdown-info');

let cdTimerId = null;
let cdTargetTime = 0;
let cdRemainTime = 0;
let cdIsRunning = false;

function cdUpdateDisplay() {
    const currentTime = Date.now();
    cdRemainTime = cdTargetTime - currentTime;

    if (cdRemainTime > 0) {
        let days = Math.floor(cdRemainTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor(cdRemainTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(cdRemainTime % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(cdRemainTime % (1000 * 60) / (1000));

        countdownInfo_p.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    } else {
        countdownInfo_p.textContent = `Time's Up!`;
    }
}

const countdownStart_button = document.getElementById('countdown-start');
countdownStart_button.addEventListener('click', function() {
    if (!cdIsRunning) {
        cdTargetTime = Date.parse(countdownTarget_input.value);
        cdTimerId = setInterval(cdUpdateDisplay, 500);
        cdIsRunning = true;
    }
});

const countdownStop_button = document.getElementById('countdown-stop');
countdownStop_button.addEventListener('click', function() {
    clearInterval(cdTimerId);
    cdTargetTime = 0;
    cdRemainTime = 0;
    cdIsRunning = false;
});


// *** Stopwatch ***
const stopwatchInfo_p = document.getElementById('stopwatch-info');

let swTimerId = null;
let swStartTime = 0;
let swElapsedTime = 0;
let swIsRunning = false;

function swUpdateDisplay() {
    const currentTime = Date.now();
    swElapsedTime = currentTime - swStartTime;

    let hours = Math.floor(swElapsedTime  / (1000 * 60 * 60));
    let minutes = Math.floor(swElapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(swElapsedTime / 1000 % 60);
    let milliseconds = Math.floor(swElapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");
    
    stopwatchInfo_p.innerHTML = `${hours}:${minutes}:${seconds}:<small>${milliseconds}</small>`;
}

const stopwatchStart_button = document.getElementById('stopwatch-start');
stopwatchStart_button.addEventListener('click', function(){
    if (!swIsRunning) {
        swStartTime = Date.now() - swElapsedTime;
        swTimerId = setInterval(swUpdateDisplay, 10);
        swIsRunning = true;
    }
});

const stopwatchStop_button = document.getElementById('stopwatch-stop');
stopwatchStop_button.addEventListener('click',function(){
    if (swIsRunning){
        clearInterval(swTimerId);
        swElapsedTime = Date.now() - swStartTime;
        swIsRunning = false;
    }
});

const stopwatchReset_button = document.getElementById('stopwatch-reset');
stopwatchReset_button.addEventListener('click', function(){
    clearInterval(swTimerId);
    swStartTime = 0;
    swElapsedTime = 0;
    swIsRunning = false;
    stopwatchInfo_p.innerHTML = '00:00:00:<small>00</small>';
});