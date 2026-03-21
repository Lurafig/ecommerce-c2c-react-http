import * as productsService from "../services/products.service.js";

// Controlador para listar todos os produtos
export function getProdutos(req, res) {
  const produtoId = parseInt(req.url.split("/")[3]);
  const produtos = productsService.getProductsByID(produtoId);

  res.statusCode = 200;
  res.end(JSON.stringify(produtos));
}

// Controlador para criar um produto
export function createProduto(req, res) {
  try {
    const newProduct = productsService.createProduct(req.body);

    res.statusCode = 201;
    res.end(
      JSON.stringify({
        message: "Produto criado com sucesso",
        produto: newProduct,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(
      JSON.stringify({ message: "Erro ao processar", err: error.message }),
    );
  }
}

// Controlador para atualizar um produto
export function updateProduto(req, res) {
  const id = req.url.split("/")[3];

  try {
    const produtoBody = req.body;
    produtoBody.id = parseInt(id);

    const produtoAtualizado = productsService.update(produtoBody);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Produto atualizado",
        produto: produtoAtualizado,
      }),
    );
  } catch (error) {
    console.log(error.message);
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "Erro ao processar o produto" }));
  }
}

// Controlador para deletar um produto
export function deleteProduto(req, res) {
  const id = req.url.split("/")[3];

  DATABASE.delete(id);

  res.statusCode = 200;
  res.end(JSON.stringify({ message: `Produto com ID ${id} deletado` }));
}
