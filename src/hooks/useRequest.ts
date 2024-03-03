import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';

export const useRequest = <T>(request: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = (await request()) as AxiosResponse<T>;

      setData(data);
      setIsLoading(false);
    } catch (e) {
      setError(e as string);
    }
  }, []);

  return {
    isLoading,
    data,
    error,
    refetch,
  };
};
