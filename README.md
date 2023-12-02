# Youtube-Downloader

A website to download YouTube videos to your PC.

This project is a full stack web application with a Python flask backend and a Vite + React JS frontend.

## Prerequisites

To make sure you can run the backend for this project, make sure you have [python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installation/) installed. Pip typically gets installed along with python. To check if you have pip, open a terminal and run 

```bash
pip --version
```
To check if you have python installed, open a terminal and run
```bash
python --version
```

To make sure you can run the frontend for this project, make sure you have [node](https://nodejs.org/en/download) installed. To install all the dependencies for the frontend, we'll need to use npm. This typically comes with Node, but to check if you have npm, run

```bash
npm -v
```

in the terminal. To check if node is installed already, open a terminal and run

```bash
node -v
```

## How to run locally

To start the process of running the project locally, first clone the repository. Once the repository is cloned, navigate to the root directory. 

### Starting up the Flask Server

First, we'll want to start the Flask server. Open up a terminal at the root directory, and from there, run 
```bash
cd backend
```
to navigate to the backend directory. 

Once in the backend directory, we'll want to setup a python virtual enviornment. Run
```bash
python -m venv venv
```
to create a virtual enviorment named venv. If not on windows, use python3 instead of python. By using a virtual enviornment, we can create a clean enviornment to install dependencies and run the Flask server. 

Now, we'll want to activate the virtual enviornment. To do this we'll have to run the activate script. This process differs depending on the OS.

For windows, run
```bash
venv\Scripts\activate
```
if you named your virtual enviornment something besides, venv, simply switch out <venv> for your specified name. If this does not work for some reason (maybe the path is wrong), you can cd directly into the Script folder and run the activate batch file. 

For UNIX/MacOS run
```
source venv/bin/activate
```
The same tips from above also apply to UNIX/MacOS. 

Presumably, the virtual enviornment has now been activated. Now we'll want to install all the necessary dependencies, so that we can run the Flask server.

The Flask server requires the following dependencies:

1. flask
2. flask-cors
3. pytube

To install the dependencies, run the following commands. 

```bash
pip install flask
```
```bash
pip install flask-cors
```
```bash
pip install pytube
```

Finally, we just need to run the Flask server. To do this, make sure you are in the 'backend' directory, and run the following command
```bash
python app.py
```





