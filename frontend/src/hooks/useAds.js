import { useEffect, useState } from "react";

export async function loadin() {
  return await new Promise((resolve) => {
    let i = 0;
    const p = setInterval(() => {
      if (i < 3) {
        i++;
        return;
      }

      resolve([
        {
          id: 1,
          name: "Lucas",
        },
        {
          id: 2,
          name: "Leros",
        },
      ]);

      clearInterval(p);
      return;
    }, 1000);
  });
}

export function useAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadin()
      .then((res) => res)
      .then((res) => {
        setAds(res);
        console.log(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    ads,
    loading,
    error,
  };
}
