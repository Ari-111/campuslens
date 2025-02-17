import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login/', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register/', userData);
    return response.data;
  },
};

export const eventService = {
  getEvents: async () => {
    const response = await api.get('/events/');
    return response.data;
  },
  createEvent: async (eventData: any) => {
    const response = await api.post('/events/', eventData);
    return response.data;
  },
};

export const photoService = {
  getPhotos: async () => {
    const response = await api.get('/photos/');
    return response.data;
  },
  
  uploadPhoto: async (formData: FormData) => {
    const response = await api.post('/photos/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  likePhoto: async (photoId: number) => {
    const response = await api.post(`/photos/${photoId}/like/`);
    return response.data;
  },
  
  addComment: async (photoId: number, content: string) => {
    const response = await api.post(`/photos/${photoId}/comments/`, { content });
    return response.data;
  },
};

export default api; 