from flask import Flask, render_template
app=Flask(__name__)

@app.route("/")
def default():
    rows=8
    cols=8
    color1="red"
    color2="black"
    return render_template("index.html",rows=rows,cols=cols,color1=color1,color2=color2)

@app.route("/<x>")
def varRow(x):
    rows=x
    cols=8
    color1="red"
    color2="black"
    return render_template("index.html",rows=rows,cols=cols,color1=color1,color2=color2)


@app.route("/<x>/<y>")
def varSize(x,y):
    rows=x
    cols=y
    color1="red"
    color2="black"
    return render_template("index.html",rows=rows,cols=cols,color1=color1,color2=color2)

@app.route("/<x>/<y>/<color1>/<color2>")
def varAll(x,y,color1,color2):
    rows=x
    cols=y
    cl1= color1
    cl2= color2
    return render_template("index.html",rows=rows,cols=cols,color1=cl1,color2=cl2)


if __name__ == "__main__":
    app.run(debug=True)
