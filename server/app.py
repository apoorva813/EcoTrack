from flask import Flask, request, jsonify
from flask_cors import CORS
from carbon_calc import calculate_footprint

app = Flask(__name__)
CORS(app)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    total, tip = calculate_footprint(data)
    return jsonify({"total": total, "tip": tip})

if __name__ == '__main__':
    app.run(debug=True)
