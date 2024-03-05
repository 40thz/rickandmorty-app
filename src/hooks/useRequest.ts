import { useCallback, useState } from 'react';

export const useRequest = <T>(request: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await request();
      setData(res);
      setIsLoading(false);
    } catch (e) {
      setError(e as string);
      setIsLoading(true);
    }
  }, []);

  return {
    isLoading,
    data,
    error,
    refetch,
  };
};
