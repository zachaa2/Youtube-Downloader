from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# global cors
# CORS(app) 

@app.route("/members")
@cross_origin(origin="http://localhost:5173")
def members():
    return { "members": ["member1", "member2", "member3"] }

if __name__ == "__main__":
    app.run(host='::', port=5000)
    
 