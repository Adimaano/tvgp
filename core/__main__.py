"""This is a docstring as an example for the main.py file of the core module. 
It should contain a description of the file and its purpose"""

import time
import flask
from flask import jsonify
from flask_cors import CORS
from flask_cors import cross_origin
from src import module

app = flask.Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    """This is the main route of the application.
    It should not be used for any other purpose than testing the server"""

    return "Hello, World! This is the core Server of the application. No GUI here."


@app.route("/data")
@cross_origin()
def get_data():
    """This is a route that returns some data from the backend"""

    json_response = {
        "status": 200,
        "text": "This is some real Data from the backend! Hopefully showing on the frontend!",
        "timestamp": time.time(),
    }

    return jsonify(json_response)


if __name__ == "__main__":
    print("The backend container says: Hello World!")

    app.run(host="0.0.0.0", port=8080)

    module.a_function()
