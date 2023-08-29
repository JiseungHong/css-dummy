const analyzer = new SentimentIntensityAnalyzer();

function analyzeSentiment() {
    const inputText = prompt('Enter a sentence:');
    const sentimentAnalysisResult = analyzer.polarity_scores(inputText);
    sessionStorage.setItem('sentimentAnalysisResult', JSON.stringify(sentimentAnalysisResult));
}

document.getElementById('viewChartButton').addEventListener('click', function() {
    window.location.href = 'chart.html';
});