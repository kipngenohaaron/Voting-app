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
      <h2>All Polls</h2>
      <Link to="/create">➕ Create New Poll</Link>
      <ul>
        {polls.map(poll => (
          <li key={poll.id}>
            <Link to={`/polls/${poll.id}`}>{poll.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
