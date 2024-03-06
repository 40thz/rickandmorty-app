import { AxiosInstance } from 'axios';
import { axiosInstance } from './axiosInstance';

const API_URL = process.env.API_URL;

export abstract class HTTPTransport {
  protected http: AxiosInstance;

  protected constructor(endpoint: string) {
    this.http = axiosInstance(`${API_URL}${endpoint}`);
  }
}
