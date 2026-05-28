let usuarioIdAtual = null;

window.onload = function() {
    // Captura as informações salvas temporariamente na sessão
    usuarioIdAtual = sessionStorage.getItem('usuario_atual_id');
    const listaDb = sessionStorage.getItem('lista_usuarios');

    if (usuarioIdAtual && listaDb) {
        const usuarios = JSON.parse(listaDb);
        const usuario = usuarios.find(u => u.id == usuarioIdAtual);

        // Se achar o usuário correspondente, renderiza as informações dele nas tags
        if (usuario) {
            document.getElementById('perfilNome').innerText = usuario.nome;
            document.getElementById('perfilTipo').innerText = usuario.tipo;
            document.getElementById('perfilData').innerText = usuario.data;
            document.getElementById('perfilIniciais').innerText = usuario.iniciais;

            const fotoCirculo = document.getElementById('perfilIniciais');
            const textoTipo = document.getElementById('perfilTipo');

            fotoCirculo.style.backgroundColor = usuario.cor;
            textoTipo.style.color = usuario.cor;
        }
    }
};

function confirmarExclusao() {
    const listaDb = sessionStorage.getItem('lista_usuarios');
    if (!listaDb || !usuarioIdAtual) return;

    let usuarios = JSON.parse(listaDb);
    const usuario = usuarios.find(u => u.id == usuarioIdAtual);
    const nomeUsuario = usuario ? usuario.nome : "este usuário";

    if (confirm(`Tem certeza que deseja excluir ${nomeUsuario} permanentemente?`)) {
        // Filtra removendo o id atual da lista temporária
        usuarios = usuarios.filter(u => u.id != usuarioIdAtual);
        
        // Grava a lista atualizada com um usuário a menos de volta na sessão
        sessionStorage.setItem('lista_usuarios', JSON.stringify(usuarios));

        alert("Usuário excluído com sucesso!");
        window.location.href = "usuarios.html";
    }
}