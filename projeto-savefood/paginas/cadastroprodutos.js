document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();
    const btnVoltar = document.getElementById('btnVoltar');

    let nome = document.getElementById("nome").value.trim();
    let categoria = document.getElementById("categoria").value.trim();
    let quantidade = document.getElementById("quantidade").value.trim();
    let validade = document.getElementById("validade").value.trim();
    let preco = document.getElementById("preco").value.trim();
    let erro = document.getElementById("erro");


    alert("Cadastro realizado com sucesso!");
});

// LÓGICA DA FOTO APARECER NA CAIXA
document.getElementById('fileInput').addEventListener('change', function(event) {
    const arquivo = event.target.files[0];
    const preview = document.getElementById('previewFoto');
    const conteudoPadrao = document.querySelector('.upload-conteudo');

    if (arquivo) {
        const leitor = new FileReader();

        leitor.onload = function(e) {
            preview.src = e.target.result; // Define a foto escolhida como origem
            preview.style.display = "block"; // Mostra a imagem
            conteudoPadrao.style.display = "none"; // Esconde o texto e ícone antigos
        };

        leitor.readAsDataURL(arquivo);
    }
});