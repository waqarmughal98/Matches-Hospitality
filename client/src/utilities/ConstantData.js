import axios from 'axios';

export const URL = "http://localhost:5000/api";
export const StorageURL = "http://localhost:5000";

export const axiosInstance = () => {
  const token=JSON.parse(localStorage.getItem('userData')).token;
    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };


  export const axiosInstance2 = () => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
  };
 
