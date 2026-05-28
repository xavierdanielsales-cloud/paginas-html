const overlay = document.getElementById('overlay');
const modalSort = document.getElementById('modal-sort');
const modalFilter = document.getElementById('modal-filter');

const btnOpenSort = document.getElementById('open-sort');
const btnOpenFilter = document.getElementById('open-filters');
const closeBtns = document.querySelectorAll('.close-btn');

// Abrir Ordenar
btnOpenSort.addEventListener('click', () => {
    overlay.classList.add('active-modal');
    modalSort.classList.add('active-modal');
});

// Abrir Filtros
btnOpenFilter.addEventListener('click', () => {
    overlay.classList.add('active-modal');
    modalFilter.classList.add('active-modal');
});

// Fechar tudo
function closeAll() {
    overlay.classList.remove('active-modal');
    modalSort.classList.remove('active-modal');
    modalFilter.classList.remove('active-modal');
}

overlay.addEventListener('click', closeAll);
closeBtns.forEach(btn => btn.addEventListener('click', closeAll));