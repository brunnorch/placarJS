import { controls } from "./control.js";
import { scoreGoal, cancelGoal } from "./goals.js";

/* Chamada das funções de marcar e anular gol */
scoreGoal();
cancelGoal();

/* Chamando o localStorage e armazenando para manipulação de HTML */
export const teams = JSON.parse(localStorage.getItem('teams'));
document.querySelector('[data-team1]').innerHTML = teams['team1'];
document.querySelector('[data-team2]').innerHTML = teams['team2'];
document.getElementById('team1').innerHTML = teams['goal1'];
document.getElementById('team2').innerHTML = teams['goal2'];

/* Pegando todos os botões do menu do placar através do data attribute e passando um forEach para atribuir uma função a cada botão */
const options = document.querySelectorAll('[data-options]');
options.forEach((option) => {
    option.addEventListener('click', (e) => {
        const button = e.target.dataset.options;
        if (button === 'start') {
            controls.start();
        } else if (button === 'pause') {
            controls.pause();
        } else if (button === 'restart') {
            controls.confirmRestart();
        } else if (button === 'reverse') {
            controls.reverse();
        } else if (button === 'new') {
            controls.newGame();
        }
    })
})

