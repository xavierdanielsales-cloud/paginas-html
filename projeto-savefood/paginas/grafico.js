document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção dos elementos interativos
    const backButton = document.getElementById('backBtn');
    const detailsButton = document.getElementById('detailsBtn');
    const kpiCards = document.querySelectorAll('.kpi-card');

    // Ação do botão voltar
    backButton.addEventListener('click', () => {
        alert('Voltando para a tela anterior...');
    });

    // Ação do botão "Ver detalhes" (corrigido do erro de digitação 'Uer' da imagem)
    detailsButton.addEventListener('click', () => {
        alert('Carregando detalhes do relatório...');
    });

    // Permite alternar o destaque azul entre os cards ao clicar
    kpiCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove a classe 'active' de todos os cards
            kpiCards.forEach(c => c.classList.remove('active'));
            // Adiciona apenas no card clicado
            card.classList.add('active');
        });
    });
});