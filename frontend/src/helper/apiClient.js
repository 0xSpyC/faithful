import React from 'react';
import axios from 'axios';

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/"
    });
  return (axiosInstance);
}

export default apiClient;