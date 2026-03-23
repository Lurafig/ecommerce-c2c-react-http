import * as userService from "../services/user.service.js";
import { URL } from "url";

export async function getMe(req, res) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const params = parsedUrl.searchParams;
  const id = params.get("id");
  console.log("esse é o id", id);

  const user = await userService.getById(id);

  res.statusCode = user ? 200 : 404;
  res.end(JSON.stringify(user || { erro: "Usuário não encontrado" }));
}
