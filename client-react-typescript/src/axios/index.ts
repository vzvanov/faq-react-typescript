import axios from 'axios';

export const API_URL: string = `http://localhost:5000/api`;

const http = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

export default http;