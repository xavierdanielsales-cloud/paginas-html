document.addEventListener("DOMContentLoaded", () => {
    const btnVoltarHome = document.getElementById("btn-voltar-home");

    if (btnVoltarHome) {
        btnVoltarHome.addEventListener("click", () => {
            // Limpa o valor para o próximo pedido
            localStorage.removeItem("totalPedido");
            // Redireciona para a tela inicial
            window.location.href = "perfildousuario.html"; 
        });
    }
});