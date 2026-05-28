// Seleciona o formulário pelo ID
const formulario = document.getElementById('forme');

formulario.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura o valor do input de e-mail
    const emailInput = document.querySelector('.E-mail');
    const emailValor = emailInput.value;

    // Validação simples (o HTML 'required' já ajuda, mas JS reforça)
    if (emailValor) {
        console.log("E-mail enviado para:", emailValor);
        
        // Feedback visual para o usuário
        alert(`Um link de recuperação foi enviado para: ${emailValor}`);
        
        // Aqui você poderia limpar o campo
        emailInput.value = '';
    } else {
        alert("Por favor, preencha o campo de e-mail.");
    }
});