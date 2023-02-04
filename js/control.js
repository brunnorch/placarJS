import { teams } from "./game.js";

let minute = 0;
let second = 0;
let milisecond = 0;
let cron;

/* Setando o temporizador para começar com 10 milisegundos */
function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
    document.getElementById('time__color').style.background = '#FFFFFF';
}

/* Pausar o jogo */
function pause() {
    clearInterval(cron);
    document.getElementById('time__color').style.background = '#DC0000';
}

/* Reiniciando o jogo e zerando o tempo e placar */
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

/* Alert para confirmar a ação de reiniciar o jogo */
function confirmRestart() {
    var reset = confirm("Reiniciar irá zerar o placar e o tempo, confirma?");
    if (reset == true) {
        restart();
    }
}

/* Temporizador */
function timer() {
    if ((milisecond += 10) == 1000) {
        milisecond = 0;
        second++
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    document.getElementById('minutes').innerText = format(minute);
    document.getElementById('seconds').innerText = format(second);
}

/* Formatar os numeros do tempo  */
function format(input) {
    return input > 9 ? input : `0${input}`
}

/* Alternar o lado dos times */
let onlyChange = 0;
function reverse() {
    if (onlyChange == 0) {
        var reverse = confirm('O jogo será pausado!\nApenas uma troca de lados, confirmar?')
        if (reverse == true) {
            pause();

            /* Background vermelho para informar a pausa do tempo */
            document.getElementById('time__color').style.background = '#DC0000';

            /* Mudança de id para trocar os lados dos nomes dos times */
            const nameTeam1 = document.getElementById('nameTeam1');
            const nameTeam2 = document.getElementById('nameTeam2');
            nameTeam1.id = 'nameTeam2';
            nameTeam2.id = 'nameTeam1';
            nameTeam1.innerHTML = teams['team2']
            nameTeam2.innerHTML = teams['team1']

            /* Mudança de id para trocar os lados do saldo de gols */
            const scoreTeam1 = document.getElementById('team1');
            const scoreTeam2 = document.getElementById('team2');
            scoreTeam1.id = 'team2';
            scoreTeam2.id = 'team1';
            scoreTeam1.innerHTML = teams['goal2'];
            scoreTeam2.innerHTML = teams['goal1'];

            /* Mudança do data attribute para trocar os lados dos botões de gol e anular */
            var scoreGoal1 = document.getElementById('btnScoreGoal1');
            var scoreGoal2 = document.getElementById('btnScoreGoal2');
            var cancelGoal1 = document.getElementById('btnCancelGoal1');
            var cancelGoal2 = document.getElementById('btnCancelGoal2');

            scoreGoal1.setAttribute('data-goal', "team2");
            scoreGoal2.setAttribute('data-goal', "team1");

            cancelGoal1.setAttribute('data-cancel', "team2");
            cancelGoal2.setAttribute('data-cancel', "team1");

            /* Contador para chamar a função apenas 1 vez */
            onlyChange += 1;
        }
        /* Esconde o botão para não inverter o placar novamente */
        document.getElementById('hide').style.display = 'none';
    }
}

/* Zerando o localStorage e retornando para a pagina principal */
function newGame() {
    var start = confirm("Tem certeza que deseja iniciar outro jogo?");
    if (start == true) {
        localStorage.clear();
        restart();
        pause();
        window.location.href = '../index.html';
    }
}

/* Exportando as funções */
export const controls = {
    start,
    pause,
    confirmRestart,
    newGame,
    reverse,
}