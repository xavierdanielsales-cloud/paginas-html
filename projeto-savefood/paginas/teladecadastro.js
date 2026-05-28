const btnEditar = document.querySelector(".btn-editar");
const inputs = document.querySelectorAll(".form input");

// Iniciar com os campos desativados
let editando = false;
inputs.forEach(input => input.disabled = true);

btnEditar.addEventListener("click", () => {
  editando = !editando;

 
  inputs.forEach(input => {
    input.disabled = !editando;
  });

  if (editando) {
    btnEditar.textContent = "salvar dados";
    btnEditar.style.background = "#3498db"; 
    inputs[0].focus(); 
  } else {
    btnEditar.textContent = "editar dados";
    btnEditar.style.background = "#2ecc71"; 
    alert("Dados salvos com sucesso!");
  }
});

document.querySelector(".excluir").addEventListener("click", () => {
    if(confirm("Tem certeza que deseja excluir sua conta?")) {
        alert("Conta excluída.");
    }
});