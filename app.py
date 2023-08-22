from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('today-s-mood.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    user_input = int(data['userInput'])

    # Prepare chart data
    chart_data = {
        'Item 1': user_input+1,
        'Item 2': user_input+2,
        'Item 3': user_input+3,
        'Item 4': user_input+4,
        'Item 5': user_input+5
    }
    
    return jsonify({'chartData': chart_data})

if __name__ == '__main__':
    app.run(debug=True)
11