import React, { useEffect, useState } from "react";

import "./LoginCtn.css";

export default function LoginCtn() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  useEffect(() => {
    // Função que atualiza o estado com o tamanho atual da janela
    function handleResize() {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    }

    // Adiciona o listener
    window.addEventListener("resize", handleResize);

    // Chama uma vez para garantir estado inicial correto
    handleResize();

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="loginBackground"
      onClick={(event) => {
        if (event.target.className === "loginBackground") {
          event.target.style.display = "none";
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
            <h1>Logar</h1>
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
            <h1>Registrar</h1>
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
