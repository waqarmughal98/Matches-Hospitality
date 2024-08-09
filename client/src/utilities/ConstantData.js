import axios from 'axios';

export const URL = "https://matches-hospitality-server.vercel.app/api";
export const StorageURL = "https://matches-hospitality-server.vercel.app";

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
 
