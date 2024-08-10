import time
from flask import Flask, jsonify

print("The backend container says: Hello World!")

jsonResponse = { "status": 200, "data": "This is some real Data from the backend!", "timestamp": time.time()}

app = Flask(__name__)
@app.route("/")
def hello_world():
    return "Hello, World! This is the core Server of the application. There usually should not be a GUI but only functional calls for data"

@app.route("/data")
def get_data():
    return jsonResponse
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)