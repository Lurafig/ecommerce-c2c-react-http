import React, { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile | Connte";
  }, []);
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Profile page here</h1>
    </main>
  );
}
