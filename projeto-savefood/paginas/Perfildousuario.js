document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. LÓGICA DO NOME DO USUÁRIO (PERMANENTE)
    // ==========================================
    const btnEditarNome = document.querySelector('.fa-pen');
    const displayNome = document.querySelector('.nome h1');

    // CONSERTO AQUI: Sempre que a página abrir, verifica se existe um nome salvo no navegador
    const nomeSalvo = localStorage.getItem('nomeUsuario');
    if (nomeSalvo) {
        displayNome.textContent = `Olá, ${nomeSalvo}`;
    }

    btnEditarNome.addEventListener('click', () => {
        const atual = displayNome.textContent.replace("Olá, ", "");
        const novoNome = prompt("Digite seu novo nome:", atual);
        
        if (novoNome !== null && novoNome.trim() !== "") {
            // Atualiza o texto na tela na hora
            displayNome.textContent = `Olá, ${novoNome}`;
            
            // CONSERTO AQUI: Grava o novo nome no "banco de dados" do navegador
            localStorage.setItem('nomeUsuario', novoNome.trim());
        }
    });

    // ==========================================
    // 2. CONFIRMAÇÃO AO SAIR
    // ==========================================
    const btnSair = document.querySelector('.button');
    if (btnSair) {
        btnSair.addEventListener('click', (e) => {
            if (!confirm("Tem certeza que deseja sair?")) {
                e.preventDefault(); // Cancela o clique se o usuário desistir
            }
        });
    }

    // ==========================================
    // 3. LÓGICA DA FOTO DE PERFIL
    // ==========================================
    const inputFoto = document.getElementById('uploadFoto');
    const fotoPerfil = document.getElementById('fotoPerfil');
    const btnExcluir = document.getElementById('btnExcluirFoto');
    
    // URL de uma imagem de avatar neutra
    const fotoPadrao = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8CBAMAAAAAAwH8/Pzs7Ozw8PDo6Oizs7P5+fnv7+/a2trk5...";

    // Carregar foto do LocalStorage ao abrir a página
    const fotoSalva = localStorage.getItem('fotoUsuario');
    if (fotoSalva) {
        fotoPerfil.src = fotoSalva;
    }

    if (inputFoto && fotoPerfil) {
        inputFoto.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    fotoPerfil.src = event.target.result;
                    localStorage.setItem('fotoUsuario', event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (btnExcluir && fotoPerfil) {
        btnExcluir.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita abrir a escolha de arquivo ao clicar na lixeira
            if (confirm("Deseja mesmo remover sua foto de perfil?")) {
                fotoPerfil.src = fotoPadrao;
                localStorage.removeItem('fotoUsuario');
            }
        });
    }
});