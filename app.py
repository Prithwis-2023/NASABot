
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session

app = Flask(__name__)

@app.route('/')

def index():
	return render_template("index.html")

@app.route('/apod')

def apod():
	return render_template("apod.html")

if __name__ == '__main__':
	app.run()
