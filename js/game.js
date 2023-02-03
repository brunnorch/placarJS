import { controls } from "./control.js";
import { scoreGoal, cancelGoal } from "./goals.js";
scoreGoal();
cancelGoal();

export const teams = JSON.parse(localStorage.getItem('teams'))
document.querySelector('[data-team1]').innerHTML = teams['team1'];
document.querySelector('[data-team2]').innerHTML = teams['team2'];
document.getElementById('team1').innerHTML = teams['goal1'];
document.getElementById('team2').innerHTML = teams['goal2'];

const options = document.querySelectorAll('[data-options]');
options.forEach((option) => {
    option.addEventListener('click', (e) => {
        const button = e.target.dataset.options;

        if (button === 'start') {
            controls.start();
            document.getElementById('time__color').style.background = '#FFFFFF';
        } else if (button === 'pause') {
            controls.pause();
            document.getElementById('time__color').style.background = '#DC0000';
        } else if (button === 'restart') {
            controls.confirmRestart();
        } else if (button === 'reverse') {
            controls.reverse();
            document.getElementById('time__color').style.background = '#DC0000';
        } else if (button === 'new') {
            controls.newGame();
        }
    })
})

