import { useEffect, useState } from "react";

export function useAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then(setAds)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    ads,
    loading,
    error,
  };
}
