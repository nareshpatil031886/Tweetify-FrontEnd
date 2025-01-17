import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); // Load variables from .env
const apiUrl = process.env.TWIDDLE_BACKEND_URL || 'http://localhost:8000';
// Sign up
export const signupUser = async (userData: { email: string, password: string }) => {
  try {
    const response = await axios.post(`${apiUrl}/api/auth/signup/`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Login
export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${apiUrl}/api/auth/login/`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}
