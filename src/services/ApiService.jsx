import axios from 'axios';

const API_URL = 'https://localhost:7013/api'; // Back-end URL

const ApiService = {
  get: (endpoint, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${API_URL}/${endpoint}?${queryString}` : `${API_URL}/${endpoint}`;
    return axios.get(url);
  },
  post: (endpoint, data) => axios.post(`${API_URL}/${endpoint}`, data),
 };

export default ApiService;
