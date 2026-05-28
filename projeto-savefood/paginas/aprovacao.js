document.addEventListener('DOMContentLoaded', function() {
    
    // 1. CONFIGURAÇÃO DA SETA DE VOLTAR (Link Direto)
    const btnVoltar = document.getElementById('btn-voltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'perfildousuario.html'; // Garante o destino correto
        });
    }
});

// 2. LOGICA DE TOMADA DE DECISÃO COM ALERTAS MODERNOS
function decidir(status) {
    const card = document.getElementById('card-estabelecimento');
    
    if (status === 'aprovado') {
        Swal.fire({
            title: 'Aprovado!',
            text: 'O estabelecimento foi ativado no sistema.',
            icon: 'success',
            confirmButtonColor: '#2ecc71'
        }).then(() => {
            if (card) {
                card.style.opacity = '0.4';
                card.style.pointerEvents = 'none';
            }
        });
    } else if (status === 'rejeitado') {
        Swal.fire({
            title: 'Rejeitado',
            text: 'A solicitação deste local foi arquivada.',
            icon: 'error',
            confirmButtonColor: '#e74c3c'
        }).then(() => {
            if (card) {
                card.style.opacity = '0.4';
                card.style.pointerEvents = 'none';
            }
        });
    }
}