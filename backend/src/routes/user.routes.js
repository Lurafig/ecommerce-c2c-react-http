import * as userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const routes = {
  "GET /user/me": userController.getMe,
};

async function applyMiddlewares(middlewares, req, res) {
  return middlewares.reduce(
    (prev, middleware) =>
      prev.then(() => new Promise((resolve) => middleware(req, res, resolve))),
    Promise.resolve(),
  );
}

export async function handleRequest(req, res) {
  await applyMiddlewares([authMiddleware], req, res);

  const routeKey = `${req.method} /${req.url.split("/").slice(2, 4).join("/")}`;
  routes[routeKey](req, res);
}
