import { useAds } from "../../hooks/useAds";

import AdCtn from "../AdCtn/AdCtn";
import Loading from "../Loading/Loading";

import "./AdsList.css";

export function AdsList() {
  const { ads, loading, error } = useAds();

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="AdsListCtn">
        <p>Erro</p>
      </div>
    );

  const listOfAds = ads.map((a) => <AdCtn {...a} />);

  return <div className="AdsListCtn">{listOfAds}</div>;
}
