import { useEffect } from "react";

Object.defineProperty(String.prototype, "captalize", {
  value: function () {
    return this.split(" ")
      .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
      .join(" ");
  },
});

export function SetPageTitle(title) {
  useEffect(() => {
    if (typeof title !== "string" || !title.trim()) {
      console.warn("Título inválido. O título deve ser uma string não vazia.");
      return;
    }

    document.title = title.trim().captalize() + " | Connte";
  }, [title]);
}
