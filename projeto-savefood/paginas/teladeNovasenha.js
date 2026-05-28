const form = document.querySelector('.div2');
const senha1 = document.querySelector('#senha1');
const senha2 = document.querySelector('#senha2');
const checkbox = document.querySelector('#verSenha');

// Função para mostrar/esconder senha
checkbox.addEventListener('change', () => {
    const tipo = checkbox.checked ? 'text' : 'password';
    senha1.type = tipo;
    senha2.type = tipo;
});

form.addEventListener('submit', (e) => {
    if (senha1.value !== senha2.value) {
        e.preventDefault(); 
        alert("As senhas não são iguais!");
    } else if (senha1.value.length < 6) {
        e.preventDefault();
        alert("A senha deve ter pelo menos 6 caracteres.");
    } else {
        // SE TUDO ESTIVER CERTO:
        alert("Senha alterada com sucesso!");
        
        // Redireciona o usuário para a tela de login
        window.location.href = "teladeLogin.html"; 
    }
});
