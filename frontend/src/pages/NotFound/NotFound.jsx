import React from "react";
import { SetPageTitle } from "../../utils/setPageTitle";

function NotFound() {
  SetPageTitle("404");

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{"This page was not found"}</h1>
    </main>
  );
}

export default NotFound;
