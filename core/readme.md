# Core Description

This will be the backend including scripts / software / algorithms for communication logic, API Calls and other functional features. --> This is currently its own python container 

Setting up a venv with the provided requiremnts.txt will give you all packages / framework you need.

Currently including:

- Flask
- Pylint
- Python 3.12


## Core Development Setup

In the ./core/ directory
create a local virtual environment with:

"python -m venv .venv"

and go into / use the environment with:

"source venv/Scripts/activate"

Now all your packages are isolated in the local venv without touching your OS.
Install the required packages with:

"pip install -r requirements.txt"

You can now run the python source codes.

## Linting

Your venv should include Pylint.
To lint your python code run:

"pylint src/main.py"

It should take over the preset rules of .pylintrc of this directory
Fix all linter warnings for "clean code" and consistency.

