import { controls } from "./control.js";

const team1 = document.querySelector('[data-team1]');
const team2 = document.querySelector('[data-team2]');
const teams = JSON.parse(localStorage.getItem('teams'))
team1.innerHTML = teams['team1'];
team2.innerHTML = teams['team2'];

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

        } else if (button === 'new') {
            controls.newGame();
        }

        console.log(button)
    })
})
