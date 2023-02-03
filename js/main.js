const form = document.querySelector('[data-form]');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const teams = {
        "team1": e.target.elements["team1"].value,
        "goal1": 0,
        "team2": e.target.elements["team2"].value,
        "goal2": 0,
    }
    localStorage.setItem("teams", JSON.stringify(teams));
    window.location.href = '../js/index.html'
})

