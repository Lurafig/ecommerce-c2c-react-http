import React, { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404 | Connte";
  }, []);

  return (
    <main>
      <h1>404 this page was not found</h1>
    </main>
  );
}

export default NotFound;
