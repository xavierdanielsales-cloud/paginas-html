const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulando um banco de dados de locais baseados na imagem
const locais = [
    {
        id: 1,
        nome: "ABC ATACADÃO PAPELARIA",
        lat: -15.8000, // Coordenadas fictícias, ajuste para sua região real se necessário
        lng: -48.0000,
        tipo: "comercio",
        icone: "shopping_bag"
    },
    {
        id: 2,
        nome: "Restaurante DS Re",
        lat: -15.7980,
        lng: -47.9950,
        tipo: "alimentacao",
        icone: "restaurant"
    },
    {
        id: 3,
        nome: "Mercado QBR 8",
        lat: -15.7920,
        lng: -48.0050,
        tipo: "mercado",
        icone: "store"
    }
];

// Rota da API para o Front-end buscar os marcadores
app.get('/api/locais', (req, res) => {
    res.json(locais);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});