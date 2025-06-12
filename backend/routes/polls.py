from flask import Blueprint, request, jsonify
from models import db, Poll, Option

polls_bp = Blueprint('polls', __name__, url_prefix="/api/polls")

@polls_bp.route("/", methods=["GET"])
def get_polls():
    polls = Poll.query.all()
    result = []
    for poll in polls:
        result.append({
            "id": poll.id,
            "question": poll.question,
            "created_at": poll.created_at,
            "options": [{"id": opt.id, "text": opt.text, "votes": opt.votes} for opt in poll.options]
        })
    return jsonify(result)

@polls_bp.route("/", methods=["POST"])
def create_poll():
    data = request.json
    question = data.get("question")
    options = data.get("options", [])

    if not question or not options:
        return jsonify({"error": "Question and options are required"}), 400

    poll = Poll(question=question)
    db.session.add(poll)
    db.session.flush()  # Get poll ID before committing

    for opt_text in options:
        option = Option(text=opt_text, poll_id=poll.id)
        db.session.add(option)

    db.session.commit()
    return jsonify({"message": "Poll created successfully"}), 201

@polls_bp.route("/<int:poll_id>/vote", methods=["POST"])
def vote_poll(poll_id):
    data = request.json
    option_id = data.get("option_id")

    option = Option.query.filter_by(id=option_id, poll_id=poll_id).first()
    if not option:
        return jsonify({"error": "Invalid option"}), 404

    option.votes += 1
    db.session.commit()
    return jsonify({"message": "Vote recorded"}), 200
