document.addEventListener('DOMContentLoaded', () => {
    const inputCodigo = document.getElementById('codigo');
    const form = document.querySelector('form');
    const linkReenviar = document.querySelector('a[href=""]'); // Seleciona o link de reenviar

    // 1. Impede que o usuário digite letras (aceita apenas números)
    inputCodigo.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    });

    // 2. Lógica de Envio do Formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const codigoValor = inputCodigo.value;

        if (codigoValor.length === 6) {
            alert(`Código ${codigoValor} enviado com sucesso!`);
            // Aqui você faria a chamada para o seu servidor (Fetch API)
            // window.location.href = "proxima_pagina.html"; 
        } else {
            alert('Por favor, insira os 6 dígitos do código.');
        }
    });

    // 3. Lógica do Reenviar Código (com temporizador simples)
    linkReenviar.addEventListener('click', (e) => {
        e.preventDefault();
        
        alert('Um novo código foi enviado para o seu e-mail!');
        
        // Exemplo de desabilitar o link por 30 segundos
        linkReenviar.style.pointerEvents = 'none';
        linkReenviar.style.color = 'gray';
        linkReenviar.innerText = 'Aguarde para reenviar...';

        setTimeout(() => {
            linkReenviar.style.pointerEvents = 'auto';
            linkReenviar.style.color = 'darkblue';
            linkReenviar.innerText = 'Reenviar código';
        }, 30000); // 30 segundos
    });
});