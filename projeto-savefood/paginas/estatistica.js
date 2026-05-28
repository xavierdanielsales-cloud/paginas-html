document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    const backBtn = document.getElementById('backBtn');

    // 1. Animação de entrada das barras (Sobem do chão elegantemente)
    bars.forEach(bar => {
        const realHeight = bar.style.height; // Pega o valor real (ex: 74%)
        bar.style.height = '0%'; // Zera a barra temporariamente
        
        // Delay minúsculo para disparar a transição CSS suave
        setTimeout(() => {
            bar.style.height = realHeight;
        }, 150);

        // 2. Interatividade do Tooltip (Balãozinho flutuante com a percentagem)
        bar.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'chart-tooltip';
            tooltip.innerText = realHeight;
            
            bar.appendChild(tooltip);
        });

        bar.addEventListener('mouseleave', () => {
            const tooltip = bar.querySelector('.chart-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // 3. Ação profissional para o botão voltar
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Se houver histórico de navegação, ele volta certinho. Caso contrário, vai para o index
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "grafico.html";
            }
        });
    }
});