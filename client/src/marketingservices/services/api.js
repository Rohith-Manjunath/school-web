import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';
const PRODUCTION_URL="https://school-web-wpxn.onrender.com/api/"
// Create axios instance with default config
const apiClient = axios.create({
  baseURL: PRODUCTION_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor for auth token (if needed)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API service with common CRUD operations
const ApiService = {
  // GET request
  get: async (endpoint, params = {}) => {
    try {
      const response = await apiClient.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  },

  // POST request
  post: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('POST Error:', error);
      throw error;
    }
  },

  // PUT request
  put: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('PUT Error:', error);
      throw error;
    }
  },

  // DELETE request
  delete: async (endpoint) => {
    try {
      const response = await apiClient.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('DELETE Error:', error);
      throw error;
    }
  },

  // PATCH request (bonus)
  patch: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.patch(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('PATCH Error:', error);
      throw error;
    }
  }
};

export default ApiService;