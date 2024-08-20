"""This is a docstring as an example for the main.py file of the core module. It should contain a description of the file and its purpose"""

import time
import flask
import module

print("The backend container says: Hello World!")


app = flask.Flask(__name__)


@app.route("/")
def hello_world():
    """This is the main route of the application. It should not be used for any other purpose than testing the server"""

    return "Hello, World! This is the core Server of the application. There usually should not be a GUI but only functional calls for data"


@app.route("/data")
def get_data():
    """This is a route that returns some data from the backend"""

    json_response = {
        "status": 200,
        "data": "This is some real Data from the backend!",
        "timestamp": time.time(),
    }

    return json_response


if __name__ == "__main__":

    app.run(host="0.0.0.0", port=8080)

module.a_function()
