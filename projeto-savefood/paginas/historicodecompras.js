document.addEventListener('DOMContentLoaded', () => {
    // 1. Ação controlada e segura para o Botão Voltar
    const btnVoltar = document.querySelector('.retornar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault();
            // Se houver histórico no navegador, ele volta. Senão, vai para a página inicial padrão.
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = '';
            }
        });
    }

    // 2. Configuração dos botões "Adicionar ao carrinho" (Peça de Novo)
    const botoesAdicionar = document.querySelectorAll('.btn-sacola-cheio');
    
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            // Captura dinamicamente o nome do produto que está dentro do mesmo card
            const card = this.closest('.card-pedido');
            const nomeProduto = card.querySelector('.nome-produto').innerText;
            const quantidade = card.querySelector('.qtd-badge').innerText;

            // Executa a função de adicionar ao carrinho
            adicionarAoCarrinho(nomeProduto, quantidade);
        });
    });
});

/**
 * Função simuladora para adicionar o item ao carrinho de compras
 * @param {string} produto - Nome do produto
 * @param {string|number} qtd - Quantidade do item
 */
function adicionarAoCarrinho(produto, qtd) {
    // Aqui você poderá futuramente conectar com o localStorage ou com a sua API do carrinho
    console.log(`Sucesso: ${qtd}x ${produto} adicionado(s) ao carrinho.`);
    
    // Alerta visual elegante para o utilizador
    alert(`🛒 ${qtd}x "${produto}" foi adicionado ao seu carrinho com sucesso!`);
}