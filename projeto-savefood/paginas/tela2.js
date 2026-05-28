document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const selectPerfil = document.getElementById('perfil');
    const inputSenha = document.getElementById('senha');
    const inputConfirmar = document.getElementById('confirmar-senha');
    const checkbox = document.querySelector('#verSenha');

    // 1. Mostrar/Esconder CPF ou CNPJ
    selectPerfil.addEventListener('change', (e) => {
        const perfil = e.target.value;
        document.getElementById('group-cpf').style.display = (perfil === 'CONSUMIDOR') ? 'block' : 'none';
        document.getElementById('group-cnpj').style.display = (perfil === 'ESTABELECIMENTO') ? 'block' : 'none';
    });

    // 2. Mostrar/Esconder Senha
    checkbox.addEventListener('change', () => {
        const tipo = checkbox.checked ? 'text' : 'password';
        inputSenha.type = tipo;
        inputConfirmar.type = tipo;
    });

    // 3. Envio dos dados para o Back-end
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (inputSenha.value !== inputConfirmar.value) {
            alert("As senhas não coincidem!");
            return;
        }

        // Criamos o objeto com os dados da primeira etapa
        const dadosPessoais = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            senha: inputSenha.value,
            telefone: document.getElementById('telefone').value,
            tipoUsuario: selectPerfil.value
        };

        if (selectPerfil.value === 'CONSUMIDOR') {
            dadosPessoais.cpf = document.getElementById('CPF').value;
        } else {
            dadosPessoais.cnpj = document.getElementById('CNPJ').value;
        }

        // Guardamos temporariamente e vamos para a próxima tela
        localStorage.setItem('temp_cadastro_user', JSON.stringify(dadosPessoais));
        window.location.href = "cadastroEndereco.html";
    });
});