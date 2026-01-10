import React from "react";

import fotoTeste from "../../assets/fotoTeste.png";

import formatPrice from "../../utils/formatPrice";

import "./AdCtn.css";

export default function AdCtn({ id, description, price }) {
  return (
    <a key={id} className="AdCtn" href="youtube.com">
      <img src={fotoTeste} className="AdImage" draggable="false"></img>
      <div className="AdInfos">
        <h2>{description}</h2>
        <h4>{formatPrice(price)}</h4>
      </div>
    </a>
  );
}
