async function analyzeSentiment() {
    const inputText = document.getElementById('inputText').value;

    // Perform sentiment analysis using Hugging Face model
    const sentimentAnalysisResult = await getSentimentAnalysis(inputText);

    // Prepare data for the chart
    const chartData = [
        { label: 'Negative', value: sentimentAnalysisResult.scores[0] },
        { label: 'Neutral', value: sentimentAnalysisResult.scores[1] },
        { label: 'Positive', value: sentimentAnalysisResult.scores[2] }
    ];

    // Display the chart
    displayChart(chartData);
}

async function getSentimentAnalysis(text) {
    const response = await axios.post(
        'https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest',
        { inputs: text },
        { headers: { 'Authorization': 'Bearer YOUR_API_KEY' } }
    );

    return response.data[0];
}

function displayChart(data) {
    // This function is defined in chartScript.js
}
