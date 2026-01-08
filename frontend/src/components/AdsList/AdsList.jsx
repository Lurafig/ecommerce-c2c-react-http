import { useAds } from "../../hooks/useAds";
import AdCtn from "../AdCtn/AdCtn";
import "./AdsList.css";

export function AdsList() {
  const { ads, loading, error } = useAds();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro</p>;

  const listOfAds = ads.map((a) => <AdCtn {...a} />);
  return <div className="AdsListCtn">{listOfAds}</div>;
}
