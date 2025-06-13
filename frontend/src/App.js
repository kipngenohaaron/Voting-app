import React, { useEffect, useState } from "react";

function App() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/polls")
      .then((res) => res.json())
      .then((data) => setPolls(data));
  }, []);

  const vote = async (pollId, optionId) => {
    const response = await fetch(`http://127.0.0.1:5000/api/polls/${pollId}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ option_id: optionId }),
    });
    if (response.ok) {
      alert("Vote recorded!");
      window.location.reload(); // refresh data
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Voting App</h1>
      {polls.length === 0 ? (
        <p>Loading polls...</p>
      ) : (
        polls.map((poll) => (
          <div key={poll.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h2>{poll.question}</h2>
            <ul>
              {poll.options.map((option) => (
                <li key={option.id}>
                  {option.text} - {option.vote_count} votes
                  <button onClick={() => vote(poll.id, option.id)} style={{ marginLeft: "10px" }}>
                    Vote
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
