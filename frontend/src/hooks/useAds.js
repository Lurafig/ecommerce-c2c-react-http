import { useEffect, useState } from "react";

const p = [];

import formatPrice from "../utils/formatPrice";

export async function loadin() {
  return fetch("http://localhost:3000/api/produtos");
  // return await new Promise((resolve) => {
  //   let i = 0;
  //   const p = setInterval(() => {
  //     if (i < 2) {
  //       i++;
  //       return;
  //     }

  //     const texts = [
  //       "testando d ednjnrjnjnd de edndejnj denjdn jednedjed dejnjdnadjndneidniueuidheihidhaidihehdiuaehudiheuad adniuheadhuaehduh adnaeuhduiaehui eaduneidhiuahefuuyrygyg beduyysygsyugf",
  //       "opa eu sou iiai dna dnudenu iaa iaa ie ie ie ie",
  //       "eu não sei",
  //     ];

  //     resolve(
  //       (() => {
  //         let list = [];
  //         for (let i = 0; i < 15; i++) {
  //           list.push({
  //             id: i,
  //             description: texts[Math.floor(Math.random() * 3)],
  //             price: formatPrice(parseFloat((Math.random() * 10).toFixed(2))),
  //           });
  //         }
  //         return list;
  //       })(),
  //     );

  //     clearInterval(p);
  //     return;
  //   }, 1000);
  // });
}

export function useAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadin()
      .then((res) => res.json())
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
