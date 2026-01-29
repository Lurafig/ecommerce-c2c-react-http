import React from "react";

import { SetPageTitle } from "../../utils/setPageTitle";

import { AdsList } from "../../components/AdsList/AdsList";

import searchButtonImg from "../../assets/icons8-search.svg";

import styles from "./Home.module.css";

export default function Home() {
  SetPageTitle("home");

  return (
    <main>
      <div className={styles.searchOptionsCtn}>
        <div className={styles.searchTitlesCtn}>
          <input
            className={styles.searchInput}
            placeholder="Busque Anúncios"
          ></input>
          <button className={styles.searchButton}>
            <img src={searchButtonImg}></img>
          </button>
        </div>
        <div className={styles.orderSelectionCtn}>
          <select defaultValue="default" className={styles.orderSelection}>
            <option value="default" hidden>
              Ordenar Por:
            </option>
            <option value="0">Mais recente</option>
            <option value="1">Mais barato</option>
            <option value="2">Mais caro</option>
          </select>
        </div>
      </div>
      <AdsList />
    </main>
  );
}
