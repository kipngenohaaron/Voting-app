from flask import Flask
from flask_cors import CORS
from models import db
from routes.polls import polls_bp

app = Flask(__name__)
CORS(app)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///polls.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database and register blueprint
db.init_app(app)
app.register_blueprint(polls_bp)

@app.route("/")
def home():
    return "Voting App Backend Running"

# This replaces the broken @before_first_request decorator
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
