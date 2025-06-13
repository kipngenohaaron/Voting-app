import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    api.get('/polls')
      .then(res => setPolls(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
  <div>
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h2>All Polls</h2>
    <Link className="btn btn-primary" to="/create">➕ Create Poll</Link>
  </div>
  <ul className="list-group">
    {polls.map(poll => (
      <li key={poll.id} className="list-group-item">
        <Link to={`/polls/${poll.id}`}>{poll.question}</Link>
      </li>
    ))}
  </ul>
</div>

  );
}

export default Home;
