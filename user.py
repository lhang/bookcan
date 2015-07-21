import data
def login(username, passwd):
	sql_db = data.get_db()
	sql_db.execute("SELECT passwd FROM account WHERE account_name='%s'"%username)
	passwd_sql = sql_db.fetchone()
	# print passwd == passwd_sql[0]
	if passwd_sql and passwd == passwd_sql[0]:
		return True
	else: 
		return False