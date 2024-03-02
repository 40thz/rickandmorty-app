import axios from 'axios';

export const axiosInstance = (baseUrl: string) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 1000,
  });
};
