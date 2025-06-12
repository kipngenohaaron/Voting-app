# from flask import Flask
# from flask_cors import CORS
# from models import db
# from routes.polls import polls_bp

# app = Flask(__name__)
# CORS(app)

# # Database config (SQLite for dev)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///polls.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)
# app.register_blueprint(polls_bp)

# @app.route("/")
# def home():
#     return "Voting App Backend Running"

# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)
from flask import Flask
from flask_cors import CORS
from models import db
from routes.polls import polls_bp

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///polls.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(polls_bp)

if __name__ == '__main__':
    app.run(debug=True)
