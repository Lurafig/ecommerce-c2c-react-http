import * as authService from "../services/auth.service.js";

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.statusCode = 400;
    res.end(JSON.stringify({ erro: "Email e password são obrigatórios" }));
  }

  const token = await authService.login(email, password);

  res.end(JSON.stringify({ token }));
}

export async function register(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.statusCode = 400;
    res.end(JSON.stringify({ erro: "Email e password são obrigatórios" }));
  }

  const user = await authService.register(email, password);

  res.statusCode = 201;
  res.end(JSON.stringify(user));
}
