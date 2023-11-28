from ..config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class User:

    def __init__ (self,data):
        self.id=data['id']
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.email=data['email']
        self.created_at=data['created_at']

    @classmethod
    def create(cls,data):
        query = '''
                insert into users(first_name,last_name,email)
                values (%(first_name)s,%(last_name)s,%(email)s);
                '''
        results= connectToMySQL(DATABASE).query_db(query,data)
        print(results)
        return results
    
    @classmethod
    def read_all(cls):
        query= '''
                select * from users;
                '''
        results= connectToMySQL(DATABASE).query_db(query)
        listofusers=[]
        for dict in results:
            listofusers.append(cls(dict))
        return listofusers


