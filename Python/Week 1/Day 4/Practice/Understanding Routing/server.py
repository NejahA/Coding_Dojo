from flask import Flask, render_template

app= Flask(__name__)

@app.route("/")
def hello():
    msg="Hello World!"  
    return render_template("index.html",message=msg,times=1)

@app.route("/dojo")
def dojo():
    msg="Dojo!"
    return render_template("index.html",message=msg,times=1)

@app.route("/say/<name>")
def say(name):
    msg=f"Hi {name}!"
    return render_template("index.html",message=msg,times=1)

@app.route("/repeat/<x>/<msg>")
def repeated(x,msg):
    repeated=msg

    return render_template("index.html",message=repeated,times=x)

if __name__ == "__main__":
    app.run(debug=True)