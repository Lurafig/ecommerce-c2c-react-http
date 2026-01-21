import React from "react";
import styles from "./Navbar.module.css";
import PostAdImage from "../../assets/AddA.svg";
import ShortButton from "../../components/Buttons/ShortButton";
const p = true;

// Inserir container de login.

export default function Navbar() {
  return (
    <nav className={styles.MainNavbar}>
      <div className={styles.HomeAndUploadCtn}>
        <ShortButton
          buttonID="hellou"
          content={<img src={PostAdImage} height="50"></img>}
        />
      </div>
      <div className={styles.profileLinkCtn}>{p && <p>2</p>}</div>
    </nav>
  );
}
