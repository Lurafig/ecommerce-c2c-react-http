export default function formatPrice(price) {
  const options = {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "symbol",
  };

  const to = Intl.NumberFormat("pt-BR", options);

  return to.format(price);
}
