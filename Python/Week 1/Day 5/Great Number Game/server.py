from flask import Flask,session,request,redirect,render_template
import random

app= Flask(__name__)
app.secret_key="Secret Key"


counter=0

@app.route("/")
def display():
    return render_template("index.html")



@app.route("/guess", methods=['POST'])
def attempt():
    if session['counter']==5:
        session['rnd']=random.randint(1,10)
        session['correctnum']=session['rnd']
        session['counter']=1
    
    elif int(request.form["myguess"])>session['rnd']:
        session['answer']='Too high!!'
        session['counter']=session['counter']+1
    elif int(request.form["myguess"])<session['rnd']:
        session['answer']='Too low!!'
        session['counter']=session['counter']+1
    else:
        session['answer']='right answer!!'
        session['correctnum']=session['rnd']
        session['rnd']=random.randint(1,10)
        session['correctcounter']=session['counter']
        session['counter']=1

    return redirect("/")

winners=[]
@app.route('/name',methods=["POST"])
def score():
    session['player']=request.form['name']
    session['winners'].append({request.form['name'] : session['correctcounter'] })
    return redirect('/leaderboard')

@app.route('/leaderboard')
def winners():
    return render_template('scores.html')

if __name__ == "__main__":
    app.run(debug=True)
