import { Database } from "../../localDatabase.js";

const DATABASE = new Database();

export function getProductsByID(id) {
  const produtos = DATABASE.get(id);

  return produtos;
}

export function createProduct(product = { id: null, description, price }) {
  product.id = Date.now();

  DATABASE.add(product);

  return {
    id: product.id,
    description: product.description,
    price: product.price,
  };
}

export function updateProduct(updatedProduct = { id, description, price }) {
  DATABASE.update(updatedProduct);

  return updatedProduct;
}
