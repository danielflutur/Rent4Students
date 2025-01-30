import axios from 'axios';

const API_URL = 'http://api.geonames.org'; // Back-end URL
const username = '&username=dflutur';
const endpoint = 'childrenJSON';
const AddressApiService = {
  get: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${API_URL}/${endpoint}?${queryString}${username}` : `${API_URL}/${endpoint}`;
    return axios.get(url);
  }
 };

export default AddressApiService;
