import axios from 'axios';
import { parseCookies } from 'nookies';

import { onForceLogout } from '@/shared/context/AuthContext';

interface HttpClientProps {
  baseURL: string;
}

export const httpClient = ({ baseURL }: HttpClientProps) => {
  const { 'mais_cupom.accessToken': accessToken } = parseCookies();

  const api = axios.create({
    baseURL,
  });

  if (accessToken) {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        onForceLogout();
      } else {
        return Promise.reject(error);
      }
    },
  );

  return api;
};
