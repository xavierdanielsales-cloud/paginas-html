// Inicializa o mapa focado em uma coordenada central padrão
// Ajuste as coordenadas [-15.7980, -47.9950] para o centro da sua região
const map = L.map('map', {
    zoomControl: false // Oculta os botões padrão de + e - para visual limpo
}).setView([-15.7980, -47.9950], 15);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

// Função para buscar dados do Back-end e plotar no mapa
async function carregarMarcadores() {
    try {
        // Altere para a URL correta do seu servidor em produção, se necessário
        const response = await fetch('http://localhost:3000/api/locais');
        const locais = await response.json();

        locais.forEach(local => {
            // Criação do ícone customizado usando elementos HTML e CSS do arquivo style.css
            const customIcon = L.divIcon({
                className: `custom-marker marker-${local.tipo}`,
                html: `<span class="material-icons">${local.icone}</span>`,
                iconSize: [36, 36],
                iconAnchor: [18, 18]
            });

            // Adiciona o marcador ao mapa com um balão (Popup) contendo o nome do local
            L.marker([local.lat, local.lng], { icon: customIcon })
                .addTo(map)
                .bindPopup(`<b>${local.nome}</b>`);
        });

    } catch (error) {
        console.error("Erro ao carregar os dados do back-end:", error);
    }
}

// Botão para simular centralização na localização atual do usuário
document.getElementById('geo-btn').addEventListener('click', () => {
    map.locate({ setView: true, maxZoom: 16 });
});

map.on('locationfound', (e) => {
    L.circle(e.latlng, e.accuracy).addTo(map);
});

map.on('locationerror', () => {
    alert("Não foi possível acessar sua localização atual.");
});

// Executa a função ao carregar a página
carregarMarcadores();
