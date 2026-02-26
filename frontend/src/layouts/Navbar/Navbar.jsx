import React, { useEffect } from "react";

import LoginProvider, {
  UseLoginContext,
} from "../../components/LoginCtn/LoginContext";

import PostAdImage from "../../assets/AddA.svg";
import NoProfilePic from "../../assets/no-profile-pic.svg";

import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const logged = false;

function NavLinkBttns({ toPage, children, onClick }) {
  const bttnClass = `flex items-center rounded-full
  ${
    {
      "/post":
        "bg-[var(--secondary-color)] border-[4px] border-(--main-background) border-solid",
      "/profile": "bg-(--background4) border-5 border-(--background3)",
    }[toPage]
  }`;

  const bttnSetup = {
    ...{
      "/post": { className: bttnClass },
      "/profile": {
        className: bttnClass,
      },
    }[toPage],
    ...(logged ? { to: "toPage" } : { onClick }),
  };

  return <Link {...bttnSetup}>{children}</Link>;
}

export default function Navbar() {
  const { toggleLogin } = UseLoginContext();

  return (
    <nav className="flex h-[100px] w-full items-center box-border">
      <div className="flex items-center justify-center w-1/2 h-full bg-(--background1)">
        <Link
          to="/home"
          className="absolute w-[100px] h-[35px] -left-[35px] rotate-90 bg-black hover:underline"
        >
          <p className="decoration-2 hover:underline">Home</p>
        </Link>
        <NavLinkBttns toPage="/post" onClick={() => toggleLogin()}>
          <img
            className="w-[50px]"
            src={PostAdImage}
            loading="lazy"
            height="50"
            draggable="false"
          ></img>
        </NavLinkBttns>
      </div>
      <div className="flex items-center justify-center h-full w-1/2 bg-(--background5)">
        <NavLinkBttns toPage="/profile" onClick={() => toggleLogin()}>
          <p className="relative overflow-hidden m-[6px] max-w-[90px] text-nowrap text-ellipsis max-[500px]:hidden">
            Lucas Ramos
          </p>
          <img
            className="rounded-full border-5 border-(--main-background)"
            src={NoProfilePic}
            width="50"
            draggable="false"
          ></img>
        </NavLinkBttns>
      </div>
    </nav>
  );
}
