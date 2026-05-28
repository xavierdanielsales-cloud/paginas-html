let carrinho = [

    
        {
            id: 1,
            nome: "Leite Italac 1L",
            preco: 4.99,
            qtd: 1,
            imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-b-p0bceQWmg71u7RyRBvFargqxjT0cCp9RkvrDqHql90pg2L08pxWnZe4yX2mXBBpixC1aUhmbcMS2GvHYuSa1aqxNP7zp4azC6fbYx7jTX0vhU6vg2t"
        }, // <-- ATENÇÃO: Esta vírgula é obrigatória para separar os produtos!
        {
            id: 2, // Código único para o Arroz
            nome: "Arroz Brilhante 5kg",
            preco: 13.90, // Use ponto para os centavos
            qtd: 1,
            imagem: "data:image/jpeg;base64,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"
        },
        {
            id: 3,
            nome: "Nescau 350g",
            preco: 10.90,
            qtd: 1,
            imagem: "https://images.tcdn.com.br/img/img_prod/987957/180_achocolatado_em_po_nescau_370g_nestle_1678301_1_c3c2c14a10438effcfa6b671ec81f532.jpg"
    
        }
        
];

const listaEl = document.getElementById("lista-reserva");
const totalEl = document.getElementById("valor-total"); // CORRIGIDO: Agora bate certo com o seu HTML

function renderizar() {
    if (!listaEl) return;
    listaEl.innerHTML = "";

    carrinho.forEach(produto => {
        const itemCard = document.createElement("div");
        
        // Estilos estruturais direto no JavaScript para blindar o layout lado a lado
        itemCard.style.display = "flex";
        itemCard.style.flexDirection = "row";
        itemCard.style.alignItems = "center";
        itemCard.style.justifyContent = "space-between";
        itemCard.style.width = "100%";
        itemCard.style.backgroundColor = "#fdfdfd";
        itemCard.style.border = "1px solid rgba(0,0,0,0.06)";
        itemCard.style.borderRadius = "12px";
        itemCard.style.padding = "12px";
        itemCard.style.marginBottom = "12px";
        itemCard.style.boxSizing = "border-box";

        itemCard.innerHTML = `
            <img src="${produto.imagem}" class="img-produto-reserva" 
                 style="width: 65px !important; height: 65px !important; min-width: 65px !important; min-height: 65px !important; object-fit: contain !important; border-radius: 8px; background: #fff; flex-shrink: 0 !important;">
            
            <div class="info-produto-reserva" 
                 style="flex: 1 !important; display: flex !important; flex-direction: column !important; padding: 0 12px !important; overflow: hidden !important; text-align: left !important;">
                <span class="nome-produto-reserva" style="font-weight: bold; color: #333; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${produto.nome}</span>
                <span class="preco-produto-reserva" style="color: #2ecc71; font-weight: 600; margin-top: 4px;">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <div class="qtd-container" 
                 style="display: flex !important; align-items: center !important; gap: 10px; background-color: #f9f9f9; padding: 4px 8px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.03); flex-shrink: 0 !important;">
                <button class="btn-qtd" onclick="diminuir(${produto.id})" style="background:transparent; border:none; color:#2ecc71; font-weight:bold; cursor:pointer; width:24px; height:24px; display:flex; align-items:center; justify-content:center;">-</button>
                <span class="qtd-num" style="font-weight:bold; color:#333; min-width:16px; text-align:center;">${produto.qtd}</span>
                <button class="btn-qtd" onclick="aumentar(${produto.id})" style="background:transparent; border:none; color:#2ecc71; font-weight:bold; cursor:pointer; width:24px; height:24px; display:flex; align-items:center; justify-content:center;">+</button>
            </div>
        `;

        listaEl.appendChild(itemCard);
    });

    atualizarTotal();
}

function aumentar(id) {
    const produto = carrinho.find(p => p.id === id);
    if (produto) {
        produto.qtd++;
        renderizar();
    }
}

function diminuir(id) {
    const produto = carrinho.find(p => p.id === id);
    if (!produto) return;

    if (produto.qtd > 1) {
        produto.qtd--;
    } else {
        carrinho = carrinho.filter(p => p.id !== id);
    }
    renderizar();
}

function atualizarTotal() {
    if (!totalEl) return;
    let total = carrinho.reduce((acc, p) => acc + (p.preco * p.qtd), 0);
    totalEl.innerText = total.toFixed(2).replace('.', ',');
    localStorage.setItem("totalPedido", total.toFixed(2));
}

// Configuração dos botões inferiores
document.addEventListener("DOMContentLoaded", () => {
    const btnLimpar = document.getElementById("limpar");
    const btnFinalizar = document.getElementById("finalizar");
    const btnVoltar = document.getElementById("voltar");

    if (btnLimpar) {
        btnLimpar.addEventListener("click", () => {
            carrinho = [];
            renderizar();
        });
    }

    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", () => {
            window.location.href = "pagamento.html";
        });
    }
    
    if (btnVoltar) {
        btnVoltar.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "paginainicial.html"; // Altere para a sua página inicial real se necessário
        });
    }

    // Inicializa a primeira renderização
    renderizar();
});











