import { useAds } from "../../hooks/useAds";

import AdCtn from "../AdCtn/AdCtn";
import Loading from "../Loading/Loading";

import noAds from "../../assets/icons8-limpar-pesquisa-30.png";
import netError from "../../assets/icons8-error-globe-64 (1).png";

import "./AdsList.css";
import { useSearchParams } from "react-router-dom";

export function AdsList() {
  const { ads, loading, error } = useAds();

  const [searchParams] = useSearchParams();

  const sortParam = searchParams.get("sort");

  if (loading) return <Loading />;

  if (error) {
    if (error instanceof TypeError) {
      return (
        <div>
          <p className="errorMessage">
            <img src={netError} width="40" draggable="false"></img>
            Erro de rede ou conexão
          </p>
        </div>
      );
    }
  }

  ads.sort(
    (a, b) =>
      ({ 0: "", 1: a.price - b.price, 2: b.price - a.price })[sortParam],
  );

  const listOfAds = ads.map((a) => <AdCtn key={a.id} {...a} />);

  if (listOfAds.length === 0) {
    return (
      <div className="noAdsMessageCtn">
        <p className="noAdsMessage">
          <img src={noAds} width="40" draggable="false"></img>Nenhum anúncio
          encontrado
        </p>
      </div>
    );
  }
  // const columnCount = listOfAds.length < 10 ? "1" : "inherit";

  return <div className="AdsListCtn">{listOfAds}</div>;
}
