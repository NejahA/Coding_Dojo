from flask import Flask,session,request,redirect,render_template
from typing import List
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

@app.route('/name',methods=["POST"])
def score():
        
        session['player']=request.form['name']

        # if type(session['winners']) == list:
        #     print('*****************correct type*************')
        #     winner.append(request.form['name'])
        # else:
            # print('***************wrong type**************')
            # session['winners'].append('TEST')
        # else:
        
        
        # print("===========================>", session['winners'])

    # if session["winners"] == undefined:
    #     session['winners']=[]
    # else:
    #     session['player']=request.form['name']
    #     session['winners'].append({request.form['name'] : session['correctcounter'] })
    # print(session["winners"])
        return redirect('/leaderboard')

@app.route('/leaderboard')
def winners():
    session['winners'].append(session['player'])
    print("WINNERS =================>" ,session['winners'])
    return render_template('scores.html')

if __name__ == "__main__":
    app.run(debug=True)
