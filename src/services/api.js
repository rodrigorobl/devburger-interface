import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://devburger-api-jyne.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
});

// Adicionar interceptor para tratar erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
