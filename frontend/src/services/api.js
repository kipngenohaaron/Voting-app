import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:5000/api',  // Match Flask backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});
