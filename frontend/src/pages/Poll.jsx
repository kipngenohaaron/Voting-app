import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function Poll() {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    api.get(`/polls/${id}`)
      .then(res => setPoll(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const submitVote = () => {
    api.post(`/polls/${id}/vote`, { option_id: selected })
      .then(() => setVoted(true))
      .catch(err => alert('Vote failed'));
  };

  if (!poll) return <div>Loading...</div>;

  return (
    <div>
  <h2>{poll.question}</h2>
  <form>
    {poll.options.map(opt => (
      <div className="form-check" key={opt.id}>
        <input
          className="form-check-input"
          type="radio"
          name="vote"
          value={opt.id}
          onChange={() => setSelected(opt.id)}
        />
        <label className="form-check-label">{opt.text}</label>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-primary mt-3"
      onClick={submitVote}
      disabled={!selected || voted}
    >
      {voted ? 'Thanks for Voting!' : 'Submit Vote'}
    </button>
  </form>

  {voted && (
    <div className="mt-4">
      <h4>Results</h4>
      <ul className="list-group">
        {poll.options.map(opt => (
          <li className="list-group-item" key={opt.id}>
            {opt.text}: {opt.vote_count} votes
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

    // <div>
    //   <h2>{poll.question}</h2>
    //   {poll.options.map(opt => (
    //     <div key={opt.id}>
    //       <label>
    //         <input
    //           type="radio"
    //           name="vote"
    //           value={opt.id}
    //           onChange={() => setSelected(opt.id)}
    //         />
    //         {opt.text}
    //       </label>
    //     </div>
    //   ))}
    //   <button onClick={submitVote} disabled={!selected || voted}>
    //     {voted ? 'Thanks for Voting!' : 'Submit Vote'}
    //   </button>

    //   {voted && (
    //     <div>
    //       <h3>Results:</h3>
    //       <ul>
    //         {poll.options.map(opt => (
    //           <li key={opt.id}>
    //             {opt.text}: {opt.vote_count} votes
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
  );
}

export default Poll;
