import { teams } from "./game.js";

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
    teams['goal1'] = 0;
    teams['goal2'] = 0;
    localStorage.setItem("teams", JSON.stringify(teams))
    window.location.reload();
}

function confirmRestart() {
    var reset = confirm("Reiniciar irá zerar o placar e o tempo, confirma?");
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

function reverse() {
    var reverse = confirm('O jogo será pausado!\nSó poderá trocar o placar de lado apenas uma vez, continuar?')
    if (reverse == true) {
        pause();
        document.querySelector('[data-team1]').innerHTML = teams['team2'];
        document.querySelector('[data-team2]').innerHTML = teams['team1'];
        document.getElementById('team1').innerHTML = teams['goal2'];
        document.getElementById('team2').innerHTML = teams['goal1'];
    }
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
    reverse,
}