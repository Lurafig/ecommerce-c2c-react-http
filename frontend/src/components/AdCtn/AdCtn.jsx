import React from "react";

import "./AdCtn.css";

export default function AdCtn({ id, description, price }) {
  return (
    <a key={id} className="AdCtn" href="youtube.com">
      <img className="AdImage"></img>
      <div className="AdInfos">
        <h2>{description}</h2>
        <h4>{price}</h4>
      </div>
    </a>
  );
}
