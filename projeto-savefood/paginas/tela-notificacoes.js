document.addEventListener('DOMContentLoaded', () => {
    const btnVoltar = document.getElementById('btnVoltar');
    const cards = document.querySelectorAll('.card-notificacao');

    // Função para voltar à página anterior com segurança
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html'; 
            }
        });
    }

    // Lógica para remover o badge vermelho ao clicar (Lida)
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const badge = this.querySelector('.badge');
            if (badge) {
                badge.style.display = 'none'; 
            }
        });
    });
});