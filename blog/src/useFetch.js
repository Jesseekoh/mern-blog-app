import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData]  = useState(null);
  const [isLoading, setLoading]  = useState(true);
  const [error, setError]  = useState(false);

  useEffect(() => {
    fetch(url, {credentials: 'include'})
      .then(res => {
        if (!res.ok) {
	  throw Error('Could not fetch data for that resourse');
	}
	return res.json();
      })
      .then(data => {
        setData(data);
	setLoading(false);
	setError(false);
      })
      .catch(err => {
        setError(err.message);
	setLoading(false)
      })
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
