# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime

# db = SQLAlchemy()

# class Poll(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     question = db.Column(db.String(255), nullable=False)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     options = db.relationship('Option', backref='poll', cascade="all, delete", lazy=True)

# class Option(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     text = db.Column(db.String(100), nullable=False)
#     votes = db.Column(db.Integer, default=0)
#     poll_id = db.Column(db.Integer, db.ForeignKey('poll.id'), nullable=False)
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Poll(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(255), nullable=False)
    options = db.relationship('Option', backref='poll', lazy=True)

class Option(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)
    vote_count = db.Column(db.Integer, default=0)  # ✅ This line is necessary
    poll_id = db.Column(db.Integer, db.ForeignKey('poll.id'), nullable=False)
