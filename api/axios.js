import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/mobi',
});

const AUTH_TOKEN = 'dddddddd';

instance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export default instance;
