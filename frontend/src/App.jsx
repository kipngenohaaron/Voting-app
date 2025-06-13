import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePoll from './pages/CreatePoll';
import Poll from './pages/Poll';

function App() {
  return (
    <Router>
      <div className="container py-4">
  <h1 className="mb-4 text-center">🗳 Voting App</h1>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePoll />} />
          <Route path="/polls/:id" element={<Poll />} />
        </Routes>
</div>

      <div className="container">
        <h1>🗳 Voting App</h1>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePoll />} />
          <Route path="/polls/:id" element={<Poll />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
