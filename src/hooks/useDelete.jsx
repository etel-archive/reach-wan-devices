import { useState } from 'react';
import { BACKEND_BASE_URL } from '../constants';

const useDelete = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteData = async (path) => {
    const url = BACKEND_BASE_URL + path;
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return { success, error, isLoading, deleteData };
};

export default useDelete;
