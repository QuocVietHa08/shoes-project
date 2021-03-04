import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/shoes-project-81cb7/us-central1/api',
});
export default instance;
