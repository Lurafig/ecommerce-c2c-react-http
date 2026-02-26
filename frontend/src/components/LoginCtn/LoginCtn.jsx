import React, { useEffect, useState } from "react";

import { UseLoginContext } from "./LoginContext";

// import { useWindowWidth } from "../../hooks/useWindowWidth";

import "./LoginCtn.css";

export default function LoginCtn() {
  const { isOpen, closeLogin } = UseLoginContext();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [below700Px, setBelow700Px] = useState(false);

  useEffect(() => {
    const y = window.matchMedia("(max-width:700px)");

    const handleChange = () => setBelow700Px(y.matches);

    setBelow700Px(y.matches);

    y.addEventListener("change", handleChange);

    return () => y.removeEventListener("change", handleChange);
  }, []);

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div
      className="loginBackground"
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeLogin();
        }
      }}
    >
      <div className="loginForms">
        <div
          className="loginCtn"
          style={{
            display: isLoginForm ? (below700Px ? "grid" : "flex") : "none",
          }}
        >
          <div className="title-and-switch">
            <h2>Logar</h2>
            <div className="switch-form">
              <p className="text-primary-500">
                Não tem uma conta ainda?
                <a className="switch-link" onClick={toggleForm}>
                  registre-se
                </a>
              </p>
            </div>
          </div>
          <form className="loginForm">
            <div className="loginFields">
              <input
                className="bg-amber-100 dark:bg-amber-700"
                type="email"
                placeholder="Email"
                required
              ></input>
              <input
                className="px-0.5"
                type="password"
                placeholder="Senha"
                required
              ></input>
            </div>
            <button>Logar</button>
          </form>
        </div>
        <div
          className="registerCtn"
          style={{
            display: isLoginForm ? "none" : below700Px ? "grid" : "flex",
          }}
        >
          <div className="title-and-switch">
            <h2>Registrar</h2>
            <div className="switch-form">
              <p>
                Já tem uma conta?
                <a className="switch-link" onClick={toggleForm}>
                  Entrar
                </a>
              </p>
            </div>
          </div>
          <form className="loginForm">
            <div className="loginFields">
              <input
                className="px-0.5"
                type="text"
                placeholder="Nome"
                required
              ></input>
              <input
                className="px-0.5"
                type="email"
                placeholder="Email"
                required
              ></input>
              <input
                className="px-0.5"
                type="password"
                placeholder="Senha"
                required
              ></input>
            </div>
            <button className="w-25">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
