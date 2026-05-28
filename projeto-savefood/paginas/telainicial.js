// BANNER AUTOMÁTICO
let index = 0;
const imagens = document.querySelectorAll('.img-banner');

function slider() {
    if(imagens.length > 0) {
        imagens.forEach(img => img.classList.remove('active'));
        index = (index + 1) % imagens.length;
        imagens[index].classList.add('active');
    }
}
setInterval(slider, 4000);

// NOTIFICAÇÃO REAL AO CLICAR EM UMA CATEGORIA
let cont = 1;
const badge = document.getElementById('contador-notificacao');
const botoes = document.querySelectorAll('.cat-item');

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        cont++;
        badge.innerText = cont;
        // Efeito visual de pulso
        badge.style.transform = "scale(1.3)";
        setTimeout(() => badge.style.transform = "scale(1)", 200);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btnVoltar = document.querySelector('.retornar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'paginainicial.html'; // Fallback caso não tenha histórico
            }
        });
    }
});