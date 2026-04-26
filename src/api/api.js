import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllJobs = async (e) => {
  try {
    const response = await api.get(`/jobs?page=${e.queryKey[1] || 1}&limit=10`);
    console.log('Fetched jobs:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
