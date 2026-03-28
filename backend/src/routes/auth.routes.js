import * as authController from "../controllers/auth.controller.js";

const routes = {
  "POST /auth/register": authController.register,
  "POST /auth/login": authController.login,
};

export async function handleRequest(req, res) {
  const routeKey = `${req.method} /${req.url.split("/").slice(2, 4).join("/")}`;

  const handler = await routes[routeKey](req, res);
}
