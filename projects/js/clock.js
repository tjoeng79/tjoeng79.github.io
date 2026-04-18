const clockInfo_p = document.getElementById("clock-info");

setInterval(() => {
    let today = new Date();
    clockInfo_p.textContent = today.toLocaleString();    
}, 500);

const timerInfo_p = document.getElementById('timer-info');

let timerId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime  / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliSeconds = String(miliSeconds).padStart(2,"0");
    
    timerInfo_p.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
}

const timerStart_button = document.getElementById('timer-start');
timerStart_button.addEventListener('click', function(){
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerId = setInterval(updateDisplay, 10);
        isRunning = true;
    }
});

const timerStop_button = document.getElementById('timer-stop');
timerStop_button.addEventListener('click',function(){
    if (isRunning){
        clearInterval(timerId);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
});

const timerReset_button = document.getElementById('timer-reset');
timerReset_button.addEventListener('click', function(){
    clearInterval(timerId);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timerInfo_p.textContent = '00:00:00:00';
});