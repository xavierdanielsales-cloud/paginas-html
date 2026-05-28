// Lista base de usuários do sistema
const usuariosIniciais = [
    { id: 1, nome: 'Ana Beatriz Oliveira', tipo: 'Estabelecimento', data: '15/04/2026', iniciais: 'AB', cor: '#2ecc71' },
    { id: 2, nome: 'Carlos Eduardo Silva', tipo: 'Cliente', data: '10/02/2026', iniciais: 'CE', cor: '#3498db' },
    { id: 3, nome: 'Marcos Paulo Souza', tipo: 'Cliente', data: '22/01/2026', iniciais: 'MP', cor: '#3498db' },
    { id: 4, nome: 'Fernanda Rodrigues', tipo: 'Estabelecimento', data: '05/05/2026', iniciais: 'FR', cor: '#2ecc71' },
    { id: 5, nome: 'Ricardo Pereira', tipo: 'Cliente', data: '18/03/2026', iniciais: 'RP', cor: '#3498db' },
    { id: 6, nome: 'Juliana Mendes', tipo: 'Administrador', data: '01/01/2026', iniciais: 'JM', cor: '#9b59b6' },
    { id: 7, nome: 'Thiago Alcântara', tipo: 'Cliente', data: '12/04/2026', iniciais: 'TA', cor: '#3498db' }
];

function carregarUsuarios() {
    if (performance.navigation.type === 1) {
        sessionStorage.removeItem('lista_usuarios');
    }

    let listaDb = sessionStorage.getItem('lista_usuarios');
    
    if (!listaDb) {
        sessionStorage.setItem('lista_usuarios', JSON.stringify(usuariosIniciais));
        listaDb = JSON.stringify(usuariosIniciais);
    }

    const usuarios = JSON.parse(listaDb);
    const container = document.getElementById('listaUsuariosContainer');
    container.innerHTML = ''; 

    usuarios.forEach(user => {
        const itemHtml = `
            <div class="usuario-item" onclick="verDetalhes(${user.id})">
                <div class="user-info">
                    <div class="user-avatar" style="background-color: ${user.cor};">${user.iniciais}</div>
                    <span>${user.nome}</span>
                </div>
                <div class="menu-opcoes"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

function verDetalhes(id) {
    sessionStorage.setItem('usuario_atual_id', id);
    window.location.href = "detalhes-usuario.html";
}

window.onload = carregarUsuarios;