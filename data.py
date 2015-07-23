# -*- coding: utf-8 -*-
from flask import Flask, g
from MySQLdb import connect

app = Flask(__name__)

def connect_db():
	mysql_db = connect(host='127.0.0.1',db='bookcan', user='root', passwd='lihang')
	mysql_db.set_character_set('utf8')
	return mysql_db

def get_db():
	if not hasattr(g, 'mysql_db'):
		g.mysql_db = connect_db()
	return g.mysql_db

@app.teardown_appcontext
def close_db():
	if hasattr(g, 'mysql_db'):
		g.mysql_db.close()

