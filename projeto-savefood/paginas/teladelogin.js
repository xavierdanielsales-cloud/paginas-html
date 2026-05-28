document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const email = document.querySelector('input[type="email"]').value;
    const senha = document.getElementById('Senha').value;

    if (email && senha) {
        // Aqui você faria a chamada para o seu servidor/banco de dados
        console.log("Tentando logar com:", email);
        alert("Login realizado com sucesso! (Simulação)");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#Senha');
const icon = document.querySelector('#icon');

togglePassword.addEventListener('click', function () {
    // 1. Troca o tipo do input
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // 2. Troca a classe do ícone (o desenho)
    // Se for password, usa o olho aberto (fa-eye). Se for text, usa o cortado (fa-eye-slash).
    if (type === 'text') {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});
