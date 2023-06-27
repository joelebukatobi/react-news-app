import axios from 'axios';
import { setTokenCookie, removeTokenCookie, getTokenFromCookie } from '@/helpers/cookieHelper';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  API_URL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get news feed
export const getNews = async (page) => {
  const response = await api.get(`${API_URL}/news?page=${page}`);
  return response;
};

// Function to get search news feed
export const searchNews = async (page, query) => {
  const response = await api.get(`${API_URL}/news/search?q=${query}&page=${page}`);
  return response;
};

// Function to get news by category
export const getNewsByCategory = async (page, query) => {
  const response = await api.get(`${API_URL}/news/category?q=${query}&page=${page}`);
  return response;
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post(`${API_URL}/register`, userData);
    const token = response.data.token;
    setTokenCookie(token); // Set the token in a cookie
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post(`${API_URL}/login`, credentials);
    const token = response.data.token;
    setTokenCookie(token); // Set the token in a cookie
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchUser = async () => {
  const token = getTokenFromCookie(); // Get the token from the cookie
  if (!token) {
    throw new Error('Token not found in cookie'); // Handle token not found error
  }
  try {
    const response = await api.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutUser = async (token) => {
  try {
    const response = await api.post(`${API_URL}/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    removeTokenCookie(); // Remove the token cookie
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
