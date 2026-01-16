export default function formatPrice(price) {
  if (typeof price !== "number") {
    throw new Error("O preço deve ser um valor válido");
  }

  if (price <= 0) {
    return "Grátis";
  }

  const options = {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "symbol",
  };

  const to = new Intl.NumberFormat("pt-BR", options);

  return to.format(price);
}
