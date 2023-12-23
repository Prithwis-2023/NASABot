
from flask import Flask, flash, redirect, render_template, request, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

@app.route('/library')

def lib():
	return render_template('library.html')

@app.route('/trek')

def trek():
	return render_template('trek.html')

@app.route('/mars-weather')

def mars_weather():
	return render_template('mars_weather.html')

@app.route('/live')

def live():
	return render_template("live_iss.html")

@app.route('/neows')

def neows():
	return render_template("neows.html")

@app.route('/neob')

def neob():
	return render_template("neob.html")

@app.route('/neof')

def neof():
	return render_template("neof.html")

@app.route('/tracker')

def tracker():
	return render_template("tracker.html")

@app.route('/sbdb')

def sbdb():
	return render_template("sbdb.html")

@app.route('/techport')

def techport():
	return render_template("techport.html")

if __name__ == '__main__':
	app.run(debug=True)
