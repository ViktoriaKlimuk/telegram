const transactions = [
    { date: '20:42 2024.06.32', coin: './images/icon.png', sum: 5000, type: 'bonus', status: './images/status.svg' },
    { date: '2', coin: '2', sum: 2, type: '2', status: '2' },
    { date: '3', coin: '3', sum: 3, type: '3', status: '3' },
    { date: '4', coin: '4', sum: 4, type: '4', status: '4' },
    { date: '5', coin: '5', sum: 5, type: '5', status: '5'},
    { date: '6', coin: '6', sum: 6, type: '6', status: '6' },
    { date: '7', coin: '7', sum: 7, type: '7', status: '7' },
    { date: '8', coin: '8', sum: 8, type: '8', status: '8' },
    { date: '9', coin: '9', sum: 9, type: '9', status: '9' },
    { date: '10', coin: '10', sum: 10, type: '10', status: '10' },
    { date: '11', coin: '11', sum: 11, type: '11', status: '11' },
    { date: '12', coin: '12', sum: 12, type: '12', status: '12' },
    { date: '13', coin: '13', sum: 13, type: '13', status: '13' },
    { date: '14', coin: '14', sum: 14, type: '14', status: '14' },
    { date: '15', coin: '15', sum: 15, type: '15', status: '15' },
    { date: '16', coin: '16', sum: 16, type: '16', status: '16' }
];

// надо поменять число переменной rowsPerPage , 
// если хотите увеличить или уменьшить объем транкзаций
const rowsPerPage = 6;
let currentPage = 1;

function renderTable() {
    const tableBody = document.querySelector('#transactionsTable tbody');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    for (let i = start; i < end && i < transactions.length; i++) {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = transactions[i].date;
        row.appendChild(dateCell);

        const coinCell = document.createElement('td');
        const coinImg = document.createElement('img');
        coinImg.src = transactions[i].coin;
        coinCell.appendChild(coinImg);
        row.appendChild(coinCell);

        const sumCell = document.createElement('td');
        sumCell.textContent = transactions[i].sum;
        row.appendChild(sumCell);

        const typeCell = document.createElement('td');
        typeCell.textContent = transactions[i].type;
        row.appendChild(typeCell);

        const statusCell = document.createElement('td');
        const statusImg = document.createElement('img');
        statusImg.src = transactions[i].status;
        statusCell.appendChild(statusImg);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    }
}

function renderPagination() {
    const paginationDots = document.getElementById('paginationDots');
    paginationDots.innerHTML = '';

    const totalPages = Math.ceil(transactions.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('span');
        dot.textContent = '•';
        if (i === currentPage) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentPage = i;
            renderTable();
            renderPagination();
        });
        paginationDots.appendChild(dot);
    }

    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
        renderPagination();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const totalPages = Math.ceil(transactions.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
        renderPagination();
    }
});

renderTable();
renderPagination();


const missions = [
    { name: 'vika', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '2', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '3', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '4', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '5', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '6', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '7', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '8', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '9', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '10', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '11', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '12', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '13', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '14', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '15', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '16', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' },
    { name: '17', missions: './images/icon.png', rewards: 5000, bonus: 'bonus' }
];

const missionsRowsPerPage = 5;
let missionsCurrentPage = 1;

function renderMissionsTable() {
    const tableBody = document.querySelector('#missionsTable tbody');
    tableBody.innerHTML = '';

    const start = (missionsCurrentPage - 1) * missionsRowsPerPage;
    const end = start + missionsRowsPerPage;

    for (let i = start; i < end && i < missions.length; i++) {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = missions[i].name;
        row.appendChild(nameCell);

        const missionsCell = document.createElement('td');
        const missionsImg = document.createElement('img');
        missionsImg.src = missions[i].missions;
        missionsCell.appendChild(missionsImg);
        row.appendChild(missionsCell);

        const rewardsCell = document.createElement('td');
        rewardsCell.textContent = missions[i].rewards;
        row.appendChild(rewardsCell);

        const bonusCell = document.createElement('td');
        bonusCell.textContent = missions[i].bonus;
        row.appendChild(bonusCell);

        tableBody.appendChild(row);
    }
}

function renderMissionsPagination() {
    const paginationDots = document.getElementById('paginationMissionDots');
    paginationDots.innerHTML = '';

    const totalPages = Math.ceil(missions.length / missionsRowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('span');
        dot.textContent = '•';
        if (i === missionsCurrentPage) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            missionsCurrentPage = i;
            renderMissionsTable();
            renderMissionsPagination();
        });
        paginationDots.appendChild(dot);
    }

    document.getElementById('prevMissionPage').disabled = missionsCurrentPage === 1;
    document.getElementById('nextMissionPage').disabled = missionsCurrentPage === totalPages;
}

document.getElementById('prevMissionPage').addEventListener('click', () => {
    if (missionsCurrentPage > 1) {
        missionsCurrentPage--;
        renderMissionsTable();
        renderMissionsPagination();
    }
});

document.getElementById('nextMissionPage').addEventListener('click', () => {
    const totalPages = Math.ceil(missions.length / missionsRowsPerPage);
    if (missionsCurrentPage < totalPages) {
        missionsCurrentPage++;
        renderMissionsTable();
        renderMissionsPagination();
    }
});

// Initial render for both tables
renderTransactionsTable();
renderTransactionsPagination();
renderMissionsTable();
renderMissionsPagination();