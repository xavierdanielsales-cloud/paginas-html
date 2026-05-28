document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONFIGURAÇÃO DO BOTÃO VOLTAR (Forçando ir para o Perfil)
    const btnVoltar = document.querySelector('.retornar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
            e.preventDefault(); // Impede qualquer comportamento estranho
            window.location.href = 'perfildousuario.html'; // Vai direto para a tela de perfil
        });
    }

    // 2. BUSCA AUTOMÁTICA DE CEP (O seu código original limpo)
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('blur', function() {
            let cep = this.value.replace(/\D/g, ''); 

            if (cep !== "") {
                let validacep = /^[0-9]{8}$/; 

                if (validacep.test(cep)) {
                    document.getElementById('rua').value = "...";
                    document.getElementById('bairro').value = "...";
                    document.getElementById('cidade').value = "...";

                    fetch(`https://viacep.com.br/ws/${cep}/json/`)
                        .then(response => response.json())
                        .then(dados => {
                            if (!("erro" in dados)) {
                                document.getElementById('rua').value = dados.logradouro;
                                document.getElementById('bairro').value = dados.bairro;
                                document.getElementById('cidade').value = dados.localidade;
                                document.getElementById('numero').focus(); 
                            } else {
                                limpa_formulario_cep();
                                alert("CEP não encontrado.");
                            }
                        })
                        .catch(() => {
                            limpa_formulario_cep();
                            alert("Erro ao buscar o CEP.");
                        });
                } else {
                    limpa_formulario_cep();
                    alert("Formato de CEP inválido.");
                }
            }
        });
    }
});

function limpa_formulario_cep() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
}