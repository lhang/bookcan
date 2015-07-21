#-*- coding: utf-8 -*-
from flask import Flask, render_template, make_response, g, jsonify
from flask import redirect, request, session, url_for
import data, bookcan, user

app = Flask(__name__)
app.debug = True

#####作为本地服务器测试用
@app.route('/', methods=['GET','POST'])
@app.route('/#', methods=['GET', 'POST'])
def index():
	if request.method == 'GET':
		return make_response(open('static/index.html').read())
	else:
		if 'username' in session:
			return True
		else:
			return False


@app.route('/newCan')
def newCan():
	if 'username' not in session:
		return redirect('/#/login')
	if request.method == 'POST':
		if bookcan.check_data(request.form):
			bookcan.save_can(request.form)
		return ''


@app.route('/login', methods=['GET','POST'])
def login():
	if request.method == 'POST':
		if user.login(request.json['username'], request.json['passwd']):
			session['username'] = request.json['username']
			return jsonify(login='true')
		else:
			return jsonify(login='false')
	if request.method == 'GET':
		if 'username' in session:
			return "[{\"username\":\"%s\"}]"%session['username']
		return "[{\"username\":\"\"}]"


@app.route('/logout')
def logout():
	session.pop('username',None)
	return redirect('/')


@app.route('/regist', methods=['GET','POST'])
def regist():
	pass
	

app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
if __name__ == '__main__':
	app.run(debug=True)