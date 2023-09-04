// const analyzer = new SentimentIntensityAnalyzer();

// function analyzeSentiment() {
//     const inputText = prompt('Enter a sentence:');
//     const sentimentAnalysisResult = analyzer.polarity_scores(inputText);
//     sessionStorage.setItem('sentimentAnalysisResult', JSON.stringify(sentimentAnalysisResult));
// }

// document.getElementById('viewChartButton').addEventListener('click', function() {
//     window.location.href = 'chart.html';
// });
const vader = require('./node_modules/vader-sentiment');

document.getElementById('viewChartButton').addEventListener('click', function () {
    // Get the user input from the input field
    const inputText = document.getElementById('userText').value;

    // Perform sentiment analysis on the input text
    const sentimentAnalysisResult = vader.SentimentIntensityAnalyzer.polarity_scores(inputText);
    console.log(intensity);

    // Store the sentiment analysis result in session storage
    sessionStorage.setItem('sentimentAnalysisResult', JSON.stringify(sentimentAnalysisResult));
});
