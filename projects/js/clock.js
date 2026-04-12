const digitalClock = document.getElementById("digitalClock");

setInterval(() => {
    let today = new Date();
    digitalClock.textContent = today.toLocaleString();    
}, 500);

const textElapsedTime = document.getElementById('elapsedTime');

let timerId = 0;
let timerState = 0;

function runTimer(startTime, elapsedTime) {
    timerId = setInterval(() => {
        let duration =  Date.now() - startTime + elapsedTime;
        let hours = Math.floor(duration / (60 * 60 * 1000));
        let mins = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
        let secs = Math.floor(((duration % (60 * 60 * 1000)) % (60 * 1000)) / 1000);

        textElapsedTime.textContent = hours.toString().padStart(2,'0') + ':' + mins.toString().padStart(2,'0') + ':' + secs.toString().padStart(2,'0');
    }, 500);
};

const buttonTimerStart = document.getElementById('timerStart');
buttonTimerStart.addEventListener('click', function(){
    if (timerState == 0) {
        timerState = 1;
        runTimer(Date.now(),0);
        buttonTimerStart.setAttribute('value','Pause');

    } else if (timerState == 1) {
        timerState = 2;
        clearInterval(timerId);
        buttonTimerStart.setAttribute('value','Resume');        

    } else {
        timerState = 1;
        let hours = parseInt(textElapsedTime.textContent.slice(0,2)) * (60 * 60 * 1000);
        let mins = parseInt(textElapsedTime.textContent.slice(3,5)) * (60 * 1000);
        let secs = parseInt(textElapsedTime.textContent.slice(6,8)) * (1000);
        runTimer(Date.now(),hours + mins + secs);
        buttonTimerStart.setAttribute('value','Pause');
    }
});

const buttonTimerReset = document.getElementById('timerReset');
buttonTimerReset.addEventListener('click', function(){
    clearInterval(timerId);
    timerId = 0;
    timerState = 0;
    textElapsedTime.textContent = '00:00:00';
    buttonTimerStart.setAttribute('value','Start');
});