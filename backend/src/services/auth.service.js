import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = [];

export async function register(email, password) {
  const hash = await bcrypt.hash(password, 10);

  const user = { id: Date.now(), email, password: hash };

  users.push(user);

  const { id } = user;

  return { id, email };
}

export async function login(email, password) {
  const user = users.find((u) => u.email === email);

  if (!user) throw new Error("Usuário não encontrado");

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw new Error("Senha inválida");

  return jwt.sign({ id: user.id }, "SECRET", { expiresIn: "1h" });
}
