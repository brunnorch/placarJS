const form = document.querySelector('[data-form]');

/* Criando o localStorage apartir do submit do formulário */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const teams = {
        "team1": e.target.elements["team1"].value,
        "goal1": 0,
        "team2": e.target.elements["team2"].value,
        "goal2": 0,
    }
    localStorage.setItem("teams", JSON.stringify(teams));
    window.location.href = "../page/index.html";
})

