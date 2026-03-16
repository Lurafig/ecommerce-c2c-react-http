import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SetPageTitle } from "../../utils/setPageTitle";

import { AdsList } from "../../components/AdsList/AdsList";

import searchButtonImg from "../../assets/icons8-search.svg";

import styles from "./Home.module.css";

export default function Home() {
  SetPageTitle("home");

  const [searchParams] = useSearchParams();

  const sortParam = searchParams.get("sort") || -1;

  useEffect(() => {
    const opts = document.querySelector("#selectSort select").children;

    const el = opts[Number(sortParam) + 1];

    el.selected = true;
  });

  return (
    <main>
      <div className={styles.searchOptionsCtn}>
        <form action={`h`} className={styles.searchTitlesCtn} method="GET">
          <input
            name="search"
            type="text"
            className={styles.searchInput}
            placeholder="Busque Anúncios"
            required
          ></input>
          <button className={styles.searchButton} type="submit">
            <img src={searchButtonImg} draggable="false"></img>
          </button>
        </form>
        <form className={styles.orderSelectionCtn} id="selectSort" method="GET">
          <select
            name="sort"
            defaultValue=""
            className={styles.orderSelection}
            onChange={(event) => {
              event.currentTarget.form.submit();
            }}
          >
            <option value="" hidden>
              Ordenar Por:
            </option>
            <option value="0">Mais recente</option>
            <option value="1">Mais barato</option>
            <option value="2">Mais caro</option>
          </select>
        </form>
      </div>
      <AdsList />
    </main>
  );
}
