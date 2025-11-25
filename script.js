// Dados simulados (pode ser substituído por fetch de API real)
const dadosSimulados = {
    afetados: '15%',
    doacoes: '2.500',
    pontos: '150',
    grafico: {
        labels: ['2020', '2021', '2022', '2023'],
        data: [12, 14, 16, 15]
    }
};

// Função para alternar abas
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove classes ativas
            tabs.forEach(t => {
                t.classList.remove('active', 'bg-green-500', 'text-white');
                t.classList.add('bg-gray-200');
            });
            contents.forEach(c => c.classList.remove('active'));

            // Adiciona classe ativa
            tab.classList.add('active', 'bg-green-500', 'text-white');
            tab.classList.remove('bg-gray-200');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

// Inicializar gráfico com Chart.js
function initChart() {
    const ctx = document.getElementById('fomeChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosSimulados.grafico.labels,
            datasets: [{
                label: 'Insegurança Alimentar (%)',
                data: dadosSimulados.grafico.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Simulação de doação
function initDoacao() {
    const form = document.getElementById('doacaoForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const quantidade = document.getElementById('doacao').value;
        if (quantidade > 0) {
            alert(`Obrigado! Você doou ${quantidade} kg. Sua ação ajuda a combater a fome.`);
            // Atualiza contador simulado
            const doacoesEl = document.getElementById('doacoes');
            doacoesEl.textContent = (parseInt(doacoesEl.textContent.replace(/\D/g, '')) + parseInt(quantidade)).toLocaleString();
            form.reset();
        } else {
            alert('Por favor, insira uma quantidade válida.');
        }
    });
}

// Botão "Doe Agora" com animação
function initDoeBtn() {
    const btn = document.getElementById('doarBtn');
    btn.addEventListener('click', () => {
        btn.classList.add('animate-pulse');
        setTimeout(() => btn.classList.remove('animate-pulse'), 1000);
        alert('Redirecionando para página de doação... (simulado)');
    });
}

// Inicialização geral
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initChart();
    initDoacao();
    initDoeBtn();
});
