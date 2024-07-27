import axios from 'axios';

export const URL = "http://localhost:5000/api";

export const axiosInstance = (token) => {
    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

 
