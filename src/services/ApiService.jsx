import axios from 'axios';

const API_URL = 'https://intense-gator-up.ngrok-free.app/api'; // Back-end URL

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'ngrok-skip-browser-warning': 'any-value', // Set the header globally
  },
});

const ApiService = {
  get: (endpoint, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;

    return axiosInstance.get(url);
  },
  post: (endpoint, data) => {
    const headers = data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : {};
    return axiosInstance.post(endpoint, data, { headers });
  },
  
};

export default ApiService;
