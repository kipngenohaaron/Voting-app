
# 🗳️ Voting App Backend

This is the backend of a simple Voting Application built using **Flask**, **Flask-CORS**, and **SQLAlchemy**. It allows users to create polls, vote on them, and retrieve poll results.

---

## ⚙️ Features

- Create a new poll with a question and multiple options
- Vote on an option in a poll
- Retrieve all polls and their current results
- CORS enabled to allow frontend access
- Lightweight SQLite database for development

---

## 🧰 Tech Stack

- Python 3.x
- Flask
- Flask-CORS
- SQLAlchemy
- SQLite (default development DB)

---

## 📁 Project Structure

```

Voting-app/
│
├── backend/
│   ├── main.py              # Flask app entry point
│   ├── models.py            # SQLAlchemy models
│   ├── routes/
│   │   └── polls.py         # API routes for poll handling
│   ├── polls.db             # SQLite database (auto-generated)
│   └── venv/                # Python virtual environment

````

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Voting-app.git
cd Voting-app/backend
````

### 2. Set Up Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` doesn't exist, create it manually:

```bash
pip install Flask Flask-Cors SQLAlchemy
pip freeze > requirements.txt
```

### 4. Run the App

```bash
python main.py
```

The backend will be available at:
📍 `http://127.0.0.1:5000`

---

## 📬 API Endpoints

### `GET /`

**Test route.**
**Response:**

```json
"Voting App Backend Running"
```

---

### `POST /api/polls`

**Create a new poll.**
**Request JSON:**

```json
{
  "question": "Your favorite programming language?",
  "options": ["Python", "JavaScript", "C++"]
}
```

**Response:**

```json
{
  "id": 1,
  "question": "Your favorite programming language?",
  "options": [
    {"id": 1, "text": "Python", "vote_count": 0},
    {"id": 2, "text": "JavaScript", "vote_count": 0},
    {"id": 3, "text": "C++", "vote_count": 0}
  ]
}
```

---

### `GET /api/polls`

**Get all polls and results.**
**Response:**

```json
[
  {
    "id": 1,
    "question": "Your favorite programming language?",
    "options": [
      {"id": 1, "text": "Python", "vote_count": 0},
      {"id": 2, "text": "JavaScript", "vote_count": 0},
      {"id": 3, "text": "C++", "vote_count": 0}
    ]
  }
]
```

---

### `POST /api/polls/<poll_id>/vote`

**Vote for an option in a poll.**
**Request JSON:**

```json
{
  "option_id": 2
}
```

**Response:**

```json
{
  "message": "Vote recorded"
}
```

---

## 📃 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 👤 Author & Contact

**Kipngenoh Aaron**
📱 0724828197
📧 [kipngenohaaron@gmail.com](mailto:kipngenohaaron@gmail.com)

