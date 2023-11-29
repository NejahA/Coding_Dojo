from flask_app import app
from ..models.dojo_model import Dojo
from flask import Flask,redirect,render_template,request

@app.route("/dojos")
def display_dojos():
    alldojos=Dojo.get_all_users()
    return render_template("dojos.html",dojos=alldojos)

@app.route('/newdojo', methods=['post'])
def add_dojo():
    fixed_data={
        "name":request.form['newname']
    }
    Dojo.create_dojo(fixed_data)
    return redirect('/dojos')

@app.route('/dojos/<int:dojo_id>')
def display_ninjas_by_dojo(dojo_id):
    fixed_id={
        "dojo_id": dojo_id
    }
    ninjas=Dojo.get_ninjas_by_dojo(fixed_id)
    return render_template ("show_dojo.html",ninjas=ninjas)