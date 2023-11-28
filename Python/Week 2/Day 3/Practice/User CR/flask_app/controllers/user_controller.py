from flask_app import app
from ..models.Users import User
from flask import Flask 
from flask import redirect, render_template,request


@app.route('/users/new')
def create():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    fixed_data={
                "first_name":request.form['first_name'],
        "last_name": request.form['last_name'],
        "email":request.form['email']
    }
    User.create(fixed_data)
    return redirect('/users')

@app.route("/users")
def display():
    users=User.read_all()

    return render_template('read.html',users=users)
