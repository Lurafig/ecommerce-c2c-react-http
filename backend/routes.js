import {
  getProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
} from "./controllers/produtosController";

export function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");

  const routes = {
    "GET /api/produtos": getProdutos,
    "POST /api/produtos": createProduto,
    "PUT /api/produtos": updateProduto,
    "DELETE /api/produtos": deleteProduto,
  };

  const routeKey = `${req.method} ${req.url}`;

  const handler = routes[routeKey];

  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}
