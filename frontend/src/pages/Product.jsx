import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [count, setCount] = useState(0);

  const { productID } = useParams();

  useEffect(() => {
    if (count === 0) return;

    console.log(`Count updated to: ${count}`);

    return () => {
      console.log("Cleanup", count);
    };
  }, [count]);

  return (
    <main>
      <div>
        <h1>Contador de cliques</h1>
        <h2>o id é {productID}</h2>
        <button onClick={() => setCount(count + 1)}>Clique</button>
        <p>Botão clicado {count} vezes</p>
      </div>
    </main>
  );
};

export default Products;
