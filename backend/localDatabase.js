export class Database {
  #data = [];

  get(id) {
    if (!id) {
      return this.#data;
    }

    return this.#data.filter((a) => (a.id = id));
  }

  add(product) {
    return this.#data.push(product);
  }

  update(produtoAtualizado) {
    this.#data.forEach((produto, index) => {
      if (produto.id === produtoAtualizado.id) {
        console.log("bcd");
        this.#data[index] = produtoAtualizado;
        return;
      }
    });
  }

  delete(id) {
    this.#data = this.#data.filter((a) => a.id != id);
  }
}
