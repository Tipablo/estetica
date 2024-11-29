// Adiciona o evento de clique para navegação
document.querySelectorAll('.botao-navegacao').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = button.getAttribute('data-pagina');
    });
});

// Atualiza a porcentagem da votação da enquete
function updatePoll() {
    const totalVotes = 10; // Total de votos (para exemplo)
    const cremeVotes = 3; // Votos de creme
    const batomVotes = 4; // Votos de batom
    const baseVotes = 3; // Votos de base

    document.getElementById('creme-percent').textContent = `${(cremeVotes / totalVotes * 100).toFixed(0)}%`;
    document.getElementById('batom-percent').textContent = `${(batomVotes / totalVotes * 100).toFixed(0)}%`;
    document.getElementById('base-percent').textContent = `${(baseVotes / totalVotes * 100).toFixed(0)}%`;
}