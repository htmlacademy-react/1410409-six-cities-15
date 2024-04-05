import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {getToken} from './token.ts';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../const.ts';
import {toast} from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }

      throw error;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && !error.response.config.headers['x-no-toast']) {
        toast.error(error.response.data.message, {toastId: 'error'});
      }

      throw error;
    }
  );

  return api;
};
