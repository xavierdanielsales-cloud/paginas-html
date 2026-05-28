const produtos = [
  {
    id: 1,
    nome: "Leite Italac 1L",
    data: "Dom, 20/05 - 22h50",
    imagem: "https://assets.instabuy.app.br/ib.item.image.large/l-c54acdc6d1da4f50a37252efe847bbd7.jpeg", 
    expirado: false
  },
  {
    id: 2,
    nome: "Nescau 200g",
    data: "Seg, 30/12 - 13h40",
    imagem: "https://acougueamigos.com/cdn/shop/products/acougue-amigos-nescau.jpg?v=1611605066",
    expirado: true
  }
];

function render() {
  const ativosDiv = document.getElementById("ativos");
  const expiradosDiv = document.getElementById("expirados");

  if(!ativosDiv || !expiradosDiv) return;

  ativosDiv.innerHTML = "";
  expiradosDiv.innerHTML = "";

  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-header">${produto.data}</div>
      <div class="card-content">
        <span>${produto.nome}</span>
        <img src="${produto.imagem}" alt="${produto.nome}" />
      </div>
      <div class="actions">
        <button onclick="editar(${produto.id})" >editar </button>
        ${
          produto.expirado
            ? `<button onclick="reativar(${produto.id})" style="background: #2ECC71;">renovar</button>`
            : ""
        }
        <button class="btn-excluir" onclick="excluir(${produto.id})">excluir</button>
      </div>
    `;

    if (produto.expirado) {
      expiradosDiv.appendChild(card);
    } else {
      ativosDiv.appendChild(card);
    }
  });
}

function excluir(id) {
  if(confirm("Deseja realmente excluir este produto?")) {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      produtos.splice(index, 1);
      render();
    }
  }
}

function editar(id) {
  const produto = produtos.find(p => p.id === id);
  const novoNome = prompt("Novo nome:", produto.nome);
  if (novoNome && novoNome.trim() !== "") {
    produto.nome = novoNome;
    render();
  }
}

function reativar(id) {
  const produto = produtos.find(p => p.id === id);
  produto.expirado = false;
  produto.data = "Atualizado agora"; 
  render();
}

render();