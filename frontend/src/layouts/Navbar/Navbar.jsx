import React, { useState } from "react";

import PostAdImage from "../../assets/AddA.svg";
import NoProfilePic from "../../assets/no-profile-pic.svg";

import ShortButton from "../../components/Buttons/ShortButton/ShortButton";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

// Inserir container de login.

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggleLoginDisplay = () => {
    setIsopen(!isOpen);
  };

  const e = {
    a: { to: "/profile", className: styles.profileLink },
    b: { onclick: toggleLoginDisplay },
  };

  return (
    <nav className={styles.MainNavbar}>
      <div className={styles.HomeAndUploadCtn}>
        <Link to="/home" className={styles.HomeLink}>
          <p>Home</p>
        </Link>
        <ShortButton
          page="/post"
          buttonID="hellou"
          content={<img src={PostAdImage} height="50"></img>}
        />
      </div>
      <div className={styles.profileLinkCtn}>
        <Link {...{ ...e.a, className: styles.profileLink }}>
          <p>Lucas Ramos</p>
          <ShortButton
            page="/profile"
            buttonID="opa"
            content={<img src={NoProfilePic} height="50"></img>}
            background="var(--background2)"
          ></ShortButton>
        </Link>
      </div>
    </nav>
  );
}
