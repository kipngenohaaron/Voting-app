const BASE_URL = "http://127.0.0.1:5000/api";

export const fetchPolls = async () => {
  const res = await fetch(`${BASE_URL}/polls`);
  return res.json();
};

export const createPoll = async (poll) => {
  const res = await fetch(`${BASE_URL}/polls`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(poll),
  });
  return res.json();
};

export const voteOnPoll = async (pollId, optionId) => {
  const res = await fetch(`${BASE_URL}/polls/${pollId}/vote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ option_id: optionId }),
  });
  return res.json();
};
