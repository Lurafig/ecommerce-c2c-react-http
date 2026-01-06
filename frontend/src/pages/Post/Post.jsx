import React, { useEffect } from "react";

export default function Post() {
  useEffect(() => {
    document.title = "Post | Connte";
  }, []);

  return (
    <main>
      <h1>Post page here</h1>
    </main>
  );
}
