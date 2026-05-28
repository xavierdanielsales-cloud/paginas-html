document.addEventListener("DOMContentLoaded", () => {
    const itensPagamento = document.querySelectorAll(".opcao-item");
    const formPagamento = document.getElementById("form-pagamento");

    // Seleciona os elementos do Pix baseado nas classes do seu HTML
    const blocoQrPix = document.querySelector(".bloco-qr-pix");
    const inputPixCodigo = document.querySelector(".input-copia-cola");
    const btnCopiarPix = document.querySelector(".btn-copiar");

    // =======================================================================
    // PREPARATIVO PARA O BACK-END (INTEGRAÇÃO AUTOMÁTICA COM JAVA)
    // =======================================================================
    const txtEnderecoTitulo = document.getElementById("txt-endereco-titulo");
    const txtEnderecoDetalhes = document.getElementById("txt-endereco-detalhes");

    /* // QUANDO CHAMAR O JAVA, BASTA DESCOMENTAR ESTE BLOCO ABAIXO:
    fetch('/api/usuario/endereco-atual') // Endereço da sua API no Java Controller
        .then(resposta => resposta.json())
        .then(dadosDoBanco => {
            // Substitui os textos fixos da tela pelos dados reais salvos no DB
            txtEnderecoTitulo.innerText = dadosDoBanco.titulo; 
            txtEnderecoDetalhes.innerText = dadosDoBanco.enderecoCompleto;
        })
        .catch(erro => console.error("Erro ao carregar endereço do back-end:", erro));
    */
    // =======================================================================

    // ==========================================
    // SINCRONIZAÇÃO DOS VALORES (SEM ALTERAR O HTML)
    // ==========================================
    const valorSalvo = localStorage.getItem("totalPedido") || "0.00";
    const valorFormatado = parseFloat(valorSalvo).toFixed(2).replace('.', ',');

    const valoresNaTela = document.querySelectorAll(".valor-resumo, .total-destaque span, .total span");
    
    valoresNaTela.forEach(elemento => {
        if (!elemento.classList.contains("frete-gratis") && elemento.innerText.includes("R$")) {
            elemento.innerText = `R$ ${valorFormatado}`;
        }
    });
    // ==========================================

    // ==========================================
    // CONTROLE DE EXIBIÇÃO DINÂMICA DO PIX
    // ==========================================
    function atualizarVisibilidadePix() {
        const radioSelecionado = document.querySelector('input[name=\"metodo_pagamento\"]:checked');
        
        if (blocoQrPix) {
            if (radioSelecionado && radioSelecionado.value === "pix") {
                blocoQrPix.style.display = "block";
                blocoQrPix.style.animation = "fadeIn 0.3s ease-in-out forwards";
            } else {
                blocoQrPix.style.display = "none";
            }
        }
    }

    // Gerencia o clique nos cards simulando componente nativo
    itensPagamento.forEach(item => {
        item.addEventListener("click", () => {
            itensPagamento.forEach(el => el.classList.remove("selecionado"));
            item.classList.add("selecionado");
            
            const radio = item.querySelector('input[type=\"radio\"]');
            if (radio) {
                radio.checked = true;
                atualizarVisibilidadePix(); // Dispara a verificação toda vez que um card for clicado
            }
        });
    });

    // ==========================================
    // LOGICA DO BOTÃO COPIAR CÓDIGO PIX
    // ==========================================
    if (btnCopiarPix && inputPixCodigo) {
        btnCopiarPix.addEventListener("click", () => {
            inputPixCodigo.select();
            inputPixCodigo.setSelectionRange(0, 99999); // Suporte para mobile

            navigator.clipboard.writeText(inputPixCodigo.value)
                .then(() => {
                    btnCopiarPix.innerText = "Copiado!";
                    btnCopiarPix.style.backgroundColor = "#2ecc71";
                    
                    setTimeout(() => {
                        btnCopiarPix.innerText = "Copiar";
                        btnCopiarPix.style.backgroundColor = "#32bcad";
                    }, 2000);
                })
                .catch(err => {
                    console.error("Erro ao copiar: ", err);
                });
        });
    }
    // ==========================================

    // Controla a finalização e envia para sucesso.html
    if (formPagamento) {
        formPagamento.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const selecionado = document.querySelector('input[name=\"metodo_pagamento\"]:checked');
            
            if (!selecionado) {
                alert("Por favor, selecione uma forma de pagamento para continuar.");
                return;
            }

            window.location.href = "sucesso.html";
        });
    }
});