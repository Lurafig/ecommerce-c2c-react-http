import React from "react";
import { AdsList } from "../../components/AdsList";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.searchOptionsCtn}>
        <input className={styles.searchInput}></input>
        <select className={styles.orderSelection}>
          <option selected hidden>
            Ordenar por:
          </option>
        </select>
      </div>
      <AdsList />
      <h1>Hello, World, home</h1>
    </main>
  );
}
