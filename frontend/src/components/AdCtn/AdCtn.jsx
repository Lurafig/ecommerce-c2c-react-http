import React from "react";

import fotoTeste from "../../assets/fotoTeste.png";

import "./AdCtn.css";

export default function AdCtn({ id, description, price }) {
  return (
    <a key={id} className="AdCtn" href="/products/123">
      <img src={fotoTeste} className="AdImage" draggable="false"></img>
      <div className="AdInfos">
        <h2>{description}</h2>
        <h4>{price}</h4>
      </div>
    </a>
  );
}
