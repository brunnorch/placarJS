import { teams } from "./game.js";

/* Função para marcar o gol atraves do valor da data attribute e atualizando o saldo no localStorage*/
const btnGoal = document.querySelectorAll('[data-goal]');
export function scoreGoal() {
    btnGoal.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const btnGoal = e.target.dataset.goal;

            if (btnGoal === 'team1') {
                teams['goal1']++;
                localStorage.setItem("teams", JSON.stringify(teams))
                document.getElementById('team1').innerHTML = teams['goal1'];
            }
            if (btnGoal === 'team2') {
                teams['goal2']++;
                localStorage.setItem("teams", JSON.stringify(teams))
                document.getElementById('team2').innerHTML = teams['goal2'];
            }
        })
    })
}

/* Função para anular o gol atraves do valor da data attribute e atualizando o saldo no localStorage */
const btnCancel = document.querySelectorAll('[data-cancel]');
export function cancelGoal() {
    btnCancel.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const btnCancel = e.target.dataset.cancel;

            if (btnCancel === 'team1' && teams['goal1'] > 0) {
                teams['goal1']--;
                localStorage.setItem("teams", JSON.stringify(teams))
                const teste = document.getElementById('team1').innerHTML = teams['goal1'];
            }
            if (btnCancel === 'team2' && teams['goal2'] > 0) {
                teams['goal2']--;
                localStorage.setItem("teams", JSON.stringify(teams))
                document.getElementById('team2').innerHTML = teams['goal2'];
            }
        })
    })
}