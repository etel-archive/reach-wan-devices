import { useState } from 'react';
import { BACKEND_BASE_URL } from '../constants';

const useFetchPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (path, payload) => {
    const url = BACKEND_BASE_URL + path;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      throw error;
    }
  };

  return { isLoading, error, postData };
};

export default useFetchPost;
