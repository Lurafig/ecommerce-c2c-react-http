import { Database } from "../localDatabase.js";

const DATABASE = new Database();

// Controlador para listar todos os produto
export function getProdutos(req, res) {
  const produtoId = parseInt(req.url.split("/")[3]);
  const produtos = DATABASE.get(produtoId);

  res.statusCode = 200;
  res.end(JSON.stringify(produtos));
}

// Controlador para criar um produto
export function createProduto(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      console.log(body);
      const novoProduto = JSON.parse(body);
      novoProduto.id = Date.now();

      DATABASE.add(novoProduto);

      res.statusCode = 201;
      res.end(
        JSON.stringify({ message: "produto criado", produto: novoProduto }),
      );
    } catch (error) {
      res.statusCode = 400;
      res.end(
        JSON.stringify({ message: "Erro ao processar", err: error.message }),
      );
    }
  });
}

// Controlador para atualizar um produto
export function updateProduto(req, res) {
  const id = req.url.split("/")[3];
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const produtoAtualizado = JSON.parse(body);
      produtoAtualizado.id = parseInt(id, 10);

      DATABASE.update(produtoAtualizado);

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Produto atualizado",
          produto: produtoAtualizado,
        }),
      );
    } catch (error) {
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Erro ao processar o produto" }));
    }
  });
}

// Controlador para deletar um produto
export function deleteProduto(req, res) {
  const id = req.url.split("/")[3];

  DATABASE.delete(id);

  res.statusCode = 200;
  res.end(JSON.stringify({ message: `Produto com ID ${id} deletado` }));
}
