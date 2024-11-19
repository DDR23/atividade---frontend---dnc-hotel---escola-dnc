import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';

export default function usePost<T, R>(url: string, data: T, options: AxiosRequestConfig = {}) {
  const [isPosting, setIsPosting] = useState(false);
  const [response, setResponse] = useState<AxiosResponse<R> | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const sendRequest = async () => {
    setResponse(null);
    setError(null);
    setIsPosting(true);

    try {
      const res = await axios.post<R>(url, data, options);
      setResponse(res);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setIsPosting(false);
    }
  };

  return { isPosting, response, error, sendRequest };
}
