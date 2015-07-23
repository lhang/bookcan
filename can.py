# -*- coding: utf-8 -*-
import data
import time
import MySQLdb
import json

def check_data(can_data):
	print 'check data not complete'
	return True

def save_can(user_name, can_data):
	now_time = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
	sql_db = data.get_db()
	cursor = sql_db.cursor()
	# can_data['books'] = json.dumps(can_data['books'])
	cursor.execute("INSERT INTO cans\
					(can_intro,can_name,book_list,author_name,\
						create_date,last_modify_date,view_times,tags)\
					VALUE\
					(\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",'0',\"%s\")" \
					%(can_data['intro'],can_data['name'],can_data['books'],user_name,\
						now_time,now_time,can_data['tags']))
	sql_db.commit()
	return True

def get_cans_list(page):
	db = data.get_db()
	cursor = db.cursor(MySQLdb.cursors.DictCursor)
	cursor.execute("SELECT can_id, can_intro, can_name, book_list \
					FROM cans")
	cans = cursor.fetchall()
	print cans
	return cans

def get_can_info(can_id):
	db = data.get_db()
	cursor = db.cursor(MySQLdb.cursors.DictCursor)
	cursor.execute("SELECT can_id, can_intro, can_name, book_list, author_name, tags \
					FROM cans \
					WHERE can_id = '%s'" % can_id)
	can_info = cursor.fetchall()
	print can_info
	return can_info