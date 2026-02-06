import React, { useEffect, useState } from "react";

import { UseLoginContext } from "./LoginContext";

import "./LoginCtn.css";

export default function LoginCtn() {
  const { isOpen, closeLogin } = UseLoginContext();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function debounce(fn, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    }

    // Função que atualiza o estado com o tamanho atual da janela
    function handleResize() {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    }

    // Adiciona o listener
    window.addEventListener("resize", debounce(handleResize, 200));

    // Chama uma vez para garantir estado inicial correto
    handleResize();

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div
      className="loginBackground"
      style={{ display: isOpen ? "flex" : "none" }}
      // usa o setIsOpen aqui embaixo!
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
            display: isLoginForm
              ? windowWidth > 700
                ? "flex"
                : "grid"
              : "none",
          }}
        >
          <div className="title-and-switch">
            <h2>Logar</h2>
            <div className="switch-form">
              <p>
                Não tem uma conta ainda?
                <a className="switch-link" onClick={toggleForm}>
                  registre-se
                </a>
              </p>
            </div>
          </div>
          <div className="loginFields">
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button>Logar</button>
          </div>
        </div>
        <div
          className="registerCtn"
          style={{
            display: isLoginForm ? "none" : windowWidth > 700 ? "flex" : "grid",
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
          <div className="loginFields">
            <input placeholder="Nome"></input>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button>Registrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
