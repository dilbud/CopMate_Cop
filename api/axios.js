import axios from 'axios';

const AUTH_TOKEN = 'dddddddd';

const instance = axios.create({
  baseURL: 'http://192.168.1.101:3000/app',
});

instance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export default instance;
