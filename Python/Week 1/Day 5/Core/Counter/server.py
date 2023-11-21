from flask import Flask,render_template,session,request,redirect

app= Flask(__name__)
app.secret_key="secret key"


visits=0
@app.route("/")
def display():
        
        session["visits"] = session["visits"]+1
        
        return render_template("index.html")

@app.route("/addcounter", methods=["POST"])
def add():
    print("This is button")
    
    session["counter"]+= int(request.form["increments"])

    return redirect("/")

@app.route("/reset", methods=["POST"])
def reset():
    session["visits"]=0
    session["counter"]=0
    return redirect("/")
    


if __name__ =="__main__":
    app.run(debug=True)

