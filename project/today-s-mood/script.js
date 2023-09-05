// const analyzer = new SentimentIntensityAnalyzer();

// function analyzeSentiment() {
//     const inputText = prompt('Enter a sentence:');
//     const sentimentAnalysisResult = analyzer.polarity_scores(inputText);
//     sessionStorage.setItem('sentimentAnalysisResult', JSON.stringify(sentimentAnalysisResult));
// }

// document.getElementById('viewChartButton').addEventListener('click', function() {
//     window.location.href = 'chart.html';
// });
import SentimentIntensityAnalyzer from './node_modules/vader-sentiment/src/index.js';
const analyzer = new SentimentIntensityAnalyzer()

// var vader = require('./node_modules/vader-sentiment');
// var analyzer = new vader();

document.getElementById('viewChartButton').addEventListener('click', function () {
    // Get the user input from the input field
    const inputText = document.getElementById('userText').value;

    console.log(inputText);

    // Perform sentiment analysis on the input text
    const sentimentAnalysisResult = analyzer.polarity_scores(inputText);
    console.log(sentimentAnalysisResult);

    // Store the sentiment analysis result in session storage
    sessionStorage.setItem('sentimentAnalysisResult', JSON.stringify(sentimentAnalysisResult));
});