import {
  getProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
} from "./controllers/produtosController.js";

export function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:2000");

  const routes = {
    "GET /api/produtos": getProdutos,
    "POST /api/produtos": createProduto,
    "PUT /api/produtos": updateProduto,
    "DELETE /api/produtos": deleteProduto,
  };

  const routeKey = `${req.method} ${req.url.split("/").slice(0, 3).join("/")}`;

  const handler = routes[routeKey];

  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}
