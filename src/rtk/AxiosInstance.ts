// axiosInstance.js
import axios from 'axios';
const axiosInstance = axios.create({
 baseURL: 'https://dummyjson.com/auth/', // Replace with your API base URL
 headers: {
   'Content-Type': 'application/json',
   // Add any other headers or configurations you need
 },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
 (config) => {
   // You can modify the request config here, e.g., add authentication headers
   // config.headers.Authorization = `Bearer ${getToken()}`;
   console.log('MAIN_CONFIGGGGGGGG',config)
   return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
 (response) => {
   // You can modify the response data here, e.g., handling pagination
   return response.data;
 },
 (error) => {
  console.log('Response ERRRRRRRRRRRRRRR',error)
   return Promise.reject(error);
 }
);

export default axiosInstance;