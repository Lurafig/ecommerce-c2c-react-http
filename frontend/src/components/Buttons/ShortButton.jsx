import React from "react";
import "./ShortButton.css";

export default function ShortButton({ buttonID, content, background }) {
  return (
    <a
      href="products/223"
      id={buttonID}
      className="ShortButton"
      style={{ backgroundColor: background }}
    >
      {content}
    </a>
  );
}
