import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/polls', { question, options })
      .then(() => navigate('/'))
      .catch(err => alert('Error creating poll'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Poll</h2>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        required
      />
      <h3>Options</h3>
      {options.map((opt, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={`Option ${idx + 1}`}
          value={opt}
          onChange={e => handleOptionChange(idx, e.target.value)}
          required
        />
      ))}
      <button type="button" onClick={addOption}>Add Option</button>
      <br />
      <button type="submit">Submit Poll</button>
    </form>
  );
}

export default CreatePoll;
