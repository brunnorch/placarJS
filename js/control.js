let minute = 0;
let second = 0;
let milisecond = 0;
let cron;

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function restart() {
    minute = 0;
    second = 0;
    milisecond = 0;
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
}

function confirmRestart() {
    var reset = confirm("Tem certeza que deseja reiniciar?");
    if (reset == true) {
        restart();
    }
}

function timer() {
    if ((milisecond += 10) == 1000) {
        milisecond = 0;
        second++
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    document.getElementById('minutes').innerText = returnData(minute);
    document.getElementById('seconds').innerText = returnData(second);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}

function newGame() {
    var start = confirm("Tem certeza que deseja iniciar outro jogo?");
    if (start == true) {
        localStorage.clear();
        restart();
        pause();
        window.location.href = '../index.html';
    }
}


export const controls = {
    start,
    pause,
    confirmRestart,
    newGame,
}