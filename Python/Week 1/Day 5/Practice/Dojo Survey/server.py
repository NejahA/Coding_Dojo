from flask import Flask,render_template,session,request,redirect

app = Flask(__name__)
app.secret_key="key"
@app.route("/")
def display():
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def survey():
    session["dict"]={}
    session["dict"]["firstname"]    =request.form['firstName']
    session["dict"]['lastname']     =request.form['lastName']
    session["dict"]['adress']       =request.form['adress']
    session["dict"]['email']        =request.form['email']
    session["dict"]['favLanguage'] =request.form['favLanguage']
    session["dict"]['descrpition'] =request.form['descrpition']
    session['dict']['assignments'] =  request.form.getlist('assignments')    

    return redirect("/result")

@app.route('/result')
def results():
    return render_template('results.html')

if __name__=="__main__":
    app.run(debug=True)
