import { useCallback, useEffect, useState } from 'react';
import { getPosts } from '../services';

export default function useQuery({ query }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      const response = await getPosts({ query });
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { loading, error, data };
}
