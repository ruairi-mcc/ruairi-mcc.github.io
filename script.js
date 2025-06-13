// Example: Render a simple bar chart in the first project
const ctx = document.getElementById('yieldChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Yield (%)',
            data: [92, 95, 90, 97],
            backgroundColor: '#00bcd4'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

// Example: Render a line chart in the second project
const ctx2 = document.getElementById('maintenanceChart').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Failures Predicted',
            data: [2, 1, 0, 3],
            borderColor: '#0097a7',
            backgroundColor: 'rgba(0,183,195,0.1)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});
