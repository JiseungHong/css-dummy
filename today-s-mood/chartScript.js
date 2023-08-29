function displayChart() {
    const sentimentAnalysisResult = JSON.parse(sessionStorage.getItem('sentimentAnalysisResult'));
    
    if (sentimentAnalysisResult) {
        const chartData = [
            { label: 'Negative', value: sentimentAnalysisResult.neg },
            { label: 'Neutral', value: sentimentAnalysisResult.neu },
            { label: 'Positive', value: sentimentAnalysisResult.pos }
        ];

        const ctx = document.getElementById('myChart').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.map(item => item.label),
                datasets: [{
                    label: 'Sentiment Analysis',
                    data: chartData.map(item => item.value),
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
}

window.onload = function() {
    const chartCanvas = document.getElementById('myChart');
    if (chartCanvas) {
        displayChart();
    }
};