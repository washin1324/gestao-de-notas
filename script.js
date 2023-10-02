const addForm = document.getElementById("add-form");
const nomeInput = document.getElementById("nome");
const disciplinaInput = document.getElementById("disciplina");
const notaInput = document.getElementById("nota");
const notasList = document.getElementById("notas-list");
const searchInput = document.getElementById("search");

let notas = [];

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = nomeInput.value;
    const disciplina = disciplinaInput.value;
    const nota = parseFloat(notaInput.value);

    if (nome && disciplina && !isNaN(nota)) {
        const notaObj = { nome, disciplina, nota };
        notas.push(notaObj);
        nomeInput.value = "";
        disciplinaInput.value = "";
        notaInput.value = "";
        updateNotasList();
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

searchInput.addEventListener("input", () => {
    updateNotasList();
});

function updateNotasList() {
    const searchTerm = searchInput.value.toLowerCase();
    notasList.innerHTML = "";

    notas.forEach((nota, index) => {
        if (nota.nome.toLowerCase().includes(searchTerm)) {
            const li = document.createElement("li");
            li.textContent = `Aluno: ${nota.nome}, Disciplina: ${nota.disciplina}, Nota: ${nota.nota}`;
            notasList.appendChild(li);
        }
    });
}

