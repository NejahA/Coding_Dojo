from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.recipe_model import Recipe
from flask_app.models.user_model import User
from pprint import pprint

@app.route("/recipes")
def home():
    # ! Route Guard
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    recipes=Recipe.get_all()
    # pprint(recipes)
    # print("HERE IS THE RECIPE ================>",recipes)
    return render_template("view_all.html", loggedin_user=loggedin_user , recipes=recipes)

@app.route('/recipes/new')
def new_recipe_display():
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)   
    return render_template('new_recipe.html',loggedin_user=loggedin_user)

@app.route('/processnew', methods=['post'])
def process_new_recipe():
    
    if Recipe.validate(request.form):
        data={
            'name':  request.form['name']
        ,'description':  request.form['description']
        ,'instructions':  request.form['instructions']
        ,'date_cooked':  request.form['date_cooked']
        ,'under':  request.form['under'],
        'user_id': session['user_id']
        }
        # print(data)
        Recipe.create(data)
    return redirect("/recipes")

@app.route('/recipes/edit/<int:id>')
def display_edit(id):
    if "user_id" not in session:
        return redirect("/")
    fixed_id={"id":id}
    recipe= Recipe.get_one(fixed_id)
    # pprint(recipe)
    userdata = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(userdata)
    return render_template ('edit_recipe.html',recipe=recipe,loggedin_user=loggedin_user)

@app.route('/processedit/<int:id>', methods=['post'])
def process_edit(id):
    if Recipe.validate(request.form):
        dataedit={
        
        **request.form,
        'id':id
        }
        # pprint("THIS IS EDIT DATA ======================>")
        # pprint(dataedit)
        Recipe.edit(dataedit)
        return redirect("/recipes")
    

@app.route('/delete/<int:id>')
def delete_recipe(id):
    fixed_id={"id":id}
    Recipe.delete(fixed_id)
    return redirect('/recipes')

@app.route("/recipes/<int:id>")
def display_one_recipe(id):
    if "user_id" not in session:
        return redirect("/")
    fixed_id={"id":id}
    recipe=Recipe.get_one(fixed_id)
    userdata = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(userdata)
    return render_template("show_one.html",recipe=recipe,loggedin_user=loggedin_user)
