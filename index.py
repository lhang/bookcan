from flask import Flask, render_template, url_for
app = Flask(__name__)



@app.route('/')
def index(name = None):
	return render_template('index.html', name = name)

# url_for('static', filename = 'index.html')

if __name__ == '__main__':
	app.dubug = True
	app.run()