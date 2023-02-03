export const listTeams = []
const form = document.querySelector('[data-form]');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const teams = {
        "team1": e.target.elements["team1"].value,
        "team2": e.target.elements["team2"].value,
    }
    listTeams.push(teams);
    localStorage.setItem("teams", JSON.stringify(teams));
    window.location.href = '../placar.html'
})

