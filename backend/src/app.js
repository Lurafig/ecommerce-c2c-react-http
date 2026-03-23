import http from "http";

import * as productsRoutes from "./routes/products.routes.js";
import * as authRoutes from "./routes/auth.routes.js";
import * as userRoutes from "./routes/user.routes.js";

// ==================== Middlewares ====================
function resTimeout(req, res, next) {
  res.setTimeout(5000, () => {
    console.error(`Request timed out: ${req.method} ${req.url}`);
    if (!res.headersSent) {
      res.statusCode = 503;
      res.end(
        JSON.stringify({ error: "Server timeout. Please try again later" }),
      );
    }
  });

  next();
}
function jsonParser(req, res, next) {
  if (
    ["POST", "PUT", "PATCH"].includes(req.method) &&
    req.headers["content-type"] === "application/json"
  ) {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        req.body = body ? JSON.parse(body) : {};
        res.setHeader("Content-Type", "application/json");
        next();
      });
    } catch (error) {
      const body = JSON.stringify({ error: "JSON inválido" });
      res.writeHead(400, { "Content-Type": "application/json" }).end(body);
    }
  } else {
    next();
  }
}

// =====================================================
async function applyMiddlewares(middlewares, req, res) {
  return middlewares.reduce(
    (prev, middleware) =>
      prev.then(() => new Promise((resolve) => middleware(req, res, resolve))),
    Promise.resolve(),
  );
  // let index = 0;

  // const next = () => {
  //   const middleware = middlewares[index++];

  //   if (middleware) {
  //     middleware(req, res, next);
  //   } else {
  //     done();
  //   }
  // };

  // next();
}

const prefRoutes = {
  "/api/auth": authRoutes.handleRequest,
  "/api/user": userRoutes.handleRequest,
  "/api/produtos": productsRoutes.handleRequest,
};

async function handleRequest(req, res) {
  await applyMiddlewares([resTimeout, jsonParser], req, res);
  const routePrefix = req.url.split("/").slice(0, 3).join("/");

  console.log(req.body);
  prefRoutes[routePrefix](req, res);
}

const server = http.createServer();

server.on("request", handleRequest);

export default server;
