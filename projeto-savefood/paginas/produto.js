document.addEventListener('DOMContentLoaded', function() {
    
    // 1. CONFIGURAÇÃO DA SETA DE VOLTAR (Redirecionamento Direto Sem Bugs)
    const btnVoltar = document.getElementById('conteiner1');
    if(btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'ofertas.html'; // Altere aqui se o nome do arquivo inicial for diferente
        });
    }

    // 2. LÓGICA DE ADICIONAR À RESERVA (Mantida a sua lógica excelente)
    const formReserva = document.getElementById('adicinarProdutoNaReserva');
    
    if(formReserva) {
        formReserva.addEventListener('submit', function (event) {
            event.preventDefault(); 

           const item = {
    id: Date.now(),
    nome: "Nescau 370g",
    preco: 7.00,
    quantidade: 1,
    avaliacao: notaSelecionada, // <-- ADICIONADO: Salva a nota que ele clicou!
    imagem: "https://phygital-files.mercafacil.com/catalogo/uploads/produto/..."
};
let reserva = JSON.parse(localStorage.getItem('reserva')) || [];
reserva.push(item);
localStorage.setItem('reserva', JSON.stringify(reserva));

Swal.fire({
    title: 'Reservado!',
    text: 'O item foi adicionado à sua lista.',
    icon: 'success',
    confirmButtonColor: '#2ECC71'
});
});
}
});
// --- SISTEMA DE AVALIAÇÃO POR ESTRELAS INTERATIVO (COM FUNÇÃO DE APAGAR) ---
const estrelas = document.querySelectorAll('#rating-stars .star-btn');
let notaSelecionada = 0; // Guarda a nota atual (de 0 a 5)

estrelas.forEach((estrela) => {
    // Evento 1: Quando o usuário clica na estrela
    estrela.addEventListener('click', function() {
        const valorClicado = parseInt(this.getAttribute('data-value'));
        
        // SEGREDO PARA APAGAR: Se clicar na mesma nota que já estava selecionada, reseta para 0
        if (notaSelecionada === valorClicado) {
            notaSelecionada = 0; 
        } else {
            notaSelecionada = valorClicado; // Senão, assume a nova nota
        }
        
        atualizarEstrelas(notaSelecionada);
    });

    // Evento 2: Efeito visual ao passar o mouse por cima
    estrela.addEventListener('mouseover', function() {
        const valorHover = parseInt(this.getAttribute('data-value'));
        atualizarEstrelas(valorHover);
    });
});

// Evento 3: Se o mouse sair de cima e o usuário não salvou uma nova nota, volta para a nota original (ou 0)
const containerEstrelas = document.getElementById('rating-stars');
if (containerEstrelas) {
    containerEstrelas.addEventListener('mouseleave', () => {
        atualizarEstrelas(notaSelecionada);
    });
}

// Função que acende (amarelo) ou apaga (cinza) as estrelas na tela
function atualizarEstrelas(nota) {
    estrelas.forEach((estrela) => {
        const valorEstrela = parseInt(estrela.getAttribute('data-value'));
        if (valorEstrela <= nota) {
            estrela.classList.add('active'); // Acende as estrelas menores ou iguais à nota
        } else {
            estrela.classList.remove('active'); // Apaga as estrelas maiores
        }
    });
}