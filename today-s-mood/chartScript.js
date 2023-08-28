const chartData = [
    { label: 'Negative', value: 0.2 },
    { label: 'Neutral', value: 0.6 },
    { label: 'Positive', value: 0.8 }
];

function displayChart(data) {
    const chartContainer = document.getElementById('chartContainer');

    // Create a chart using Chart.js
    const chart = new Chart(chartContainer, {
        type: 'bar',
        data: {
            labels: data.map(item => item.label),
            datasets: [{
                label: 'Sentiment Analysis',
                data: data.map(item => item.value),
                backgroundColor: ['red', 'grey', 'green']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Display the chart when the page loads
window.onload = function() {
    displayChart(chartData);
};
