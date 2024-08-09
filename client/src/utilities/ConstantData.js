import axios from 'axios';

export const URL = "https://matches-server.codiepi.com/api";
export const StorageURL = "https://matches-server.codiepi.com/uploads";

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
 
