import React from "react";
import { SetPageTitle } from "../../utils/setPageTitle";

export default function Post() {
  SetPageTitle("post");

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Post page here</h1>
    </main>
  );
}
