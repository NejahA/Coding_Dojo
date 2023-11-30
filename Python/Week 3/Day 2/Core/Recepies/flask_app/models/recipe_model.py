from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Recipe:
    def __init__(self,data):
        self.name=data['name']
        self.description=data['description']
        self.instructions=data['instructions']
        self.date_cooked= data['date_cooked']
        self.under = data['under']
        self.user_id=data['user_id']


    @staticmethod
    def validate(data):
        is_valid=True   
        if   len(data['name'])<3:
            is_valid=False
            flash('The name must at least be 3 characters long.','recipe')
        if len(data['description'])<3:
            is_valid=False
            flash('The description must at least be 3 characters long.','recipe')
        if len(data['instructions'])<3:
            is_valid=False
            flash('The instructions must at least be 3 characters long.','recipe')
        if  data['under'] == "noval" :
            is_valid=False
            flash('Is your recipe under 30 minutes ?','recipe')
        # ! elif data['date_cooked']  GET BACK TO THEEEEEEEEESE
        # if data['']
        if data['date_cooked']== "" :
            is_valid=False
            flash('Date is required.','recipe')
        return is_valid

    @classmethod
    def get_all(cls):
        query= '''
                select * from recipes
                join users on recipes.user_id= users.id;
                '''
        return connectToMySQL(DATABASE).query_db(query)
    
    @classmethod
    def get_one(cls,data):
        query= '''
                select * from recipes
                join users 
                on users.id=recipes.user_id
                where recipes.id = %(id)s;
                '''
        return connectToMySQL(DATABASE).query_db(query,data)[0]
    
    
    @classmethod
    def create(cls,data):
    
            query= '''
            
                insert into recipes (name,description,instructions,date_cooked,under,user_id)

                values (%(name)s,%(description)s,%(instructions)s,%(date_cooked)s,%(under)s,%(user_id)s);
                '''
            connectToMySQL(DATABASE).query_db(query, data)


    
    @classmethod
    def  delete(cls,data):
        query ='''
                delete from recipes
                where id = %(id)s;
                '''
        connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def edit(cls,data):
        query = ''' 
                update recipes
                set name =  %(name)s,
                description   = %(description)s,
                instructions  = %(instructions)s,
                date_cooked  = %(date_cooked)s,
                under  = %(under)s
                where id=%(id)s;
                '''

        return connectToMySQL(DATABASE).query_db(query,data)

