document.addEventListener('DOMContentLoaded', () => {
    // Busca em tempo real
    const inputBusca = document.getElementById('inputBusca');
    if (inputBusca) {
        inputBusca.addEventListener('input', function(e) {
            let termo = e.target.value.toLowerCase();
            let cards = document.querySelectorAll('.card-oferta');
            cards.forEach(card => {
                let nome = card.querySelector('.nome-prod').innerText.toLowerCase();
                card.style.display = nome.includes(termo) ? "flex" : "none";
            });
        });
    }

    // Botão Voltar
    const btnVoltar = document.getElementById('btnVoltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.back();
        });
    }
});

function navegarPara(pagina) {
    window.location.href = pagina;
}

function abrirFiltros() {
    alert("Menu de filtros ativado!");
}