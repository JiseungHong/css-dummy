function performOperation() {
    const userInput = document.getElementById("userInput").value;

    // Send user input to Python server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/calculate", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("result").textContent = `Result: ${response.result}`;

            // Update the chart with the dictionary data
            updateChart(response.data);
        }
    };
    xhr.send(JSON.stringify({ userInput }));
}


function updateChart(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: keys,
            datasets: [{
                label: "Values",
                data: values,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
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
