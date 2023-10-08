
from flask import Flask, flash, redirect, render_template, request, session

app = Flask(__name__)

@app.route('/')

def index():
	return render_template("index.html")

@app.route('/apod')

def apod():
	return render_template("apod.html")

@app.route('/earth')

def earth():
	return render_template("earth.html")

@app.route('/mars-rover')

def mars_rover():
	return render_template("mars.html")

@app.route('/exoplanets')

def exoplanets():
	return render_template("exoplanets.html")

@app.route('/epic')

def epic():
	return render_template("epic.html")

@app.route('/neows')

def neows():
	return render_template("neows.html")

@app.route('/neofeed')

def neofeed():
	return render_template("neofeed.html")


if __name__ == '__main__':
	app.run(debug=True)
