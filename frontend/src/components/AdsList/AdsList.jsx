import { useAds } from "../../hooks/useAds";

import AdCtn from "../AdCtn/AdCtn";
import Loading from "../Loading/Loading";

import noAds from "../../assets/icons8-limpar-pesquisa-30.png";
import netError from "../../assets/icons8-error-globe-64 (1).png";

import "./AdsList.css";

export function AdsList() {
  const { ads, loading, error } = useAds();

  if (loading) return <Loading />;

  if (error) {
    if (error instanceof TypeError) {
      return (
        <div>
          <p className="errorMessage">
            <img
              // className="w-[40px]"
              src={netError}
              width="40"
              draggable="false"
            ></img>
            Erro de rede ou conexão
          </p>
        </div>
      );
    }
  }

  const listOfAds = ads.map((a) => <AdCtn {...a} />);

  if (listOfAds.length === 0) {
    return (
      <div className="noAdsMessageCtn">
        <p className="noAdsMessage">
          <img src={noAds} draggable="false" height="40"></img>Nenhum anúncio
          encontrado
        </p>
      </div>
    );
  }
  // const columnCount = listOfAds.length < 10 ? "none" : "inherit";

  return (
    <div className="AdsListCtn" style={{ columnCount: "inherit" }}>
      {listOfAds}
    </div>
  );
}
