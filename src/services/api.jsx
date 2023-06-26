import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; // Replace with your backend URL

export const getNews = (page) => {
  return axios.get(`${BASE_URL}/news?page=${page}`);
};

export const searchNews = (page, query) => {
  return axios.get(`${BASE_URL}/news/search?q=${query}&page=${page}`);
};

export const getNewsByCategory = (page, query) => {
  return axios.get(`${BASE_URL}/news/category?q=${query}&page=${page}`);
};
