// Selecionando os elementos
const capa = document.getElementById('capa-inicial');
const loginForm = document.getElementById('login-form');
const btnComeçar = document.getElementById('btn-começar');

// Evento de clique para mudar de tela
btnComeçar.addEventListener('click', () => {
    capa.classList.add('hidden');    // Esconde a capa
    loginForm.classList.remove('hidden'); // Mostra o login
});
