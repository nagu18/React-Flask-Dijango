from flask import Flask,redirect,render_template,g,url_for,request,session
app = Flask(__name__)
app.secret_key="konda"
user_id={
    'konda':'nagu',
}
@app.route('/')
def home():
    if "user" in session:
        user_session = session.get("user")
        return render_template("home.html",user=user_session)
    else:
        return redirect(url_for("login"))
    


@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == "POST":
        user = request.form["username"]
        password = request.form["password"]
        if user in user_id and user_id[user]==password:
            session['user']=user
            return redirect(url_for("home"))
        else:
            return "<h1>Login Fail<h1>"
    return render_template("login.html")












if __name__ == "__main__":
    app.run(debug=True)