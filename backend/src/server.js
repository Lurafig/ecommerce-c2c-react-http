import server from "./app.js";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

server.on("close", () => {
  console.log("Servidor foi encerrado");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("Encerrando servidor");

  server.close();
});
