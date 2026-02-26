import React, { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function debounce(fn, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    }
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", debounce(handleResize, 200));

    return () =>
      window.removeEventListener("resize", debounce(handleResize, 200));
  }, []);

  return width;
}
