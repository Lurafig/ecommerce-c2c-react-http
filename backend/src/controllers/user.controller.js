import * as userService from "../services/user.service.js";
import { URL } from "url";

export async function getMe(req, res) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const params = parsedUrl.searchParams;
  const id = params.get("id");

  const user = await userService.getById(id);

  res.setHeader("Content-Type", "application/json");
  res.statusCode = user ? 200 : 404;
  res.end(JSON.stringify(user || { erro: "Usuário não encontrado" }));
}
