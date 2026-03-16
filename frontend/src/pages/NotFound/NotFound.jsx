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
      <h2 className="text-3xl w-[400px] grid">
        <span className="text-7xl text-amber-600 font-bold">404</span>
        {"This page was not found"}
      </h2>
    </main>
  );
}

export default NotFound;
