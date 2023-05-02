import { useState, useEffect } from 'react';
import { BACKEND_BASE_URL } from '../constants';

const useGetData = (path) => {
  const url = BACKEND_BASE_URL + path;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          setError('Something went wrong');
          return;
        }
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useGetData;
